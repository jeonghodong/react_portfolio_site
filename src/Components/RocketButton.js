import { forwardRef } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import theme from "../styles/theme";

const upDown = keyframes`
0%{
  bottom: 5rem;
}
50%{
  bottom: 3.5rem;
}
100%{
  bottom: 5rem;
}
`;

const TopButton = styled.i`
  @media ${(props) => props.theme.mobile} {
    font-size:1.5rem;
    left: 88vw;
  }
  color: #0000c5;
  position: sticky;
  bottom: 4rem;
  left: 93vw;
  z-index: 100;
  font-size: 3vw;
  cursor: pointer;
  animation: ${upDown} 2.8s ease-in-out infinite;
`;

const RocketButton = forwardRef(({ rocketClick }, rocket) => {
  return (
    <ThemeProvider theme={theme}>
      <TopButton ref={rocket} onClick={rocketClick} className="fa-solid fa-rocket">
        {" "}
      </TopButton>
    </ThemeProvider>
  );
});

RocketButton.propTypes = {
  rocketClick: PropTypes.func.isRequired,
};

export default RocketButton;
