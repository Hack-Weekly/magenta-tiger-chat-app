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
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: flex-start;
    }
`

export default function Layout({ children }: ChildrenProps) {
    return (
        <>
            <LayoutWrapper>
                {children}
                <Navbar />
            </LayoutWrapper>
        </>
    )
}
