import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "goodservice",
  description: "good call api service ts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

    ],

    sidebar: [
      {
        text: 'GoodService',
        items: [
          { text: 'Home', link: '/' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gusscode/goodservice' }
    ]
  },
  appearance: false,
  outDir: 'docs',

  base: '/goodservice/',
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8LSVNLGR7N' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-8LSVNLGR7N');`
    ]
  ]

})
