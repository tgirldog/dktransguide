import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DK Trans Guide",
  description: "En guide til at være trans i Danmark.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/manifest' }
    ],

    sidebar: [
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Manifest', link: '/manifest' },
          { text: 'Behandlings Muligheder', link: '/behandlingsmuligheder' },
          { text: 'DIY Guide', link: '/diyguide' },
          { text: 'Homebrewing', link: '/homebrewing' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
