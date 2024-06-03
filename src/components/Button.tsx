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
import Plus from 'phosphor-react-native/src/icons/Plus'

type GlueButtonProps = ComponentProps<typeof GlueButton>

interface ButtonProps extends Omit<GlueButtonProps, 'variant'> {
  title: string
  variant: 'blue' | 'black' | 'gray'
  icon?: 'trash' | 'power' | 'whatsapp' | 'plus'
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

  const iconMap = {
    trash: TrashSimple,
    power: Power,
    whatsapp: WhatsappLogo,
    plus: Plus
  }

  const IconComponent = icon ? iconMap[icon] : null

  return (
    <ButtonGroup flex={1}>
      <GlueButton
        flex={1}
        alignItems='center'
        justifyContent='center'
        flexDirection='row'
        bg={bgColorMap[variant]}
        h={42}
        rounded={6}
        p={12}
        {...rest}
      >
        {IconComponent && (
          <ButtonIcon
            as={IconComponent}
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
