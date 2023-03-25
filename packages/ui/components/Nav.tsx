import { faHouse, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  NavPages,
  NavProps,
} from "../../types/src/styled-components/nav.types";

import { Button } from "./Button";

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

const pathToPage: { [key: string]: NavPages } = {
  "/": NavPages.Home,
  "/search": NavPages.Search,
  "/account": NavPages.Account,
};

const Navbar = ({ userId }: NavProps) => {
  const path = useRouter().pathname;
  const router = useRouter();
  const [activePage, setActivePage] = useState<NavPages>(pathToPage[path]);

  useEffect(() => {
    setActivePage(pathToPage[path]);
  }, [path]);

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  return (
    <NavbarContainer>
      <Button
        text="Home"
        variant="navIcon"
        active={activePage === NavPages.Home}
        icon={faHouse}
        onClick={() => handleButtonClick("/")}
      />
      <Button
        text="Search"
        variant="navIcon"
        active={activePage === NavPages.Search}
        icon={faSearch}
        onClick={() => handleButtonClick("/search")}
      />
      <Button
        text="Account"
        variant="navIcon"
        active={activePage === NavPages.Account}
        icon={faUser}
        onClick={() => handleButtonClick(`/account/${userId}`)}
      />
    </NavbarContainer>
  );
};

export { Navbar };
