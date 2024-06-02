import { ActivityIndicator } from 'react-native'
import { GluestackUIProvider, Box, StatusBar } from '@gluestack-ui/themed'
import { config } from '@/theme'
import { SignIn } from '@/screens/SignIn'
import { SignUp } from '@/screens/SignUp'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold
} from '@expo-google-fonts/karla'
import { Routes } from '@/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? (
        <Routes />
      ) : (
        // <SignIn />
        <Box
          flex={1}
          bg='$gray1'
          justifyContent='center'
          alignItems='center'
          px={12}
        >
          <ActivityIndicator size='large' color='white' />
        </Box>
      )}
    </GluestackUIProvider>
  )
}
