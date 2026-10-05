import styled from 'styled-components'
import { IconMail } from '@tabler/icons'
import { company } from '../utils/company'

const Container = styled.div`
  min-height: 86svh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  isolation: isolate;
  overflow: hidden;
  padding: 128px max(24px, calc((100vw - 1200px) / 2)) 72px;
  color: var(--paper);
  background: var(--ink);

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    inset: 0;
    background: linear-gradient(90deg, var(--ink) 0%, var(--ink) 34%, #102c50e6 56%, #102c5038 100%);
    pointer-events: none;
  }

  @media (max-width: 767px) {
    min-height: max(620px, 82svh);
    align-items: flex-start;
    padding: 100px 22px 125px;

    &:before {
      background: linear-gradient(180deg, var(--ink) 0%, #102c50ef 42%, #102c5080 75%, #102c501c 100%);
    }
  }
`

const ProfilePic = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  width: 64%;
  height: 100%;
  object-fit: cover;
  object-position: center 42%;
  opacity: 0;
  transform: translate3d(5%, 0, 0) scale(1.04);
  filter: saturate(0.72);

  &.show {
    animation: profile-arrive 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  &.hide {
    opacity: 0;
    transform: translate3d(4%, 0, 0) scale(1.02);
  }

  @keyframes profile-arrive {
    from {
      opacity: 0;
      transform: translate3d(5%, 0, 0) scale(1.04);
    }
    to {
      opacity: 0.88;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (max-width: 767px) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 44%;
    object-position: center 34%;
  }

  @media (prefers-reduced-motion: reduce) {
    &.show {
      animation: none;
      opacity: 0.88;
      transform: none;
    }
  }
`

const CTATextContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(54%, 610px);
  animation: copy-arrive 700ms 120ms ease-out both;

  @keyframes copy-arrive {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

const Eyebrow = styled.p`
  margin: 0 0 20px;
  color: var(--lime);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  `

const CTATitle = styled.h1`
  max-width: 620px;
  margin: 0;
  display: flex;
  flex-direction: column;
  color: var(--paper);
  font-size: 88px;
  line-height: 0.94;

  @media (max-width: 767px) {
    font-size: 58px;
  }
`

const CTASubtitle = styled.p`
  margin: 22px 0 12px;
  color: var(--lime);
  font-size: 26px;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

const CTAParagraph = styled.p`
  max-width: 470px;
  margin: 0;
  color: #eff7fde0;
  font-size: 19px;
  line-height: 1.55;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 13px 18px;
  border: 1px solid var(--lime);
  color: var(--ink);
  background: var(--lime);
  font-size: 16px;
  font-weight: 700;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;

  &:hover {
    color: var(--paper);
    background: transparent;
    transform: translateY(-2px);
  }
`

const CTA = () => {
  return (
    <Container>
      <CTATextContent>
        <Eyebrow>Independent quality and testing</Eyebrow>
        <CTATitle>
          <span>MH Quality</span>
          <span>Test AB</span>
        </CTATitle>
        <CTASubtitle>
          A software test company
        </CTASubtitle>
        <CTAParagraph>
          MH Quality Test AB is a company that focuses on software quality.
        </CTAParagraph>
        <CTAButton href='#contact'>
          <IconMail size={18} stroke={1.8} />
          Contact us
        </CTAButton>
      </CTATextContent>
      <ProfilePic
        src='/assets/rear-view-programmer-working-all-night-long.jpg'
        alt='Programmer working at a computer'
        className='show'
      />
    </Container>
  )
}

export default CTA
