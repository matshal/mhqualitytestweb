import styled from 'styled-components'
import { Breakpoints } from '../styles/breakpoints'
import { Container, StyledParagraph, StyledTitle } from './shared'

type Tech = 'react' | 'nextjs' | 'sqlite'

const ContentParagraph = styled(StyledParagraph)`
  font-size: 24px;
  ${Breakpoints.minMedia.tablet} {
    font-size: 32px;
  }
`

const About = () => {
  return (
    <Container id='about'>
      <StyledTitle level={1}>Quality and Test</StyledTitle>
      <StyledParagraph>
        <b>Quality </b>
        is how your product or system meets the expectations of development and lifetime cost, customer value, maintainability, security, etc. 
        All the values that ultimately define success or failure . 

      </StyledParagraph>
      <StyledParagraph>
        <b>Test </b>
        is the activity to gather information about the product and development process to validate how the expectations are met.
      </StyledParagraph>
      <StyledParagraph>

      </StyledParagraph>
    </Container>
  )
}

export default About
