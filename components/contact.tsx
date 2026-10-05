import styled from 'styled-components'
import { IconBrandLinkedin, IconMail } from '@tabler/icons'
import { company } from '../utils/company'

const Section = styled.section`
  padding: 104px 24px 112px;
  scroll-margin-top: 72px;
  color: var(--ink);
  background: var(--paper-deep);

  @media (max-width: 767px) {
    padding: 76px 22px 82px;
  }
`

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
  gap: 72px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const SectionLabel = styled.p`
  margin: 0 0 20px;
  color: var(--coral);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 0 0 24px;
  color: var(--ink);
  font-size: 58px;

  @media (max-width: 767px) {
    font-size: 44px;
  }
`

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  margin-top: 12px;
  padding: 0 18px;
  color: var(--paper);
  background: var(--ink);
  font-size: 17px;
  font-weight: 700;
  transition: background 180ms ease, transform 180ms ease;

  &:hover {
    color: var(--paper);
    background: var(--coral);
    transform: translateY(-2px);
  }
`

const Details = styled.div`
  border-top: 1px solid #102c503b;
`

const Detail = styled.p`
  margin: 0;
  padding: 15px 0;
  border-bottom: 1px solid #102c503b;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.5;
`

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  color: var(--ink);
  font-weight: 700;

  &:hover {
    color: var(--coral);
  }
`

const Contact = () => (
  <Section id='contact'>
    <Inner>
      <div>
        <SectionLabel>03 / Get in touch</SectionLabel>
        <Title>Contact information</Title>
        <EmailLink href={company.refEmail}>
          <IconMail size={20} stroke={1.8} />
          {company.email}
        </EmailLink>
        <div>
          <SocialLink
            href={company.linkedInUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconBrandLinkedin size={19} stroke={1.8} />
            LinkedIn
          </SocialLink>
        </div>
      </div>
      <Details>
        <Detail>{company.name}</Detail>
        <Detail>{company.address}</Detail>
        <Detail>
          {company.postalCode} {company.postalAddress}
        </Detail>
        <Detail>{company.orgNumber}</Detail>
        <Detail>Yes, we do have a VAT number.</Detail>
      </Details>
    </Inner>
  </Section>
)

export default Contact
