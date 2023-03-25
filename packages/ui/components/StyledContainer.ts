import styled, { css } from "styled-components";
import { ContainerVariant } from "../../types/src/styled-components/container.types";

const StyledContainer = styled.div<ContainerVariant>`
  ${({ variant }) =>
    variant === "flex" &&
    css`
      display: flex;
    `}

  ${({ variant }) =>
    variant === "grid" &&
    css`
      display: grid;
    `}

    ${({ variant }) =>
    variant === "user-list" &&
    css`
      width: 100%;
      display: grid;
      gap: 8px;
      padding: 10px;
      margin-bottom: 83px;
      overflow:auto;
    `}
`;

export default StyledContainer;
