import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

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
  color: #0000c5;
  position: sticky;
  bottom: 5rem;
  left: 93vw;
  z-index: 100;
  font-size: 2.5vw;
  cursor: pointer;
  animation: ${upDown} 2.8s ease-in-out infinite;
`;

const RocketButton = forwardRef(({ rocketClick }, rocket) => {
  return (
    <TopButton ref={rocket} onClick={rocketClick} className="fa-solid fa-rocket">
      {" "}
    </TopButton>
  );
});

RocketButton.propTypes = {
  rocketClick: PropTypes.func.isRequired,
};

export default RocketButton;
