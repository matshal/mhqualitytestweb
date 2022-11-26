import React, { useState } from 'react'
import { Spacings } from '../styles/spacings'
import { Spacer, StyledParagraph, StyledTitle } from './shared'
import { Container } from './shared'
import { company } from '../utils/company'
import { IconMail } from '@tabler/icons'
import Link from 'next/link'
import styled from 'styled-components'

const Contact = () => {

  return (
    <Container>
      <Spacer size={Spacings.xxl} />
      <StyledTitle id='contact' level={1}>
       Contact information
      </StyledTitle>
      <StyledParagraph>
        {company.name}<br></br>
        {company.address}<br></br>
        {company.postalCode} {company.postalAddress}<br></br>
        {company.orgNumber}<br></br>
        Yes, we do have a VAT number.  
        </StyledParagraph>
      <a href={company.refEmail}>
        <IconMail /> 
        <StyledParagraph>
          {company.email}
        </StyledParagraph>
      </a>
      <img src="https://github.com/matshal/mhqualitytestweb/actions/workflows/main.yml/badge.svg" />
    </Container>
  )
}

export default Contact
