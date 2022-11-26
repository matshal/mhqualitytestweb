import styled from 'styled-components'
import { Breakpoints } from '../../styles/breakpoints'
import { Spacings } from '../../styles/spacings'
import Link from 'next/link'
import React from 'react'
import { IconBrandLinkedin, IconMail } from '@tabler/icons'
import { socialMedia } from '../../utils/social-media'
import SideMenu from './side-menu'
import { company } from '../../utils/company'

const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 5;
  background: linear-gradient(#00000080, transparent);
`

const Logo = styled.img`
  margin-left: ${Spacings.sm};
  width: 50px;
  ${Breakpoints.minMedia.tablet} {
    margin-left: 0;
    margin-right: 37px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  width: 100%;

  ${Breakpoints.minMedia.tablet} {
    max-width: ${Breakpoints.size.tablet};
    padding: 0 ${Spacings.lg};
  }

  ${Breakpoints.minMedia.desktop} {
    max-width: ${Breakpoints.size.desktop};
    padding: 0 ${Spacings.lg};
  }
`

const SocialMedia = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Filler = styled.div`
  ${Breakpoints.minMedia.tablet} {
    display: none;
  }
`

export const Header = () => {
  const pages = [
    { name: 'Up top', url: '#up-top' },
    { name: 'Contact', url: '#contact' }
  ]
  return (
    <Container>
      <Content>
        <Link href='#up-top' passHref>
          <a>
            <Logo src='assets/1616056020857.jpeg' />
          </a>
        </Link>
        <SocialMedia>
          <a
            href={socialMedia.linkedin.link}
            target={company.linkedInUrl}
            rel='noopener noreferrer'
          >
            <IconBrandLinkedin size='48px' />
          </a>
        </SocialMedia>
        <Link href='#contact' passHref>
          <a>
            <IconMail/>
          </a>
        </Link>
        <SideMenu />
      </Content>
    </Container>
  )
}
