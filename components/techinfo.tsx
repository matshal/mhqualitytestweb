import React, { useState } from 'react'
import { Spacings } from '../styles/spacings'
import { Spacer, StyledParagraph, StyledTitle } from './shared'
import { Container } from './shared'
import { company } from '../utils/company'
import { IconMail } from '@tabler/icons'
import styled from 'styled-components'

const Badge = styled.img`
  margin-left: ${Spacings.sm};
  width: 400px;
`

const TechInfo = () => {

  return (
    <Container>
      <Badge src="https://github.com/matshal/mhqualitytestweb/actions/workflows/main.yml/badge.svg" />
    </Container>
  )
}

export default TechInfo
