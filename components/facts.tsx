import { Container, StyledParagraph, StyledTitle } from './shared'
import { facts } from '../utils/company'

type Tech = 'react' | 'nextjs' | 'sqlite'

const Facts = () => {
  return (
    <Container id='facts'>
      <StyledTitle level={1}>Company facts</StyledTitle>
      <StyledParagraph>
        {facts.name}<br></br>
        {facts.address}<br></br>
        {facts.postalCode} {facts.postalAddress}<br></br>
        {facts.orgNumber}<br></br>
        </StyledParagraph>
    </Container>
  )
}

export default Facts
