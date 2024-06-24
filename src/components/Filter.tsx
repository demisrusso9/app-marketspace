import { useState, useRef } from 'react'
import {
  Box,
  Text,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Icon,
  VStack,
  Switch,
  CheckboxGroup,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Divider,
  View
} from '@gluestack-ui/themed'
import X from 'phosphor-react-native/src/icons/X'
import Check from 'phosphor-react-native/src/icons/Check'
import { Button } from './Button'
import { Badge } from './Badge'

import {
  AnimatedView,
  AnimatePresence
} from '@gluestack-style/animation-resolver'
import { createComponents, styled } from '@gluestack-style/react'
import { config as gluestackConfig } from '@gluestack-ui/config'

interface FilterProps {
  isModalOpen: boolean
  toggleModal: () => void
}

export function Filter({ isModalOpen, toggleModal }: FilterProps) {
  const allPaymentOptions = [
    'Boleto',
    'Pix',
    'Dinheiro',
    'Cartão de Crédito',
    'Depósito Bancário'
  ]

  const [acceptsExchange, setAcceptsExchange] = useState(false)
  const [condition, setCondition] = useState(true)

  const [checkedPaymentOptions, setCheckedPaymentOptions] =
    useState(allPaymentOptions)

  const ref = useRef(null)

  function handleApplyFilters() {}

  function handleResetFilters() {
    setCondition(true)
    setAcceptsExchange(false)
    setCheckedPaymentOptions(allPaymentOptions)
  }

  const Box = styled(AnimatedView, {
    ':initial': { opacity: 0, y: -1000 },
    ':animate': { opacity: 1, y: 0 },
    ':transition': {
      type: 'timing',
      duration: 300
    },
    ':exit': {
      opacity: 0
    }
  })
  
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Box
          w={'100%'}
          h={'100%'}
          bg='rgba(0, 0, 0, 0.7)'
          alignSelf='center'
          position='absolute'
          top={0}
        >
          <Modal
            isOpen={isModalOpen}
            onClose={toggleModal}
            finalFocusRef={ref}
            avoidKeyboard={true}
            bg='$gray6'
            width={'100%'}
            mt={340}
            position='absolute'
            bottom={0}
            px={24}
            pb={32}
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
          >
            <Divider h={4} w={56} bg='$gray4' alignSelf='center' mt={12} />

            <View>
              <ModalHeader>
                <Box
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                  mt={32}
                >
                  <Heading fontFamily='$heading' fontSize={20} color='$gray1'>
                    Filtrar anúncios
                  </Heading>

                  <ModalCloseButton>
                    <Icon as={X} size={24 as any} color='$gray4' />
                  </ModalCloseButton>
                </Box>
              </ModalHeader>

              <ModalBody>
                <VStack gap={24}>
                  <Box>
                    <Text
                      mb={12}
                      color='$gray2'
                      fontSize={14}
                      fontFamily='$body'
                    >
                      Condição
                    </Text>

                    <Box flexDirection='row' gap={8}>
                      <Badge
                        title='novo'
                        size='md'
                        variant={condition ? 'blue-light' : 'gray'}
                        onPress={() => setCondition(true)}
                        showIcon={condition}
                      />

                      <Badge
                        title='usado'
                        size='md'
                        variant={condition ? 'gray' : 'blue-light'}
                        onPress={() => setCondition(false)}
                        showIcon={!condition}
                      />
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      mb={12}
                      color='$gray2'
                      fontSize={14}
                      fontFamily='$body'
                    >
                      Aceita troca?
                    </Text>

                    <Switch
                      size='lg'
                      trackColor={{
                        true: '$blueLight'
                      }}
                      value={acceptsExchange}
                      onToggle={setAcceptsExchange}
                    />
                  </Box>

                  <Box>
                    <Text
                      mb={12}
                      color='$gray2'
                      fontSize={14}
                      fontFamily='$body'
                    >
                      Meios de pagamento aceitos
                    </Text>

                    <CheckboxGroup
                      value={checkedPaymentOptions}
                      onChange={setCheckedPaymentOptions}
                    >
                      <VStack gap={12}>
                        {allPaymentOptions.map(payment => (
                          <Checkbox
                            key={payment}
                            value={payment}
                            flexDirection='row'
                            alignItems='center'
                            aria-label={payment}
                          >
                            <CheckboxIndicator
                              justifyContent='center'
                              alignItems='center'
                              bgColor={
                                checkedPaymentOptions.includes(payment)
                                  ? '$blueLight'
                                  : '$gray6'
                              }
                              w={18}
                              h={18}
                              mr={12}
                              p={14}
                              borderRadius={2}
                              borderWidth={1}
                              borderColor='$blueLight'
                            >
                              <CheckboxIcon
                                as={Check}
                                size={20 as any}
                                color='$gray6'
                              />
                            </CheckboxIndicator>

                            <CheckboxLabel fontSize={16} fontFamily='$body'>
                              {payment}
                            </CheckboxLabel>
                          </Checkbox>
                        ))}
                      </VStack>
                    </CheckboxGroup>
                  </Box>
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Box flexDirection='row' gap={12} mt={64}>
                  <Button
                    variant='gray'
                    title='Resetar filtros'
                    onPress={handleResetFilters}
                  />

                  <Button
                    variant='black'
                    title='Aplicar filtros'
                    onPress={handleApplyFilters}
                  />
                </Box>
              </ModalFooter>
            </View>
          </Modal>
        </Box>
      )}
    </AnimatePresence>
  )
}
