import {
  BING_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from "astro:env/server";
import i18nConfig, { type I18nConfig } from "./i18n.config";

export { i18nConfig };
export type { I18nConfig };

export interface SiteConfig {
  name: string;
  description: string;
  tagline?: string;
  footerNote?: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  /**
   * Header options. Set `showSocialLinks: true` to render an icon link in the
   * top-right for each entry in `socialLinks` (GitHub, X, etc. — the icon is
   * inferred from the URL). Off by default; an explicit `<Header
   * showSocialLinks>` prop still overrides this per-usage.
   */
  header?: {
    showSocialLinks?: boolean;
  };
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /** Path to author photo */
  authorImage?: string;
  /**
   * Set to false if blog post images already mathc theme color
   * and you don't nwant brand color overlay applied on top of them.
   */
  blogImageOverlay?: boolean;
  /**
   * Article features - opt-in modules for blog posts.
   * Each is off by default
   */
  articleFeatures?: {
    /** Table of contents shown on blog posts (auto-generated from headings) */
    toc?: {
      /** Master switch - set to true to enable site-wide */
      enabled: boolean;
      /**
       * Where to render the TOC
       * - 'inline' -> card at the top of every post (default; preserves
       *              full reading width on desktop)
       * - 'sidebar' -> sticky sidebar on `xl+` viewports (>=1280px),
       *                hidden on smaller screens
       * - 'auto' -> sidebar on `xl+` inline card below `xl` so phone
       *             and tablet readers still get the navigation
       */
      layout?: "inline" | "sidebar" | "auto";
      /**
       * Which side the sidebar TOC sits on when applied to
       * 'sidebar' or 'auto'. Defaults to right.
       */
      sidebarPosition?: "left" | "right";
      /** Minimum headings before the TOC renders */
      minHeadings?: number;
      /** Deppest heading level to include (2 = h2 only, 3 = h2 + h3, etc) */
      maxDepth?: 2 | 3 | 4;
    };
    /** Comments at the bottom of blog posts (Giscus, Cusdis, or Artalk) */
    comments?: {
      enabled: boolean;
      /** Comments provider */
      provider?: "giscus" | "cusdis" | "artalk";
      /** Giscus config - get values from https://giscus.app */
      giscus?: {
        repo: `${string}/${string}`;
        repoId: string;
        category: string;
        categoryId: string;
        mapping?:
          | "pathname"
          | "url"
          | "title"
          | "og:title"
          | "specific"
          | "number";
        strict?: boolean;
        reactionsEnabled?: boolean;
        emitMetadata?: boolean;
        inputPosition?: "top" | "bottom";
        /** Giscus Theme */
        theme?: string;
        /** Giscus language. Leave empty (the default) to follow site's
         * current locale. Set a specific language code to override.
         */
        lang?: string;
      };
      /** Cusdis app ID */
      cusdis?: {
        appId: string;
        /**
         * Cusdis instance host. Defaults ot the hosted service
         * 'https://cusdis.com'; set this to your own URL when self-hosting.
         */
        host?: string;
        /**
         * Theme. Leave empty (the default) to follow the site's own light/dark
         * mode — resolved on the client and re-rendered when the visitor
         * toggles (Cusdis has no live theme API, so the thread briefly reloads
         * on toggle). Use 'auto' to follow the OS preference instead, or
         * 'light' / 'dark' for a fixed theme.
         */
        theme?: "" | "light" | "dark" | "auto";
        lang?: string;
      };
      /** Artalk config. Requires your own server. */
      artalk?: {
        server: string;
        site: string;
        jsUrl?: string;
        cssUrl?: string;
        darkMode?: boolean | "auto";
        locale?: string;
      };
    };
  };
  /**
   * Blog listing configuration. Counts that were previously hard-coded across
   * `lib/blog.ts` and the route files live here so they're tunable in one
   * place. (The existing `blogImageOverlay` / `articleFeatures` keys are left
   * where they are for backwards compatibility and may fold in at a major.)
   */
  blog?: {
    postsPerPage?: number;
    tagCloudLimit?: number;
  };
  /** Projects listing configuration **/
  projects?: {
    perPage?: number;
    tagCloudLimit?: number;
  };
  /**
   * Internationalization (i18n) — see `src/config/i18n.config.ts`.
   * Lives in a separate file so the i18n module can be imported by
   * unit tests without pulling in `astro:env/server`.
   */
  i18n?: I18nConfig;
  /**
   * Branding configuration
   * Logo files: src/assets/branding/
   * Favicon: public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
      /**
       * Optional path to a custom logo image in public/ (e.g. '/logo.svg').
       * When set, it replaces the generated letter-monogram badge in the
       * header, footer, and anywhere <Logo> is rendered — no layout edits
       * needed. Leave unset to keep the monogram. Per-author byline avatars
       * (which pass an explicit letter) are unaffected.
       */
      image?: string;
      imageUrl?: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: "WeisGarden",
  description:
    "The digital garden of Andrew Weisbeck - my own corner of the internet for working in public, sharing ideas, getting feedback, connecting ideas, and creating awesome shit.",
  tagline: "The digital garden of Andrew Weisbeck",
  footerNote: "© 2026 WeisMind (by Andrew Weisbeck). All rights reserved.",
  url: SITE_URL || "https://weisgarden.deno.dev",
  ogImage: "/og-default.svg",
  author: "Andrew Weisbeck",
  email: "andrew.weisbeck@gmail.com",
  address: {
    street: "CASA Apartments",
    city: "Durham",
    state: "NC",
    zip: "27701",
    country: "United States of America",
  },
  socialLinks: [
    "https://github.com/geauxweisbeck4",
    "https://twitter.com/geauxweisbeck4",
    "https://fosstodon.org/geauxweisbeck4",
    "https://www.linkedin.com/in/geauxweisbeck4/",
    "https://www.instagram.com/geauxweisbeck4/",
    "https://bsky.app/profile/weismind.bsky.social",
  ],
  header: {
    showSocialLinks: true,
  },
  twitter: {
    site: "https://x.com/geauxweisbeck4",
    creator: "@geauxweisbeck4",
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: "/avatar.svg",
  blogImageOverlay: true,
  articleFeatures: {
    toc: {
      enabled: true,
      layout: "auto",
      sidebarPosition: "left",
      minHeadings: 3,
      maxDepth: 3,
    },
    comments: {
      enabled: false,
      provider: "giscus",
      giscus: {
        repo: "owner/repo",
        repoId: "",
        category: "General",
        categoryId: "",
        mapping: "pathname",
        strict: false,
        reactionsEnabled: true,
        emitMetadata: false,
        inputPosition: "bottom",
        // Empty → follow the site's light/dark mode and current locale.
        theme: "",
        lang: "",
      },
      // Used when provider is 'cusdis'. Get your App ID from the Cusdis
      // dashboard (Embed Code); `host` defaults to the hosted service.
      cusdis: {
        appId: "",
        host: "https://cusdis.com",
        // Empty → follow the site's light/dark mode and current locale.
        theme: "",
        lang: "",
      },
      // Used when provider is 'artalk'. Point `server` at your own Artalk
      // service — use an https:// address in production (a plain http:// URL
      // is blocked as mixed content on an https site and is open to
      // tampering). Comments render only once both `server` and `site` are set.
      artalk: {
        server: "",
        // The Artalk "site" name you configured in the Artalk dashboard
        // (used for multi-site isolation).
        site: "",
        // Optional: override the client asset URLs when needed.
        // jsUrl: 'https://cdn.example.com/artalk/Artalk.js',
        // cssUrl: 'https://cdn.example.com/artalk/Artalk.css',
        // Leave undefined → follow the site's light/dark mode and locale.
        // darkMode: 'auto',
        // locale: 'en',
      },
    },
  },
  blog: {
    postsPerPage: 12,
    tagCloudLimit: 10,
  },
  projects: {
    perPage: 12,
    tagCloudLimit: 10,
  },
  i18n: i18nConfig,
  branding: {
    logo: {
      alt: "WeisGarden",
      imageUrl: "/favicon.svg",
    },
    favicon: {
      svg: "/favicon.svg",
    },
    colors: {
      themeColor: "#00ffb1",
      backgroundColor: "#ffffff",
    },
  },
};

export default siteConfig;
