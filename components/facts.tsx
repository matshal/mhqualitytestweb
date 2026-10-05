import styled from 'styled-components'

const Section = styled.section`
  padding: 108px 24px 116px;
  scroll-margin-top: 72px;
  color: var(--paper);
  background: var(--forest);

  @media (max-width: 767px) {
    padding: 76px 22px 84px;
  }
`

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
  gap: 80px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`

const SectionLabel = styled.p`
  margin: 0 0 20px;
  color: var(--lime);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 0 0 24px;
  color: var(--paper);
  font-size: 58px;

  @media (max-width: 767px) {
    font-size: 44px;
  }
`

const Intro = styled.p`
  max-width: 420px;
  margin: 0;
  color: #f1f6f7df;
  font-size: 18px;
  line-height: 1.65;
`

const ServiceList = styled.div`
  border-top: 1px solid #f1f6f74d;
`

const Service = styled.article`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 16px;
  padding: 22px 0;
  border-bottom: 1px solid #f1f6f74d;

  h3 {
    margin: 0 0 8px;
    color: var(--paper);
    font-size: 26px;
  }

  p {
    margin: 0;
    color: #f1f6f7c7;
    font-size: 16px;
    line-height: 1.55;
  }
`

const ServiceIndex = styled.span`
  padding-top: 6px;
  color: var(--lime);
  font-size: 14px;
  font-weight: 700;
`

const Facts = () => (
  <Section id='facts'>
    <Inner>
      <div>
        <SectionLabel>02 / Company</SectionLabel>
        <Title>Company facts</Title>
        <Intro>
          MH Quality Test was founded in 2021 by Mats Hallingström, who has more
          than 20 years of experience in product development, testing, and test
          coaching. Services include:
        </Intro>
      </div>
      <ServiceList>
        <Service>
          <ServiceIndex>01</ServiceIndex>
          <div>
            <h3>Hands-on testing</h3>
            <p>System verification</p>
          </div>
        </Service>
        <Service>
          <ServiceIndex>02</ServiceIndex>
          <div>
            <h3>Automated test development</h3>
            <p>Python, C# dotnet, NodeJS, etc</p>
            <p>Bitbucket, Azure DevOps, GitHub, etc</p>
            <p>HIL frameworks, I/O systems</p>
          </div>
        </Service>
        <Service>
          <ServiceIndex>03</ServiceIndex>
          <div>
            <h3>Test planning</h3>
            <p>Team coaching</p>
          </div>
        </Service>
      </ServiceList>
    </Inner>
  </Section>
)

export default Facts
