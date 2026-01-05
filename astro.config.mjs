export default defineConfig({
  output: "server",
  site: "https://your-domain.com",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
});
