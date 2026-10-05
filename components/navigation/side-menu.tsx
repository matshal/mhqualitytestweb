import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Breakpoints } from '../../styles/breakpoints'
import { Colors } from '../../styles/colors'
import { Spacings } from '../../styles/spacings'

const MobileExpandButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #f1f6f766;
  z-index: 100;
  display: none;
  position: relative;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
  }

  &.expanded {
    &:after {
      transform: rotate(45deg);
      background-color: var(--lime);
    }
    &:before {
      transform: rotate(-45deg);
      background-color: var(--lime);
    }
  }

  &:after {
    content: '';
    width: 18px;
    height: 2px;
    background: var(--paper);
    position: absolute;
    top: 15px;
    left: 11px;
    transform-origin: center;
    transition: transform 180ms ease, background 180ms ease;
  }

  &:before {
    content: '';
    width: 18px;
    height: 2px;
    background: var(--paper);
    position: absolute;
    top: 23px;
    left: 11px;
    transform-origin: center;
    transition: transform 180ms ease, background 180ms ease;
  }
`

const Sider = styled.div<{ show: boolean }>`
  display: none;
  align-items: center;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  padding-top: 76px;
  background: var(--ink);
  transition: opacity 200ms ease, transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-8px)')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};

  @media (max-width: 767px) {
    display: flex;
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: min(520px, calc(100% - 48px));
  padding: 0;
`

const MenuItem = styled.li`
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid #f1f6f733;

  &:last-of-type {
    border-bottom: 0;
  }
`

const StyledLink = styled.a<{ active?: boolean }>`
  text-decoration: none;
  font-weight: 600;
  font-size: 30px;
  font-family: 'Londrina Solid';
  cursor: pointer;
  color: var(--paper);

  &:hover {
    color: var(--lime);
  }
`

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const routes = [
    { name: 'Home', route: '#up-top' },
    { name: 'Approach', route: '#about' },
    { name: 'Services', route: '#facts' },
    { name: 'Contact', route: '#contact' }
  ]

  return (
    <>
      <MobileExpandButton
        type='button'
        className={showMenu ? 'expanded' : ''}
        aria-label={showMenu ? 'Close navigation' : 'Open navigation'}
        aria-expanded={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      />
      <Sider show={showMenu} role='navigation' aria-label='Mobile navigation'>
        <Menu>
          {routes.map(({ name, route }) => (
            <MenuItem key={route}>
              <Link href={route} passHref>
                <StyledLink onClick={() => setShowMenu(false)}>{name}</StyledLink>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Sider>
    </>
  )
}

export default SideMenu
