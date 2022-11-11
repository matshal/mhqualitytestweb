import { Container, StyledTitle } from './shared'
import { facts } from '../utils/company'

type Tech = 'react' | 'nextjs' | 'sqlite'

const Facts = () => {
  return (
    <Container id='facts'>
      <StyledTitle level={1}>Company facts</StyledTitle>
        <h1>{facts.name}</h1>
        <h1>{facts.address}</h1>
        <h1>{facts.postalCode} {facts.postalAddress}</h1>
        <h1>{facts.orgNumber}</h1> 
    </Container>
  )
}

export default Facts
