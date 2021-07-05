import React from 'react';

import {
  TouchableOpacity,
  Text, 
  StyleSheet,
  TouchableOpacityProps
} from 'react-native'

import { ButtonOpacity, TextButton } from './styles'

// Interface
interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest } : ButtonProps) {
  return (
    <ButtonOpacity
      {...rest}
      >
        <TextButton>{title}</TextButton>
    </ButtonOpacity>
  )
}