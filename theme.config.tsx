import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Cybersecurity'
      }
    }
  },
  logo: <span>Cybersecurity</span>,
  project: {
    link: 'https://github.com/mohitbhansali/cybersecurity',
  },
  chat: {
    link: 'https://discord.gg/6cds2Xyk',
  },
  docsRepositoryBase: 'https://github.com/mohitbhansali/cybersecurity',
  footer: {
    text: 'Everything about Cybersecurity',
  },
}

export default config
