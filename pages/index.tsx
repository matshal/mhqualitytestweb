import { NextPage } from 'next'
import styled from 'styled-components'
import CTA from '../components/cta'
import { Spacer } from '../components/shared'
import { Colors } from '../styles/colors'
import { Spacings } from '../styles/spacings'
import Contact from '../components/contact'
import Facts from '../components/facts'
import About from '../components/about'
import TechInfo from '../components/techinfo'

const Container = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  background-color: ${Colors.background};
  padding: 0;
`

const Home: NextPage = () => {
  return (
    <Container id='up-top'>
      <CTA />
      <Spacer size={Spacings.xxl} />
      <About />
      <Facts />
      <Contact />
      <TechInfo />
    </Container>
  )
}

export default Home
