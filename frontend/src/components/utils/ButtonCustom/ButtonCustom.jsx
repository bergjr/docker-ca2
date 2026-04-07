import { Button } from '@mui/material'
import React from 'react'

export default function ButtonCustom({backgroundColor, textColor, children, ...props}) {
  return (
    <Button sx={{backgroundColor: backgroundColor ? backgroundColor : '', color: textColor, "&:hover": {backgroundColor: "primary.main"}}} {...props}>
      {children}
    </Button>
  );
}