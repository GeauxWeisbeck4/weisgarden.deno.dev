import type { SiteConfig } from "./types.ts";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
  author: "Andrew Weisbeck",
  date: {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  description:
    "Where ideas grow, creativity flourishes, and work is conducted in public. Welcome to the digital garden of Andrew Weisbeck.",
  lang: "en-US",
  ogLocale: "en_US",
  title: "WeisGarden",
  subTitle: "🌿 Andrew's Digital Garden",
  url: "https://weisgarden.deno.dev",
};

export const navbarLinks: { path: string; title: string }[] = [
  { path: "/about", title: "About" },
  { path: "/garden", title: "Garden" },
  { path: "/journal", title: "Journal" },
  { path: "/projects", title: "Projects" },
  { path: "/links", title: "Links" },
  { path: "/tags", title: "Tags" },
  { path: "/support", title: "Support" },
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
  styleOverrides: {
    borderRadius: "4px",
    codeFontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    codeFontSize: "0.875rem",
    codeLineHeight: "1.7142857rem",
    codePaddingInline: "1rem",
    frames: {
      frameBoxShadowCssValue: "none",
    },
    uiLineHeight: "inherit",
  },
  themeCssSelector(theme, { styleVariants }) {
    // If one dark and one light theme are available
    // generate theme CSS selectors compatible with cactus-theme dark mode switch
    if (styleVariants.length >= 2) {
      const baseTheme = styleVariants[0]?.theme;
      const altTheme = styleVariants.find((v) =>
        v.theme.type !== baseTheme?.type
      )?.theme;
      if (theme === baseTheme || theme === altTheme) {
        return `[data-theme='${theme.type}']`;
      }
    }
    // return default selector
    return `[data-theme="${theme.name}"]`;
  },
  // One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
  themes: ["dracula", "github-light"],
  useThemedScrollbars: false,
};
