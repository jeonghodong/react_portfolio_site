import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContactBox from "./ContactBox";
import SkillBox from "./SkillBox";
import TitleBox from "./TitleBox";
import openBg from "../Functions/openBg";
import PortfolioBox from "./PortfolioBox";
import Header from "./Header";
import closeBg from "../Functions/closeBg";

const Wrap = styled.div`
  padding-top: 6rem;
  height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;

function Intro() {
  const bg = useRef();
  const folio = useRef();
  const skill = useRef();
  const button = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    openBg(bg);
    // window.location.hash는 만약 주소에 "#ㅇㅇㅇ"이 들어가 있는지 확인
    // 만약 hash가 있으면 해당 페이지에서 hash로 이동
    // html이 불러와 진 후에 div의 id가 정렬 되기 때문에
    // /About#port를 하면 hash를 인식 못함.
    // 그러므로 useEffect로 page가 onMount가 되었을 때 hash가 있는지 확인하고 있다면 href로 해당 해쉬로 이동하라고 추가.
    if (window.location.hash) {
      window.location.href = `${window.location.hash}`;
    }
  }, []);

  const onClick = (ref) => {
    if (ref === "About") {
      closeBg(bg);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    if (ref === "Skills") {
      skill.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "Works") {
      folio.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header ref={button} onClick={onClick} />
      <Wrap ref={bg}>
        <TitleBox />
        <SkillBox ref={skill} />
        <PortfolioBox ref={folio} />
        <ContactBox />
      </Wrap>
    </div>
  );
}

export default Intro;
