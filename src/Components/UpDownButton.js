import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const upDown = keyframes`
0%{
  bottom: 1rem;
  color: white;

}
50%{
  bottom: 2rem;
  color: black;

}
100%{
  bottom: 1rem;
    color: white;

}
`;
const Button = styled.span`
  cursor: pointer;
  font-size: 3vw;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${upDown} 1.5s ease-in-out infinite;
`;

function UpDownButton({ onClick }) {
  return (
    <div>
      <Button onClick={onClick}>
        <i className="fa-solid fa-sort-down"> </i>
      </Button>
    </div>
  );
}

UpDownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UpDownButton;
