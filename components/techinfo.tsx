import styled from 'styled-components'

const Footer = styled.footer`
  padding: 24px;
  color: var(--paper);
  background: var(--ink);
`

const Inner = styled.div`
  width: min(1120px, 100%);
  min-height: 34px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Badge = styled.img`
  width: 190px;
  height: auto;
`

const TechInfo = () => (
  <Footer>
    <Inner>
      <a href='https://github.com/matshal/mhqualitytestweb/actions/workflows/main.yml'>
        <Badge
          src='https://github.com/matshal/mhqualitytestweb/actions/workflows/main.yml/badge.svg'
          alt='GitHub Actions workflow status'
        />
      </a>
    </Inner>
  </Footer>
)

export default TechInfo
