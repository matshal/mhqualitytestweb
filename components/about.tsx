import styled from 'styled-components'

const Section = styled.section`
  padding: 72px 24px 124px;
  scroll-margin-top: 72px;
  background: var(--paper);
  color: var(--ink);

  @media (max-width: 767px) {
    padding: 48px 22px 84px;
  }
`

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`

const SectionLabel = styled.p`
  margin: 0 0 20px;
  color: var(--coral);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 0;
  color: var(--ink);
  font-size: 58px;

  @media (max-width: 767px) {
    font-size: 44px;
  }
`

const DefinitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 64px;
  margin-top: 60px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 34px;
    margin-top: 42px;
  }
`

const Definition = styled.article`
  display: grid;
  grid-template-columns: 44px 1fr;
  column-gap: 18px;
  align-content: start;
  padding-top: 20px;
  border-top: 1px solid var(--line);

  h3 {
    margin: 0 0 12px;
    color: var(--ink);
    font-size: 30px;
  }

  p {
    grid-column: 2;
    margin: 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.6;
  }
`

const DefinitionIndex = styled.span`
  padding-top: 5px;
  color: var(--coral);
  font-size: 14px;
  font-weight: 700;
`

const About = () => (
  <Section id='about'>
    <Inner>
      <SectionLabel>01 / Approach</SectionLabel>
      <Title>Quality and Test</Title>
      <DefinitionGrid>
        <Definition>
          <DefinitionIndex>01</DefinitionIndex>
          <h3>Quality</h3>
          <p>
            How your product or system meets expectations around development
            and lifetime cost, customer value, maintainability, security, and
            the factors that ultimately define success or failure.
          </p>
        </Definition>
        <Definition>
          <DefinitionIndex>02</DefinitionIndex>
          <h3>Test</h3>
          <p>
            The activity of gathering information about the product and
            development process to validate how expectations are met.
          </p>
        </Definition>
      </DefinitionGrid>
    </Inner>
  </Section>
)

export default About
