import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  HStack
} from '@gluestack-ui/themed'

import productImg from '@/assets/Image.png'
import { UserProfile } from './UserProfile'
import { Badge } from './Badge'

export function Card() {
  return (
    <VStack>
      <Box w={'$full'} flex={1}>
        <Image
          source={productImg}
          alt='product'
          h={100}
          borderRadius={6}
          flex={1}
        />

        <HStack
          p={4}
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          position='absolute'
          top={-10}
          left={0}
          right={0}
        >
          <UserProfile size='sm' showName={false} />
          <Badge title='novo' size='sm' variant='blue' />
        </HStack>
      </Box>

      <Box>
        <Text mt={4} fontFamily='$body' fontSize={'$sm'} color='$gray2'>
          Tênis vermelho
        </Text>

        <Heading mt={4} fontFamily='$heading' fontSize={'$md'} color='$gray1'>
          R$ 59,90
        </Heading>
      </Box>
    </VStack>
  )
}
