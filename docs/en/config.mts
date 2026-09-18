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
      { text: 'Home', link: '/en/' },
      { text: 'Guides', link: '/en/behandlingsmuligheder' }
    ],

    sidebar: [
            {
        text: 'Info',
        items: [
          { text: 'Manifesto', link: '/en/manifest' },
          { text: 'About the guide', link: '/en/omguiden' },
        ]
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Treatment Options', link: '/en/behandlingsmuligheder' },
          { text: 'DIY Guide', link: '/en/diyguide' },
          { text: 'Homebrewing', link: '/en/homebrewing' },
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
