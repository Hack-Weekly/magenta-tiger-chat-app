import Head from "next/head"

import dynamic from "next/dynamic"

import styled from "styled-components"
import { Button, Header, Input } from "ui"
import { useAuth } from "../../context/AuthContext"

const StyledTitle = styled.h3`
    margin: 0;
    margin-left: 0.5rem;
`
const StyledMainWrapper = styled.div`
    padding: 1rem;
`
const StyledTopContainer = styled.div`
    display: flex;
`
const StyledContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
const StyledProfilePhoto = styled.div`
    width: 6.5rem;
    height: 6.5rem;
    border: 2px solid black;
    border-radius: 50%;
`
const StyledContainerRight = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledContainerBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function Web() {
    const DynamicLayout = dynamic(() => import("../../components/Layout"), {
        ssr: false,
    })

    const { user, logout } = useAuth()

    return (
        <DynamicLayout>
            <StyledMainWrapper>
                <Head>
                    <title>My Profile</title>
                </Head>
                <Header title="My Profile" />
                <StyledTitle>Profile photo</StyledTitle>
                <StyledTopContainer>
                    <StyledContainerLeft>
                        <StyledProfilePhoto></StyledProfilePhoto>
                        <Button
                            onClick={undefined}
                            text="Upload new picture"
                            size="small"
                        />
                        <Button
                            onClick={undefined}
                            text="Delete picture"
                            size="small"
                        />
                    </StyledContainerLeft>
                    <StyledContainerRight>
                        <Header title="Name surname" />
                        <h3>some-email@gmail.com</h3>
                    </StyledContainerRight>
                </StyledTopContainer>
                <StyledContainerBottom>
                    <StyledTitle>Edit profile</StyledTitle>
                    <Input typeOfInput="email" width="20rem" border={true} />
                    <Button
                        onClick={undefined}
                        text="Save changes"
                        size="small"
                    />
                </StyledContainerBottom>
                <Button onClick={logout} text="Log out" size="small" />
            </StyledMainWrapper>
        </DynamicLayout>
    )
}
