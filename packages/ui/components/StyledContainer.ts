import styled, { css } from 'styled-components';
import { ContainerVariant } from '../../types/src/styled-components/container.types';

const StyledContainer = styled.div<ContainerVariant>`
  ${({ variant }) =>
    variant === 'flex' &&
    css`
      display: flex;
    `}

  ${({ variant }) =>
    variant === 'grid' &&
    css`
      display: grid;
    `}

    ${({ variant }) =>
    variant === 'user-list' &&
    css`
      width: 100%;
      display: grid;
      gap: 8px;
      padding: 10px;
      overflow: auto;
      margin-bottom: 2rem;
      padding-bottom: 4rem;
      height: 100%;
      @media (min-width: 650px) {
        max-height: 98%;
      }
    `}
`;

export default StyledContainer;
