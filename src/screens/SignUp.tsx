import {
  Box,
  Text,
  Image,
  VStack,
  Heading,
  Button as GlueButton,
  Icon,
  ScrollView,
  KeyboardAvoidingView
} from '@gluestack-ui/themed'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { InputText } from '@/components/InputText'
import { Button } from '@/components/Button'
import PencilSimpleLine from 'phosphor-react-native/src/icons/PencilSimpleLine'

import logoImg from '@/assets/logo.png'
import avatarImg from '@/assets/avatar.png'

interface SignUpFormProps {
  name: string
  email: string
  phone: string
  password: string
  confirm_password: string
}

export function SignUp() {
  const schema = z
    .object({
      name: z.string({ message: 'Informe o nome.' }),
      email: z.string({ message: 'Informe o email' }).email({
        message: 'E-mail inválido.'
      }),
      phone: z.string({ message: 'Informe o telefone.' }),
      password: z
        .string({ message: 'Informe a senha.' })
        .min(6, 'Senha muito curta.'),
      confirm_password: z.string({ message: 'Confirme a senha.' })
    })
    .refine(data => data.password === data.confirm_password, {
      message: 'As senhas são diferentes.',
      path: ['confirm_password']
    })

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<SignUpFormProps>({
    resolver: zodResolver(schema)
  })

  function handleChangeAvatar() {}

  function handleSignUp() {}

  return (
    <KeyboardAvoidingView behavior='padding'>
      <ScrollView w={'100%'}>
        <Box alignItems='center' bg='$gray6' borderRadius={24} px={48}>
          <VStack mt={100} alignItems='center'>
            <Image source={logoImg} alt='logo' w={60} h={40} />

            <Heading color='$gray1' fontSize={20} mb={4}>
              Boas vindas!
            </Heading>

            <Text color='$gray2' fontSize='$sm' textAlign='center'>
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </VStack>

          <VStack mt={32} w={'100%'}>
            <Box justifyContent='center' alignItems='center' mb={16}>
              <Image
                h={88}
                w={88}
                source={avatarImg}
                alt='profile'
                position='relative'
              />

              <GlueButton
                w={40}
                h={40}
                rounded={100}
                bg='$blueLight'
                justifyContent='center'
                alignItems='center'
                position='absolute'
                top={50}
                right={90}
                onPress={handleChangeAvatar}
              >
                <Icon as={PencilSimpleLine} size={16 as any} color='$gray6' />
              </GlueButton>
            </Box>

            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder='Nome'
                  autoCapitalize='words'
                  onChangeText={onChange}
                  value={value}
                  type='text'
                  errorMessage={errors.name?.message}
                />
              )}
            />

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
              name='phone'
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder='Telefone'
                  keyboardType='phone-pad'
                  onChangeText={onChange}
                  value={value}
                  type='text'
                  errorMessage={errors.phone?.message}
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

            <Controller
              control={control}
              name='confirm_password'
              render={({ field: { onChange, value } }) => (
                <InputText
                  placeholder='Confirmar senha'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                  inputType='password'
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              variant='black'
              mt={32}
              mb={68}
              title='Criar'
              onPress={handleSubmit(handleSignUp)}
            />
          </VStack>
        </Box>

        <Box mt={56} w={'100%'} alignItems='center' px={48}>
          <Text mb={16} color='$gray2' fontSize='$sm'>
            Já tem uma conta?
          </Text>

          <Button variant='gray' title='Ir para o login' mb={50} />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
