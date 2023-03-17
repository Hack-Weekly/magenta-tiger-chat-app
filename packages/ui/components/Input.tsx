import styled from "styled-components"
import { useState } from "react"
import GlobalStyle from "./globalStyle/GlobalStyling"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import SendIcon from "@mui/icons-material/Send"
import PasswordIcon from "@mui/icons-material/Password"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"

// NOTES//
// callback not fully working yet, but styles do work//

interface InputProps {
    typeOfInput: "search" | "edit" | "send" | "email" | "password"
    border: true | false
    width: "100%" | "20rem" | "15rem" | "10rem"
    callBack: any | null
}
interface ValidProps {
    validEmail: boolean | null
    validPassword: boolean | null
}

const Wrapper = styled.div<InputProps & ValidProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    background-color: ${props =>
        props.validEmail === false || props.validPassword === false
            ? "rgba(255, 0, 0, 0.2)"
            : props.validEmail === true || props.validPassword === true
            ? "rgba(0, 255, 0, 0.2)"
            : "#e8e7e7"};
    border: ${props => (props.border ? "1px solid grey" : "none")};
    border-radius: 4px;
    width: ${props =>
        props.width === "100%"
            ? "100%"
            : props.width === "20rem"
            ? "20rem"
            : props.width === "15rem"
            ? "15rem"
            : "10rem"};
    padding: 0.1rem;

    &:hover {
        background-color: ${props =>
            props.validEmail === false || props.validPassword === false
                ? "rgba(255, 0, 0, 0.2)"
                : props.validEmail === true || props.validPassword === true
                ? "rgba(0, 255, 0, 0.2)"
                : "#e8e7e7da"};
    }
    &:focus-within {
        background-color: ${props =>
            props.validEmail === false || props.validPassword === false
                ? "rgba(255, 0, 0, 0.2)"
                : props.validEmail === true || props.validPassword === true
                ? "rgba(0, 255, 0, 0.2)"
                : "#e8e7e7da"};

        box-shadow: 0 0 4px #e8e7e7;
    }
`
const Icon = styled.div`
    width: 100%;
`

const UserInput = styled.input<InputProps>`
    background-color: ${props =>
        props.typeOfInput === "search"
            ? "white"
            : props.typeOfInput === "edit"
            ? "green"
            : props.typeOfInput === "send"
            ? "blue"
            : props.typeOfInput === "email"
            ? "white"
            : "white"};
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 4px;
    border-left: ${props =>
        props.typeOfInput === "search"
            ? "none"
            : props.typeOfInput === "edit"
            ? "1px solid grey"
            : props.typeOfInput === "send"
            ? "none"
            : props.typeOfInput === "email"
            ? "1px solid grey"
            : "none"};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    background: none;
    color: #535353;
    font-size: 1rem;

    &:focus {
        outline: none;
    }
`

function Input({ typeOfInput, border, width, callBack }: InputProps) {
    const [validPassword, setValidPassword] = useState<null | Boolean>(null)
    const [validEmail, setValidEmail] = useState<null | Boolean>(null)
    const dynamicType: string = setInputType()

    function setInputType() {
        const textInputs = ["search", "edit", "send"]

        if (textInputs.includes(typeOfInput)) {
            return "text"
        } else if (typeOfInput === "email") {
            return "email"
        }
        return "password"
    }

    function validatePassword(password: string) {
        console.log(password)
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
        setValidPassword(passwordRegex.test(password))
    }

    function validateEmail(email: string) {
        const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        setValidEmail(emailRegex.test(email))
    }

    function buttonWrapper(funcCall: (value: any) => any | null) {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={() => {
                        return funcCall
                    }}
                >
                    {typeOfInput === "search" ? (
                        <SearchIcon fontSize="medium" color="action" />
                    ) : typeOfInput === "email" ? (
                        <AccountCircleOutlinedIcon
                            fontSize="medium"
                            color="action"
                        />
                    ) : typeOfInput === "edit" ? (
                        <EditOutlinedIcon fontSize="medium" color="action" />
                    ) : typeOfInput === "password" ? (
                        <PasswordIcon fontSize="medium" color="action" />
                    ) : (
                        <SendIcon fontSize="small" color="action" />
                    )}
                </div>
            </>
        )
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper
                width={width}
                border={border}
                typeOfInput={typeOfInput}
                validEmail={validEmail}
                validPassword={validPassword}
            >
                {typeOfInput !== "send" ? buttonWrapper(callBack) : ""}

                <UserInput
                    type={dynamicType}
                    typeOfInput={typeOfInput}
                    width={width}
                    border={border}
                    callBack={callBack}
                    onChange={e => {
                        dynamicType === "email"
                            ? validateEmail(e.target.value)
                            : dynamicType === "password"
                            ? validatePassword(e.target.value)
                            : ""
                    }}
                />
                {typeOfInput === "send" ? buttonWrapper(callBack()) : ""}
            </Wrapper>
        </>
    )
}

Input.defaultProps = {
    typeOfInput: "search",
    border: false,
    width: "15rem",
    callBack: null,
}
export { Input }
