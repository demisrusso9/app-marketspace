import { Box, Icon, Text } from '@gluestack-ui/themed'
import XCircle from 'phosphor-react-native/src/icons/XCircle'

interface BadgeProps {
  title: 'novo' | 'usado'
  variant: 'blue-light' | 'blue' | 'gray'
  size: 'sm' | 'md'
  showIcon?: boolean
}

export function Badge({ title, variant, size, showIcon }: BadgeProps) {
  const bgColorMap = {
    blue: '$blue',
    'blue-light': '$blueLight',
    gray: '$gray2'
  }

  return (
    <Box
      w={size === 'sm' ? 50 : 72}
      h={size === 'sm' ? 17 : 28}
      bg={bgColorMap[variant]}
      py={2}
      px={8}
      borderRadius={100}
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
    >
      <Text
        fontFamily='$heading'
        fontSize={size === 'sm' ? 10 : 12}
        color='$white'
        textTransform='uppercase'
        textAlign='center'
      >
        {title}
      </Text>

      {showIcon && (
        <Icon as={XCircle} ml={7.5} size={13 as any} color='$gray7' />
      )}
    </Box>
  )
}
