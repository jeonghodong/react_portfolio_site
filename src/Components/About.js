import styled from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  position: absolute;
  background-color: black;
  height: 100vh;
  width: 100vw;
  color: white;
  z-index: 2;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50%;
`;

const Title = styled.span`
  display: block;
  font-size: 1.8vw;
  font-weight: bold;
`;

function About() {
  const bg = useRef();
  const onClick = () => {
    bg.current.animate(
      [
        // keyframes
        { display: "none" },
        { transform: "translateY(0px)", opacity: "1" },
        { transform: "translateY(-30px)" },
        { transform: "translateY(100px)", opacity: "0" },
      ],
      {
        // timing options
        duration: 800,
        fill: "forwards",
      }
    );
    // setTimeout(function () {
    //   window.scrollTo(0, 9999);
    // }, 500);
  };
  return (
    <Wrap ref={bg}>
      <TitleBox>
        <Title>언제나 빛나고 싶은 </Title>
        <br />
        <Title>디자이너 정호동입니다.</Title>
      </TitleBox>
      <Link to="/About">
        <UpDownButton onClick={onClick} />
      </Link>
    </Wrap>
  );
}

export default About;
