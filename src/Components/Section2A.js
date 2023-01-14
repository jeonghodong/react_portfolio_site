import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import openBg from "../Functions/openBg";
import UpDownButton from "./UpDownButton";

const Wrap = styled.div`
  font-family: "Poppins", sans-serif;
  position: relative;
  background-color: #5a58d7;
  height: 100vh;
  z-index: 2;
`;

const TitleName = styled.h1`
  color: white;
  font-size: 5vw;
  font-weight: bold;
  text-align: right;
  position: relative;
  top: 35%;
  margin-right: 10rem;
`;

function Section1A() {
  const navigate = useNavigate();
  const bg = useRef();
  useEffect(() => {
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
      navigate("/Chart");
    }, 900);
  };
  return (
    <Wrap ref={bg}>
      <TitleName>REACT CHART APP</TitleName>
      <UpDownButton onClick={onClick} />
    </Wrap>
  );
}

export default Section1A;
