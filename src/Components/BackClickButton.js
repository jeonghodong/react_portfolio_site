import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const LeftRight = keyframes`
0%{
  left: 0;
  color: white;

}
50%{
  left: 1rem;
  color: black;

}
100%{
  left: 0;
    color: white;

}`;

const BackButton = styled.i`
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2.5rem;
  margin: 2rem;
  cursor: pointer;
  animation: ${LeftRight} 2.4s ease-in-out infinite;
`;

function BackClickButton() {
  const back = useNavigate();

  const onClick = () => {
    back("/About#port");
  };

  return (
    <BackButton onClick={onClick} className="fa-solid fa-backward">
      {" "}
    </BackButton>
  );
}

export default BackClickButton;
