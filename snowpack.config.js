/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    '~': '.',
    '>': './src'
  },
  mount: {
    /* ... */
    // public: { url: '/', static: true },
    build: { url: '/' },
    src: { url: '/' }
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  // optimize: {
  //   /* Example: Bundle your final build: */
  //   // "bundle": true,
  //   entrypoints: 'auto',
  //   preload: false,
  //   bundle: true,
  //   splitting: true,
  //   treeshake: true,
  //   manifest: true,
  //   minify: true,
  //   target: 'es2020'
  // },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3002,
    out: 'build/client',
    open: 'none'
  },
  buildOptions: {
    /* ... */
    baseUrl: '.'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-typescript',
      {
        tsc: 'ttsc'
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        // ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      }
    ]
  ]
};
