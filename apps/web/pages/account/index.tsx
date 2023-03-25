import Head from "next/head"

import dynamic from "next/dynamic"

import styled from "styled-components"
import { Button, Header, Input } from "ui"
import { useAuth } from "../../context/AuthContext"

const StyledTitle = styled.h3`
    margin: 0;
    margin-left: 0.5rem;
    margin-top: 1.5rem;
`
const StyledMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const StyledTopContainer = styled.div`
    display: flex;
    margin-bottom: 3rem;
    margin-top: 1rem;
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

    h2,
    h3 {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-weight: 500;
        font-size: 1.5rem;
    }
    h3 {
        font-weight: 100;
        font-size: 1rem;
    }
`

const StyledContainerEditData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`
const StyledWrapperLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

const StyledWrapperRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
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
                            danger={true}
                            onClick={undefined}
                            text="Delete picture"
                            size="small"
                        />
                    </StyledContainerLeft>
                    <StyledContainerRight>
                        <h2>Name surname</h2>
                        <h3>some-email@gmail.com</h3>
                    </StyledContainerRight>
                </StyledTopContainer>
                <StyledContainerEditData>
                    <StyledWrapperLeft>
                        <StyledTitle>Edit profile</StyledTitle>
                    </StyledWrapperLeft>
                    <Input variant="user" width="100%" />
                    <StyledWrapperRight>
                        <Button
                            onClick={undefined}
                            text="Save changes"
                            size="small"
                        />
                    </StyledWrapperRight>
                </StyledContainerEditData>
                <StyledContainerEditData>
                    <StyledWrapperLeft>
                        <StyledTitle>Change password</StyledTitle>
                    </StyledWrapperLeft>
                    <Input variant="password" width="100%" />
                    <StyledWrapperRight>
                        <Button
                            onClick={undefined}
                            text="Save changes"
                            size="small"
                        />
                    </StyledWrapperRight>
                </StyledContainerEditData>
                <Button onClick={logout} text="Log out" size="small" />
            </StyledMainWrapper>
        </DynamicLayout>
    )
}
