export interface InputProps {
    typeOfInput: "search" | "edit" | "send" | "email" | "password"
    border: boolean
    width: "100%" | "20rem" | "15rem" | "10rem"
}

export interface BtnProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
