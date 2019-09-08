import React, { useEffect, useMemo, FunctionComponent } from "react";
import { I18nextProvider } from "react-i18next";
import withLocation, { WithLocationProps } from "./utils/withLocation";
import getLangFromPathname from "./utils/getLangFromPathname";
import { i18n } from "i18next";
import { PluginOptions } from "./types";

const trimSlashes = (str: string) => {
  const withoutTrailing = str.endsWith("/")
    ? str.substring(0, str.length - 1)
    : str;
  const withoutPrepended = withoutTrailing.startsWith("/")
    ? withoutTrailing.substring(1)
    : withoutTrailing;
  return withoutPrepended;
};

interface WrapRootProps extends WithLocationProps {
  children: React.ReactNode;
  i18n: i18n;
  options: PluginOptions;
}

const WrapRoot: FunctionComponent<WrapRootProps> = ({
  children,
  i18n,
  location,
  navigate,
  options: { languages = [], allowIndex = false, defaultLng = "en" }
}) => {
  const lang = useMemo(() => {
    return getLangFromPathname(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (languages.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, languages]);

  useEffect(() => {
    const currentLang = lang;
    if (languages.includes(currentLang) && currentLang !== i18n.language) {
      const currentPathWithoutLanguage = location.pathname.substring(3);
      const newPath = `/${i18n.language}/${trimSlashes(
        currentPathWithoutLanguage
      )}`;
      navigate(newPath);
    }
  }, [i18n.language, languages, lang, navigate, location.pathname]);

  const renderChildren = useMemo(() => {
    if (allowIndex) return true;
    if (location.pathname === "/") {
      return allowIndex;
    }

    return true;
  }, [location.pathname, allowIndex]);

  useEffect(() => {
    if (!renderChildren) {
      const probableLanguage = navigator.language;
      navigate(
        `/${
          languages.includes(probableLanguage) ? probableLanguage : defaultLng
        }`,
        { replace: true }
      );
    }
  }, [renderChildren, navigate, languages]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default withLocation<WrapRootProps>(WrapRoot);
