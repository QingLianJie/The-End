'use client'

import { getInitColorSchemeScript } from '@mui/joy'
import * as React from 'react'

export default function ColorMode() {
  return (
    <React.Fragment>
      {getInitColorSchemeScript({ defaultMode: 'system' })}
    </React.Fragment>
  )
}
