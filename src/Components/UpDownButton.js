import styled, { keyframes, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import theme from "../styles/theme";

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
  @media ${(props) => props.theme.mobile} {
    font-size: 2.5rem;
  }
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
    <ThemeProvider theme={theme}>
      <Button onClick={onClick}>
        <i className="fa-solid fa-sort-down"> </i>
      </Button>
    </ThemeProvider>
  );
}

UpDownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UpDownButton;
