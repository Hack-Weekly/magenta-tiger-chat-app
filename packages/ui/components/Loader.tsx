import styled, { keyframes } from 'styled-components';

const LoadingBar = styled.div`
  height: 0.4rem;
  width: 100%;
  background-color: #1f986c76;
  position: fixed;
  top: 0;
  left: 0;
  position: absolute;
`;

const progress = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #a0a0a03b;
  animation: ${progress} 2s ease-in-out infinite;
`;

function Loader() {
  return (
    <LoadingBar>
      <ProgressBar />
    </LoadingBar>
  );
}
export { Loader };
