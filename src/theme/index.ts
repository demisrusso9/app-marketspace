import { createConfig } from '@gluestack-style/react'
import { config as gluestackConfig } from "@gluestack-ui/config"

export const config = createConfig({
  aliases: {
    ...gluestackConfig.aliases
  },
  tokens: {
    colors: {
      blue: '#364D9D',
      blueLight: '#647AC7',
      redLight: '#EE7979',
      gray1: '#1A181B',
      gray2: '#3E3A40',
      gray3: '#5F5B62',
      gray4: '#9F9BA1',
      gray5: '#D9DBDA',
      gray6: '#EDECEE',
      gray7: '#F7F7F8',
      ...gluestackConfig.tokens.colors
    },
    fonts: {
      heading: 'Karla_700Bold',
      body: 'Karla_400Regular'
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24
    },
    opacity: {
      ...gluestackConfig.tokens.opacity
    }
  }
} as const)

type ConfigType = typeof config

declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType {}
}