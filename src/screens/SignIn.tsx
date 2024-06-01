import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  ScrollView,
  KeyboardAvoidingView
} from '@gluestack-ui/themed'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { InputText } from '@/components/Input'
import { Button } from '@/components/Button'
import logoImg from '@/assets/logo.png'

interface SignInFormProps {
  email: string
  password: string
}

export function SignIn() {
  const schema = z.object({
    email: z
      .string({ message: 'Informe o e-mail.' })
      .email({ message: 'E-mail inválido.' }),
    password: z.string({ message: 'Informe a senha.' })
  })

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<SignInFormProps>({
    resolver: zodResolver(schema)
  })

  function handleSignIn() {
    console.log(JSON.stringify(errors, null, 2))
  }

  return (
    <KeyboardAvoidingView>
      <ScrollView w={'100%'}>
        <Box alignItems='center' bg='$gray6' borderRadius={24} px={48}>
          <VStack mt={100} alignItems='center'>
            <Image source={logoImg} alt='logo' />

            <Heading color='$gray1' fontSize={34} mb={4}>
              marketspace
            </Heading>

            <Text color='$gray3' fontSize='$sm'>
              Seu espaço de compra e venda
            </Text>
          </VStack>

          <VStack mt={75} w={'100%'}>
            <Text
              color='$gray2'
              fontSize='$sm'
              fontFamily='$body'
              textAlign='center'
              mb={16}
            >
              Acesse sua conta
            </Text>

            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder='E-mail'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                  type='text'
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder='Senha'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                  inputType='password'
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button
              variant='blue'
              mt={32}
              mb={68}
              title='Entrar'
              onPress={handleSubmit(handleSignIn)}
            />
          </VStack>
        </Box>

        <Box mt={56} w={'100%'} alignItems='center' px={48}>
          <Text mb={16} color='$gray2' fontSize='$sm'>
            Ainda não tem acesso?
          </Text>

          <Button variant='gray' title='Criar uma conta' mb={50} />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
