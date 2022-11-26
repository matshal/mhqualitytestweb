import { Container, StyledParagraph, StyledTitle } from './shared'
import { company } from '../utils/company'
import { List, ListContext } from 'rc-field-form'
import ListBody from 'antd/lib/transfer/ListBody'

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
      <StyledParagraph>
        {company.name}<br></br>
        {company.address}<br></br>
        {company.postalCode} {company.postalAddress}<br></br>
        {company.orgNumber}<br></br>
        Yes, we do have a VAT number.  
        </StyledParagraph>
    </Container>
  )
}

export default Facts
