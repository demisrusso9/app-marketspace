import { ComponentProps, useState } from 'react'
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  Divider,
  Button
} from '@gluestack-ui/themed'
import Eye from 'phosphor-react-native/src/icons/Eye'
import EyeClosed from 'phosphor-react-native/src/icons/EyeClosed'
import Sliders from 'phosphor-react-native/src/icons/Sliders'
import MagnifyingGlass from 'phosphor-react-native/src/icons/MagnifyingGlass'

interface InputFieldProps extends ComponentProps<typeof InputField> {
  inputType?: 'search' | 'password'
  displayCurrencyIcon?: boolean
  errorMessage?: string
}

export function InputText({
  inputType,
  displayCurrencyIcon,
  errorMessage,
  ...rest
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const justifyContent = displayCurrencyIcon ? 'flex-start' : 'space-between'

  function handlePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  function handleSearch() {
    console.log('handleSearch')
  }

  function handleFilter() {
    console.log('handleFilter')
  }

  return (
    <>
      {errorMessage && (
        <Text color='$redLight' mb={5}>
          {errorMessage}
        </Text>
      )}

      <Input
        flexDirection='row'
        justifyContent={justifyContent}
        alignItems='center'
        w={'$full'}
        bg='$gray7'
        rounded={6}
        h={45}
        pl={16}
        mb={16}
        borderColor={errorMessage ? '$redLight' : '$gray7'}
        borderWidth={errorMessage ? 1 : 0}
      >
        {displayCurrencyIcon && (
          <InputSlot pr={15}>
            <Text>R$</Text>
          </InputSlot>
        )}

        <InputField
          placeholderTextColor='$gray4'
          keyboardAppearance='dark'
          type={showPassword ? 'text' : 'password'}
          {...rest}
        />

        {inputType === 'password' && (
          <InputSlot pr={15} onPress={handlePasswordVisibility}>
            <InputIcon as={showPassword ? Eye : EyeClosed} size={20 as any} />
          </InputSlot>
        )}

        {inputType === 'search' && (
          <Button
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            pr={15}
          >
            <InputSlot onPress={handleSearch}>
              <InputIcon as={MagnifyingGlass} size={20 as any} />
            </InputSlot>

            <Divider orientation='vertical' mx={12} h={18} w={1} bg='$gray4' />

            <InputSlot onPress={handleFilter}>
              <InputIcon as={Sliders} size={20 as any} />
            </InputSlot>
          </Button>
        )}
      </Input>
    </>
  )
}
