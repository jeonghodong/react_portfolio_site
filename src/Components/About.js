import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UpDownButton from "./UpDownButton";
import openBg from "../Functions/openBg";

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
  const navigate = useNavigate();
  const bg = useRef();
  useLayoutEffect(() => {
    openBg(bg);
  }, []);
  const onClick = () => {
    bg.current.animate(
      [
        { transform: "translateY(0px)", opacity: "1" },
        { transform: "translateY(-1200px)", opacity: "0" },
      ],
      {
        delay: 0,
        duration: 1100,
        easing: "ease",
        iterations: 1,
        fill: "forwards",
      }
    );
    setTimeout(() => {
      navigate("/About");
    }, 900);
  };
  return (
    <Wrap ref={bg}>
      <TitleBox>
        <Title>안녕하세요. 프론트엔드 개발자</Title>
        <br />
        <Title>정호동입니다.</Title>
      </TitleBox>
      <UpDownButton onClick={onClick} />
    </Wrap>
  );
}

export default About;
