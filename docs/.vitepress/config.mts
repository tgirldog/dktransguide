import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        text: 'Start',
        items: [
          { text: 'Manifest', link: '/manifest' },
        ]
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Behandlings Muligheder', link: '/behandlingsmuligheder' },
          { text: 'DIY Guide', link: '/diyguide' },
          { text: 'Homebrewing', link: '/homebrewing' },
        ]
      },

    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tgirldog/dktransguide' }
    ]
  }
})
