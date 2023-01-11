import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UpDownButton from "./UpDownButton";
import openBg from "../Functions/openBg";
import closeBg from "../Functions/closeBg";

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
  useEffect(() => {
    openBg(bg);
  }, []);
  const onClick = () => {
    closeBg(bg);
    setTimeout(() => {
      navigate("/About");
    }, 900);
  };
  return (
    <Wrap ref={bg}>
      <TitleBox>
        <Title>언제나 빛나고 싶은 </Title>
        <br />
        <Title>디자이너 정호동입니다.</Title>
      </TitleBox>
      <UpDownButton onClick={onClick} />
    </Wrap>
  );
}

export default About;
