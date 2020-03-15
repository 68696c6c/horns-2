import styled from '@emotion/styled'

import {
  chromatic,
  contained,
  margined,
  padded,
  responsive,
} from '../../../traits'

const baseStyles = [
  chromatic.styles,
  contained.styles,
  margined.styles,
  padded.styles,
  responsive.styles,
]

export const Div = styled.div(...baseStyles)
export const Section = styled.section(...baseStyles)
export const Header = styled.header(...baseStyles)
export const Footer = styled.footer(...baseStyles)
