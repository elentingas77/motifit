import React from 'react'

import { Typography } from '@mui/material'


const MotifitTitle: React.FunctionComponent<{ children: any, className?: any }> = ({ children }) => {
  return (
    <Typography
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: 1,
        marginBottom: 1,
      }}
    >
    {children}
  </Typography>
  )
}

export default MotifitTitle;
