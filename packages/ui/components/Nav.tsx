import styled from 'styled-components';
import Link from 'next/link';
import { NavPages } from '../../types/src/styled-components/nav.types';
import { faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from './Button';

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  border-top: 1px solid #d0d0d0;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 0.2rem;
  @media (min-width: 650px) {
    position: static;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    max-width: 4rem;
    height: 100%;
    border-top: none;
    border-right: 1px solid #d0d0d0;
    padding-right: 0.5rem;
    padding-top: 3rem;
    padding-bottom: 0;
  }
`;

const Navbar = () => {
  const path = useRouter().pathname;
  const router = useRouter();

  useEffect(() => {
    if (path == 'search') {
      setActivePage('search');
    } else if (path == 'account') {
      setActivePage('account');
    } else {
      setActivePage('home');
    }
  }, [path]);

  const [activePage, setActivePage] = useState<NavPages>('home');

  return (
    <NavbarContainer>
      <Button
        text="Home"
        variant="navIcon"
        active={activePage === 'home'}
        icon={faHouse}
        onClick={() => router.push('/')}
      />
      <Button
        text="Search"
        variant="navIcon"
        active={activePage === 'search'}
        icon={faSearch}
        onClick={() => router.push('/search')}
      />
      <Button
        text="Account"
        variant="navIcon"
        active={activePage === 'account'}
        icon={faUser}
        onClick={() => router.push('/account')}
      />
    </NavbarContainer>
  );
};

export { Navbar };
