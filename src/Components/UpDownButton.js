import styled, { keyframes } from "styled-components";

const upDown = keyframes`
0%{
  bottom: 1rem;

}
50%{
  bottom: 2rem;
    opacity: 0;
}
100%{
  bottom: 1rem;
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

const onClick = () => {
  setTimeout(function () {
    window.scrollTo(0, 9999);
  }, 500);
};

function UpDownButton() {
  return (
    <div>
      <Button onClick={onClick}>
        <i className="fa-solid fa-sort-down"> </i>
      </Button>
    </div>
  );
}

export default UpDownButton;
