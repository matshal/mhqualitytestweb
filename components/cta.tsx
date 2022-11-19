import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { StyledParagraph, StyledTitle, Spacer } from '../components/shared'
import { Breakpoints } from '../styles/breakpoints'
import { Colors } from '../styles/colors'
import { Spacings } from '../styles/spacings'

export const introTime = 1

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: ${Breakpoints.size.largeDesktop};
  position: relative;

  @keyframes loading-container {
    from {
      transform: translateX(-20px);
    }
    to {
      transform: translateX(0);
    }
  }
`

const ProfilePic = styled.img`
  #position: fixed;
  bottom: 0;
  right: 0;
  transition: all 1.5s;
  width: auto;
  height: auto;

  &.show {
    opacity: 50%;
  }

  &.hide {
    transform: rotateZ(180deg) translateX(100vh);
    opacity: 0;
  }

  @keyframes profile {
    99% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const CTATextContent = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  padding: ${Spacings.lg};
  border-radius: 5px;
  opacity: 0;
  transform: translateX(-20px);
  z-index: 1;

  ${Breakpoints.minMedia.tablet} {
    top: 30vh;
  }

  animation: loading-cta 0.5s ${introTime + 0.5}s linear forwards;

  @keyframes loading-cta {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const CTATitle = styled(StyledTitle)`
  font-size: 48px !important;
  margin-bottom: ${Spacings.sm} !important;

  ${Breakpoints.minMedia.tablet} {
    font-size: 88px !important;
  }
`

const CTASubtitle = styled(StyledTitle)`
  margin-bottom: ${Spacings.sm} !important;

  ${Breakpoints.minMedia.tablet} {
    font-size: 48px !important;
  }
`

const CTAButton = styled.button`
  border: ${Colors.primary} 5px solid;
  color: ${Colors.primary};
  background-color: ${Colors.secondary};
  padding: ${Spacings.sm} ${Spacings.md};
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all;

  ${Breakpoints.minMedia.tablet} {
    font-size: 24px;
  }

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
  }
`

const CTAParagraph = styled(StyledParagraph)`
  font-size: 24px;
  ${Breakpoints.minMedia.tablet} {
    font-size: 32px;
  }
`

const Hand = styled.img`
  margin-left: ${Spacings.xs};
`

const CTA = () => {
  const { inView, ref } = useInView({ threshold: 0.8 })
  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 200)
  }, [])

  return (
    <Container ref={ref}>
      <CTATextContent>
        <CTATitle pageTitle textAlign='left' color='white'>
          MH Quality Test AB
        </CTATitle>
        <CTASubtitle pageTitle textAlign='left' color='white' noMargin>
          A software test company
        </CTASubtitle>
        <CTAParagraph>
          MH Quality Test AB is a company that focuses on software quality.
        </CTAParagraph>
      </CTATextContent>
      <Spacer size={Spacings.xxl} />

      <ProfilePic
        src='/assets/rear-view-programmer-working-all-night-long.jpg'
        srcSet='/assets/rear-view-programmer-working-all-night-long.jpg'
        className={inView ? (!init ? 'animate' : 'show') : init ? 'hide' : ''}
      />
    </Container>
  )
}

export default CTA
