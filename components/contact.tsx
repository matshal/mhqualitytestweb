import React, { useState } from 'react'
import { Spacings } from '../styles/spacings'
import { Spacer, StyledTitle } from './shared'
import { Container } from './shared'
import { company } from '../utils/company'
import { IconMail } from '@tabler/icons'

const Contact = () => {

  return (
    <Container>
      <Spacer size={Spacings.xxl} />
      <StyledTitle id='contact' level={1}>
       Contact information
      </StyledTitle>
      <a href={company.email}>
        <IconMail></IconMail>
        <h1>{company.email}</h1>
      </a>
    </Container>
  )
}

export default Contact
