import React from 'react'

import TextCustom, { textTypes } from './TextCustom'
import colors from '../../constants/colors'
import styled, { css } from 'styled-components'

interface Props {
  color?: string
}

const InputStyle = styled.input`
  ${(props: Props): any =>
    css`
      color: ${props.color || colors.black};
      font-size: 16px;
      font-family: 'CaviarDreams';
      line-height: 22px;
      background-color: ${colors.white};
      border: none;
      padding: 11px 10px;
      text-decoration: none;
      cursor: pointer;
      ::placeholder {
        color: ${colors.gray};
      }
      :focus {
        outline: none;
      }
      border-radius: 26px;
    `};
`

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .error-message {
    margin-top: 2px;
    text-align: left;
  }
`

interface InputCustomProps {
  errorMessage?: string
  value: string
  placeholder?: string
  onChange: (e: any) => void
  errorStyle?: string
  inputStyle?: string
  className?: string
  name?: string
  type?: string
}

const InputCustom: React.FunctionComponent<InputCustomProps> = ({
  errorMessage = '',
  value,
  placeholder = 'Enter text',
  onChange,
  errorStyle,
  className,
  inputStyle,
  name,
  type,
}) => {
  return (
    <Styles className={className}>
      <InputStyle name={name} type={type} className={inputStyle} placeholder={placeholder} value={value} onChange={onChange} />
      {!!errorMessage.length && (
        <TextCustom className={`error-message ${errorStyle}`} color={colors.red} type={textTypes.EXTRA_SMALL}>
          {errorMessage}
        </TextCustom>
      )}
    </Styles>
  )
}

export default InputCustom
