import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ContactForm from '@/components/ContactForm/ContactForm'
import SatisfactionPrompt from '@/components/SatisfactionPrompt/SatisfactionPrompt'

export default function About() {
  return (
    <>
      <main style={{ marginTop: "80px" }}>
        <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
            <Typography variant="h2" component="h1">
              About Us
            </Typography>
            <Typography variant="body1" component="p">
              Midnight Oil is built around simple things done well: fresh ingredients,
              bold flavors, and a warm experience from the first order to the last bite.
              Whether you want to book a table, ask a question, or share feedback, we’d
              love to hear from you.
            </Typography>
            <Typography variant="body1" component="p">
              Use the form below to get in touch with our team and we’ll get back to you
              as soon as possible.
            </Typography>
          </Box>
        </Container>
        <ContactForm />
        <SatisfactionPrompt />
      </main>
    </>
  )
}
