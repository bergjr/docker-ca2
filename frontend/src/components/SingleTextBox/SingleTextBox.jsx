import { Box, Paper } from '@mui/material'
import React from 'react'
import styles from './SingleTextBox.module.scss'
export default function SingleTextBox({title, text, linkText}) {
  return (
 
      <Box className={styles.singleBox} display={"flex"}  flexDirection={"column"} gap={4} textAlign={"left"} padding={4}>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="#">{linkText}</a>
      </Box>
    
  )
}
