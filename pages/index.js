
import React from 'react'
import Box from './box/boxMain'
import { ThemeProvider } from '@chakra-ui/core'

export default function () {
  return (
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  )
}
