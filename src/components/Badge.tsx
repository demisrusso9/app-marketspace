import { TouchableOpacityProps } from 'react-native'
import { Button, Text } from '@gluestack-ui/themed'
import XCircle from 'phosphor-react-native/src/icons/XCircle'

interface BadgeProps extends TouchableOpacityProps {
  title: 'novo' | 'usado'
  variant: 'blue-light' | 'blue' | 'gray-dark' | 'gray'
  size: 'sm' | 'md'
  showIcon?: boolean
}

export function Badge({ title, variant, size, showIcon, ...rest }: BadgeProps) {
  const bgColorMap = {
    blue: '$blue',
    'blue-light': '$blueLight',
    'gray-dark': '$gray2',
    gray: '$gray5'
  }

  return (
    <Button
      w={size === 'sm' ? 50 : 72}
      h={size === 'sm' ? 17 : 28}
      bg={bgColorMap[variant]}
      py={2}
      px={8}
      borderRadius={100}
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      {...rest}
    >
      <Text
        fontFamily='$heading'
        fontSize={size === 'sm' ? 10 : 12}
        color={variant !== 'gray' ? '$white' : '$gray3'}
        textTransform='uppercase'
        textAlign='center'
      >
        {title}
      </Text>

      {showIcon && (
        <XCircle
          style={{ marginLeft: 7 }}
          size={16 as any}
          weight='fill'
          color='#EDECEE'
        />
      )}
    </Button>
  )
}
