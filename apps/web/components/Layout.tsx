import styled from "styled-components";

import { Navbar } from "ui/components/Nav";
import { ChildrenProps } from "../../../packages/types/src/props/children.types";
import { useAuth } from "../context";

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 650px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`;

export default function Layout({ children }: ChildrenProps) {
  const { user } = useAuth();

  return (
    <>
      <LayoutWrapper>
        {children}
        <Navbar userId={user?._id} />
      </LayoutWrapper>
    </>
  );
}
