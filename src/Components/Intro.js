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
  width: 100%;
`;

function Intro() {
  const bg = useRef();
  const folio = useRef();
  const skill = useRef();
  const contact = useRef();
  const buttonBg = useRef();
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
    if (ref === "ABOUT") {
      bg.current.animate(
        [
          { transform: "translateY(0px)", opacity: "1" },
          { transform: "translateY(200px)", opacity: "0" },
        ],
        {
          delay: 0,
          duration: 800,
          easing: "ease",
          iterations: 1,
          fill: "forwards",
        }
      );
      closeBg(buttonBg);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    if (ref === "SKILLS") {
      skill.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "WORKS") {
      folio.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "CONTACT") {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header ref={buttonBg} onClick={onClick} />
      <Wrap ref={bg}>
        <TitleBox />
        <SkillBox ref={skill} />
        <PortfolioBox ref={folio} />
        <ContactBox ref={contact} />
      </Wrap>
    </div>
  );
}

export default Intro;
