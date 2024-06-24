import {
  VStack,
  Text,
  SafeAreaView,
  ScrollView,
  HStack,
  Box,
  Button as ButtonGluestack,
  Icon
} from '@gluestack-ui/themed'
import { Button } from '@/components/Button'
import { UserProfile } from '@/components/UserProfile'

import Tag from 'phosphor-react-native/src/icons/Tag'
import ArrowRight from 'phosphor-react-native/src/icons/ArrowRight'
import { InputText } from '@/components/InputText'
import { Card } from '@/components/Card'
import { Filter } from '@/components/Filter'
import { useState } from 'react'

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <VStack px={24} py={24}>
          <HStack flexDirection='row' justifyContent='space-between' gap={32}>
            <UserProfile size='lg' />

            <Button icon='plus' variant='black' title='Criar anúncio' />
          </HStack>

          <VStack mt={32}>
            <Text fontFamily='$body' color='$gray3' mb={12}>
              Seus produtos anunciados para venda
            </Text>

            <Box
              h={66}
              bg='rgba(54, 77, 157, 0.1)'
              borderRadius={6}
              justifyContent='space-between'
              alignItems='center'
              flexDirection='row'
              px={16}
              py={12}
            >
              <Box flexDirection='row' alignItems='center'>
                <Icon as={Tag} size={22 as any} color='$blue' mr={16} />

                <VStack>
                  <Text color='$gray2' fontSize={20} fontFamily='$heading'>
                    4
                  </Text>

                  <Text color='$gray2' fontSize={12} fontFamily='$body'>
                    anúncios ativos
                  </Text>
                </VStack>
              </Box>

              <ButtonGluestack flexDirection='row'>
                <Text color='$blue' fontSize={12} fontFamily='$heading' mr={10}>
                  Meus anúncios
                </Text>

                <Icon as={ArrowRight} size={16 as any} color='$blue' />
              </ButtonGluestack>
            </Box>
          </VStack>

          <VStack mt={32}>
            <Text fontFamily='$body' color='$gray3' mb={12}>
              Compre produtos variados
            </Text>

            <InputText
              inputType='search'
              placeholder='Buscar anúncio'
              toggleModal={toggleModal}
            />

            <Box
              mt={24}
              rowGap={24}
              columnGap={20}
              flexWrap='wrap'
              flexDirection='row'
            >
              <Card />
              <Card />
              <Card />
              <Card />
            </Box>
          </VStack>
        </VStack>

        <Filter isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </ScrollView>
    </SafeAreaView>
  )
}
