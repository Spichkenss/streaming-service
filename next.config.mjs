await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  images: {
    domains: ['images.clerk.dev', 'www.gravatar.com']
  }
};
export default config;
