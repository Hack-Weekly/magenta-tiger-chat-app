import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import {
  ButtonProps,
  StyledButtonProps
} from "../../types/src/styled-components/button.types";

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  border-radius: 15px;
  padding: 9px 14px;
  font-family: "Poppins";
  font-weight: 500;
  cursor: pointer;
  ${({ variant, active, danger, disabled, size }) =>
    css`
      background-color: ${disabled === true &&
        variant === "primary" ||
        variant === "dim"
        ? "var(--btn-disabled)"
        : danger === true ||
        variant === "icon" ||
        variant === "navIcon"
        ? "transparent"
        : variant === "primary"
        ? "var(--btn-primary)"
        : variant === "dim"
        ? "var(--btn-dim)"
        : "transparent"};
      border: ${variant === "icon"
        ? "none"
        : danger === true
        ? "1px solid var(--btn-danger)"
        : "none"};
      color: ${disabled === true
        ? "var(--btn-disabled-text)"
        : danger === true
        ? "var(--btn-danger)"
        : variant === "primary"
        ? "var(--btn-primary-text)"
        : variant === "icon" && active === true
        ? "var(--btn-icon-active)"
        : variant === "icon"
        ? "var(--btn-icon)"
        : variant === "navIcon" && active === true
        ? "var(--btn-primary)"
        : "var(--btn-nav_icon)"};
      font-size: ${size === "small"
        ? "0.8rem"
        : size === "middle"
        ? "1.5rem"
        : "2rem"};
    `}
`;

function Button({
  text,
  variant="primary",
  icon,
  danger,
  disabled,
  size = "middle",
  active,
  onClick,
}: ButtonProps) {

  const handleClick = (e: MouseEvent) => {
    onClick?.(e);
  }

  return (
    <StyledButton
      variant={variant}
      danger={danger}
      disabled={disabled}
      active={active}
      size={size}
      onClick={handleClick}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} />
      )}
      <span>{text}</span>
    </StyledButton>
  );
}

export { Button };
