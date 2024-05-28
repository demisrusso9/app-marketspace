import { ActivityIndicator } from 'react-native'
import { GluestackUIProvider, Box } from '@gluestack-ui/themed'
import { config } from '@/theme'
import { SignIn } from '@/screens/SignIn'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold
} from '@expo-google-fonts/karla'

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? (
        <SignIn />
      ) : (
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
