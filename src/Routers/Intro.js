import styled from "styled-components";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContactBox from "../Components/ContactBox";
import SkillBox from "../Components/SkillBox";
import TitleBox from "../Components/TitleBox";
import openBg from "../Functions/openBg";
import PortfolioBox from "../Components/PortfolioBox";
import Header from "../Components/Header";
import closeBg from "../Functions/closeBg";
import RocketButton from "../Components/RocketButton";

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
  const title = useRef();
  const rocket = useRef();
  const navigate = useNavigate();

  // 왜 useEffect를 쓰면 화면 깜빡임이 나타나는가?
  // 리액트 공식 문서를 확인해보면 useEffect와 useLayoutEffect의 실행 시점 때문에 이런 차이가 생긴다는 것을 알 수 있습니다. 공식 문서에서는 보통의 경우는 useEffect를 쓰되, 만약 사용자가 알아차리는 DOM 변경을 하게 될 경우는 useLayoutEffect를 쓰라고 언급하고 있습니다.
  useLayoutEffect(() => {
    openBg(bg);
  }, []);
  //
  useEffect(() => {
    // window.location.hash는 만약 주소에 "#ㅇㅇㅇ"이 들어가 있는지 확인
    // 만약 hash가 있으면 해당 페이지에서 hash로 이동
    // html이 불러와 진 후에 div의 id가 정렬 되기 때문에
    // /About#port를 하면 hash를 인식 못함.
    // 그러므로 useEffect로 page가 onMount가 되었을 때 hash가 있는지 확인하고 있다면 href로 해당 해쉬로 이동하라고 추가.
    if (window.location.hash) {
      window.location.href = `${window.location.hash}`;
    }
  }, []);
  // 섹션별로이동 & About 이동 및 페이드효과 & PortfolioBox 버튼클릭시 주제별 링크이동
  const onClick = (ref, ref2) => {
    // 섹션별 이동
    if (ref === "SKILLS") {
      skill.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "WORKS") {
      folio.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "CONTACT") {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
    if (ref === "ABOUT") {
      bg.current.animate(
        [
          { transform: "translateY(0px)", opacity: "1" },
          { transform: "translateY(200px)", opacity: "0" },
        ],
        {
          delay: 0,
          duration: 700,
          easing: "ease",
          iterations: 1,
          fill: "forwards",
        }
      );
      closeBg(buttonBg);
      setTimeout(() => {
        navigate("/");
      }, 450);
    } else if (ref2 === true) {
      bg.current.animate(
        [
          { transform: "translateY(0px)", opacity: "1" },
          { transform: "translateY(200px)", opacity: "0" },
        ],
        {
          delay: 0,
          duration: 700,
          easing: "ease",
          iterations: 1,
          fill: "forwards",
        }
      );
      closeBg(buttonBg);
      if (ref === 1) {
        setTimeout(() => {
          navigate("/MovieAbout");
        }, 450);
      }
      if (ref === 2) {
        setTimeout(() => {
          navigate("/SnsAbout");
        }, 450)
      };
      if (ref === 3) {
        setTimeout(() => {
          navigate("/PortfolioAbout");
        }, 450);
      }
      if (ref === 4) {
        setTimeout(() => {
          navigate("/PhotographyAbout");
        }, 450);
      }
    }
  };
  // Top으로 이동
  const rocketClick = () => {
    rocket.current.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "translateY(0px)", color: "red" },
        { transform: "rotate(315deg)", color: "red" },
        { transform: "rotate(315deg)", color: "red" },
        { transform: "rotate(315deg)", color: "red" },
        { transform: "rotate(315deg)", color: "red" },
        { transform: "translateY(0px)" },
      ],
      {
        delay: 0,
        duration: 2000,
        easing: "ease",
        iterations: 1,
        fill: "backwards",
      }
    );
    setTimeout(() => {
      title.current.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };
  return (
    <div>
      <Header ref={buttonBg} onClick={onClick} />
      <Wrap ref={bg}>
        <TitleBox ref={title} />
        <SkillBox ref={skill} />
        <PortfolioBox onClick={onClick} ref={folio} />
        <ContactBox ref={contact} />
        <RocketButton ref={rocket} rocketClick={rocketClick} />
      </Wrap>
    </div>
  );
}

export default Intro;
