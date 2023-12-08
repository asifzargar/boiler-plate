import {
  Loader,
  OuterCircle,
  InnerCircle,
  CenteredContainer,
} from "./loader.style";

const LoadingSpinner = () => (
  <CenteredContainer>
    <Loader>
      <OuterCircle />
      <InnerCircle />
    </Loader>
  </CenteredContainer>
);

export default LoadingSpinner;
