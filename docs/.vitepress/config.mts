import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
      root: {
        label: 'Danish',
        lang: 'dk'
      },
      en: {
        label: 'English',
        lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
        link: '/en/' // default /fr/ -- shows on navbar translations menu, can be external
      }
    },
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  head: [['link', { rel: 'icon', href: '/favicon-32x32.png' }]],
  title: "DK Trans Guide",
  cleanUrls: true,
  description: "En guide til at være trans i Danmark.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/behandlingsmuligheder' }
    ],

    sidebar: [
            {
        text: '',
        items: [
          { text: 'Manifest', link: '/manifest' },
          { text: 'Om guiden', link: '/omguiden' },
        ]
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Behandlings Muligheder', link: '/behandlingsmuligheder' },
          { text: 'Former af HRT', link: '/formerafhrt' },
          { text: 'DIY Kilder', link: '/diykilder' },
          { text: 'Homebrewing', link: '/homebrewing' },
          { text: 'Blodprøver', link: '/blodprøver' },
          { text: 'Resoucer', link: '/resourcer' },
        ]
      },

    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tgirldog/dktransguide' }
    ],

    
    
    
  }
})
