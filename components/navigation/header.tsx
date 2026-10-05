import Link from 'next/link'
import styled from 'styled-components'
import { IconBrandLinkedin, IconMail } from '@tabler/icons'
import { company } from '../../utils/company'
import SideMenu from './side-menu'

const Container = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  color: var(--paper);
  background: #102c50e8;
  border-bottom: 1px solid #f1f6f72b;
  backdrop-filter: blur(14px);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 767px) {
    width: calc(100% - 32px);
    gap: 12px;
  }
`

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const Logo = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
  flex-shrink: 0;
`

const BrandName = styled.span`
  display: flex;
  flex-direction: column;
  color: var(--paper);
  line-height: 1.05;

  strong {
    font-size: 16px;
  }

  span {
    margin-top: 4px;
    color: #f1f6f7a6;
    font-size: 12px;
  }
`

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex: 1;

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  color: #f1f6f7d9;
  font-size: 16px;
  transition: color 160ms ease;

  &:hover {
    color: var(--lime);
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--paper);
  }

  a:hover {
    color: var(--lime);
  }

  @media (max-width: 767px) {
    margin-left: auto;
    gap: 8px;
  }
`

const Header = () => (
  <Container>
    <Content>
      <Link href='#up-top' passHref>
        <Brand aria-label='MH Quality Test AB, home'>
          <Logo src='/assets/1616056020857.jpeg' alt='' />
          <BrandName>
            <strong>MH Quality Test</strong>
            <span>AB</span>
          </BrandName>
        </Brand>
      </Link>
      <DesktopNav aria-label='Main navigation'>
        <Link href='#about' passHref>
          <NavLink>Approach</NavLink>
        </Link>
        <Link href='#facts' passHref>
          <NavLink>Services</NavLink>
        </Link>
        <Link href='#contact' passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </DesktopNav>
      <Actions>
        <a
          href={company.linkedInUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='MH Quality Test on LinkedIn'
        >
          <IconBrandLinkedin size={20} stroke={1.8} />
        </a>
        <a href={company.refEmail} aria-label='Email MH Quality Test'>
          <IconMail size={20} stroke={1.8} />
        </a>
        <SideMenu />
      </Actions>
    </Content>
  </Container>
)

export { Header }