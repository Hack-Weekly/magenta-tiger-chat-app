import styled from "styled-components"
import GlobalStyle from "./globalStyle/GlobalStyling"
import SearchIcon from "@mui/icons-material/Search"

interface InputProps {
    type: "search" | "addFriend" | "update" | "sendMessage"
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.2rem;
    background-color: #e8e7e7;
    border-radius: 4px;
    width: fit-content;

    &:hover {
        background-color: #e8e7e7da;
    }
    &:focus-within {
        background-color: #e8e7e7da;
        box-shadow: 0 0 4px #e8e7e7;
    }
`
const Icon = styled.div`
    width: 100%;
`

const UserInput = styled.input<InputProps>`
    background-color: ${props =>
        props.type === "search"
            ? "white"
            : props.type === "addFriend"
            ? "green"
            : props.type === "update"
            ? "blue"
            : props.type === "sendMessage"
            ? "yellow"
            : "white"};
    height: 100%;
    border: none;
    border-radius: 4px;
    background: none;
    color: #535353;
    font-size: 1rem;

    &:focus {
        outline: none;
        border: none;

        &::-webkit-clear-button {
            color: grey;
        }
    }
`

function Input({ type }: InputProps) {
    // const dyanmicClassName: string = type
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <SearchIcon fontSize="medium" color="action" />
                <UserInput type={type} />
            </Wrapper>
        </>
    )
}

export { Input }
