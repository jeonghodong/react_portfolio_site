import { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TopButton = styled.i`
  color: #0000c5;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  z-index: 100;
  font-size: 2.5vw;
  cursor: pointer;
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
