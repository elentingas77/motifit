import React from 'react'

import colors from '../../constants/colors'
import styled, { css } from 'styled-components'

interface Props {
  textType: string
  color?: string
}

export const textTypes = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  EXTRA_SMALL: 'extraSmall',
}

const TextCustomStyle = styled.span`
  font-family: 'CaviarDreams';
  ${(props: Props): any =>
    props.textType === textTypes.LARGE &&
    css`
      font-family: 'CaviarDreams';
      color: ${props.color || colors.white};
      font-size: 22px;
      line-height: 28px;
    `};
  ${(props: Props): any =>
    props.textType === textTypes.MEDIUM &&
    css`
      color: ${props.color || colors.white};
      font-size: 16px;
      line-height: 22px;
    `};
  ${(props: Props): any =>
    props.textType === textTypes.SMALL &&
    css`
      color: ${props.color || colors.gray};
      font-family: 'CaviarDreams';
      font-size: 14px;
      line-height: 20px;
    `};
  ${(props: Props): any =>
    props.textType === textTypes.EXTRA_SMALL &&
    css`
      color: ${props.color || colors.white};
      font-size: 10px;
      line-height: 14px;
    `};
`

interface TextCustomProps {
  type: string
  color?: string
  className?: string
  children?: any
}

const TextCustom: React.FunctionComponent<TextCustomProps> = ({ type, color, children, className }) => {
  return (
    <TextCustomStyle className={className} textType={type} color={color}>
      {children}
    </TextCustomStyle>
  )
}

export default TextCustom
