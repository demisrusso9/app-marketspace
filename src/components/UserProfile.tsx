import { Box, HStack, Heading, Image, Text } from '@gluestack-ui/themed'

import avatarImg from '@/assets/avatar.png'

interface UserProfileProps {
  size: 'sm' | 'lg'
  showName?: boolean
}

export function UserProfile({ size, showName = true }: UserProfileProps) {
  return (
    <HStack flexDirection='row' alignItems='center' justifyContent='center'>
      <Image
        h={size === 'lg' ? 45 : 24}
        w={size === 'lg' ? 45 : 24}
        source={avatarImg}
        alt='profile'
        mr={10}
      />

      <Box
        flexDirection='column'
        alignSelf='center'
        justifyContent='center'
        h={42}
      >
        {size === 'lg' && (
          <Text fontSize={'$md'} fontFamily='$body' mt={0}>
            Boas vindas,
          </Text>
        )}

        {showName && (
          <Heading
            fontSize={'$md'}
            fontFamily={size === 'lg' ? '$heading' : '$body'}
            marginVertical={0}
          >
            Maria!
          </Heading>
        )}
      </Box>
    </HStack>
  )
}
