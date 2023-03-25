import styled from "styled-components"

import { ChildrenProps } from "../../../packages/types/src/props/children.types"
import { Navbar } from "ui/components/Nav"

const LayoutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 650px) {
        display: grid;
        grid-template-columns: 4rem 90%;
    }
`

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <LayoutWrapper>
                <Navbar />
                {children}
            </LayoutWrapper>
        </>
    )
}
