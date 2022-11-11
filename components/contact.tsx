import React, { useState } from 'react'
import { Spacings } from '../styles/spacings'
import { Spacer, StyledTitle } from './shared'
import { Container } from './shared'
import { facts } from '../utils/company'

const Contact = () => {

  return (
    <Container>
      <Spacer size={Spacings.xxl} />
      <StyledTitle id='contact' level={1}>
       Contact information
      </StyledTitle>
      <h1>{facts.email}</h1>
    </Container>
  )
}

export default Contact
