import type { Preview } from "@storybook/react"

import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'Light',
          class: [],
          color: '#ffffff',
          default: true
        },
        {
          name: 'Dark',
          class: ['dark'],
          color: '#000000'
        }
      ]
    }
  },
}

export default preview
