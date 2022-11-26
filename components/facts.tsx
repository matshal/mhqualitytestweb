import { Container, StyledParagraph, StyledTitle } from './shared'
import { company } from '../utils/company'

type Tech = 'react' | 'nextjs' | 'sqlite'

const Facts = () => {
  return (
    <Container id='facts'>
      <StyledTitle level={1}>Company facts</StyledTitle>
      <StyledParagraph>
        MH Quality Test was founded 2021 by Mats Hallingström, who has more than 20 year of experience of 
        product development, testing and test coaching. We offer services within: 
      <ul>
        <li>
          Hands on testing and system verification
        </li>
        <li>
          Automated test development
        </li>
        <li>
          Test planning and team coaching 
        </li>
      </ul>
      </StyledParagraph>
    </Container>
  )
}

export default Facts
