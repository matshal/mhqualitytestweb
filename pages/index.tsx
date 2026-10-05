import { NextPage } from 'next'
import styled from 'styled-components'
import CTA from '../components/cta'
import Contact from '../components/contact'
import Facts from '../components/facts'
import About from '../components/about'
import TechInfo from '../components/techinfo'

const Page = styled.main`
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--paper);
`

const Home: NextPage = () => {
  return (
    <Page id='up-top'>
      <CTA />
      <About />
      <Facts />
      <Contact />
      <TechInfo />
    </Page>
  )
}

export default Home
