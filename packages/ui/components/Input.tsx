import {
  faCircleUser,
  faPaperPlane,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faKey, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DivProps, InputProps } from "../../types/src/props/";

const StyledWrapper = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: "#e8e7e7";
  border: ${(props) => (props.border ? "1px solid grey" : "none")};
  border-radius: 4px;
  width: ${(props) =>
    props.width === "100%"
      ? "100%"
      : props.width === "20rem"
      ? "20rem"
      : props.width === "15rem"
      ? "15rem"
      : "10rem"};
  padding: 0.1rem;
  &:hover {
    background-color: "#e8e7e7da";
  }
  &:focus-within {
    background-color: "#e8e7e7da";
    box-shadow: 0 0 4px #c1c1c1;
  }
`;

const StyledDiv = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
  margin-right: 0.4rem;
`;

const StyledInput = styled.input<InputProps>`
  background-color: ${(props) =>
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
  border-left: ${(props) =>
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
`;

function Input(
  { typeOfInput, border, width }: InputProps,
  { onClick }: DivProps
) {
  const profileIcon = <FontAwesomeIcon icon={faCircleUser} color={"#535353"} />;
  const sendIcon = <FontAwesomeIcon icon={faPaperPlane} color={"#535353"} />;
  const penIcon = <FontAwesomeIcon icon={faPenToSquare} color={"#535353"} />;
  const searchIcon = (
    <FontAwesomeIcon icon={faMagnifyingGlass} color={"#535353"} />
  );
  const keyIcon = <FontAwesomeIcon icon={faKey} />;
  const dynamicType: string = setInputType();

  function setInputType() {
    const textInputs = ["search", "edit", "send"];

    if (textInputs.includes(typeOfInput)) {
      return "text";
    } else if (typeOfInput === "email") {
      return "email";
    }
    return "password";
  }

  return (
    <>
      <StyledWrapper width={width} border={border} typeOfInput={typeOfInput}>
        {typeOfInput === "search" ? (
          <StyledDiv onClick={onClick}>{searchIcon}</StyledDiv>
        ) : typeOfInput === "email" ? (
          <StyledDiv onClick={onClick}>{profileIcon}</StyledDiv>
        ) : typeOfInput === "edit" ? (
          <StyledDiv onClick={onClick}>{penIcon}</StyledDiv>
        ) : typeOfInput === "password" ? (
          <StyledDiv onClick={onClick}>{keyIcon}</StyledDiv>
        ) : (
          ""
        )}

        <StyledInput
          type={dynamicType}
          typeOfInput={typeOfInput}
          width={width}
          border={border}
        />

        {typeOfInput === "send" ? (
          <StyledDiv onClick={onClick}>{sendIcon}</StyledDiv>
        ) : (
          ""
        )}
      </StyledWrapper>
    </>
  );
}

Input.defaultProps = {
  typeOfInput: "search",
  border: true,
  width: "15rem",
  onClick: undefined,
};
export { Input };