import { ComponentProps } from 'react'
import {
  Button as GlueButton,
  ButtonGroup,
  ButtonText,
  ButtonIcon
} from '@gluestack-ui/themed'
import TrashSimple from 'phosphor-react-native/src/icons/TrashSimple'
import Power from 'phosphor-react-native/src/icons/Power'
import WhatsappLogo from 'phosphor-react-native/src/icons/WhatsappLogo'

type GlueButtonProps = ComponentProps<typeof GlueButton>

interface ButtonProps extends Omit<GlueButtonProps, 'variant'> {
  title: string
  variant: 'blue' | 'black' | 'gray'
  icon?: 'trash' | 'power' | 'whatsapp'
}

export function Button({ title, variant, icon, ...rest }: ButtonProps) {
  const bgColorMap = {
    blue: '$blueLight',
    black: '$gray1',
    gray: '$gray5'
  }

  const colorMap = {
    blue: '$gray7',
    black: '$gray7',
    gray: '$gray2'
  }

  const iconColorMap = {
    blue: '$gray6',
    black: '$gray6',
    gray: '$gray3'
  }

  return (
    <ButtonGroup>
      <GlueButton
        alignItems='center'
        justifyContent='center'
        flexDirection='row'
        w={'100%'}
        bg={bgColorMap[variant]}
        h={42}
        rounded={6}
        {...rest}
      >
        {icon === 'trash' && (
          <ButtonIcon
            as={TrashSimple}
            size={16 as any}
            mr={8}
            color={iconColorMap[variant]}
          />
        )}

        {icon === 'power' && (
          <ButtonIcon
            as={Power}
            size={16 as any}
            mr={8}
            color={iconColorMap[variant]}
          />
        )}

        {icon === 'whatsapp' && (
          <ButtonIcon
            as={WhatsappLogo}
            size={16 as any}
            mr={8}
            color={iconColorMap[variant]}
          />
        )}

        <ButtonText color={colorMap[variant]} fontWeight={'$bold'}>
          {title}
        </ButtonText>
      </GlueButton>
    </ButtonGroup>
  )
}
