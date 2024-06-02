import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useStyled } from '@gluestack-style/react'

import { Home } from '@/screens/Home'
import { Advertisements } from '@/screens/Advertisements'

import House from 'phosphor-react-native/src/icons/House'
import Tag from 'phosphor-react-native/src/icons/Tag'
import SignOut from 'phosphor-react-native/src/icons/SignOut'

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator()

  const styled = useStyled()

  const iconSize = styled.config.tokens.fontSizes.xl
  const colors = styled.config.tokens.colors

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.redLight,
        tabBarInactiveTintColor: colors.blueLight,
        tabBarStyle: {
          height: 72,
          paddingBottom: 12,
          backgroundColor: colors.gray7
        }
      }}
    >
      <Screen
        name='/home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              weight={focused ? 'bold' : 'thin'}
              color={colors.gray2}
              size={iconSize}
            />
          )
        }}
      />

      <Screen
        name='/advertisements'
        component={Advertisements}
        options={{
          tabBarIcon: ({ focused }) => (
            <Tag
              weight={focused ? 'bold' : 'thin'}
              color={colors.gray4}
              size={iconSize}
            />
          )
        }}
      />

      <Screen
        name='/sign-out'
        listeners={{
          tabPress: e => {
            e.preventDefault()
          }
        }}
        component={View}
        options={{
          tabBarIcon: () => <SignOut color={colors.redLight} size={iconSize} />
        }}
      />
    </Navigator>
  )
}
