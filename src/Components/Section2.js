import styled from "styled-components";

const Wrap = styled.div`
  background-color: white;
  height: 100vh;
  padding-top: 275px;
  width: 1300px;
  margin: 0 auto;
  display: flex;
`;

const Img = styled.img`
  width: 100%;
`;

const Left = styled.div`
  width: 50%;
  margin-right: 10%;
`;
const Right = styled.div`
  width: 40%;
`;
const TitleName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 3rem;
`;
const Skills = styled.ul`
  display: flex;
  font-family: "Poppins", sans-serif;
  margin-top: 5rem;
  & li {
    padding: 5px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    background-color: red;
    margin-right: 1rem;
    &:nth-last-child(2) {
      background-color: navy;
    }
    &:nth-last-child(1) {
      margin: 0;
      background-color: orange;
    }
  }
`;
const Acc = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 3rem;
`;
const Link = styled.a`
  font-weight: bold;
  font-size: 1.5vw;
  border: 2px solid black;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
`;

function Section2() {
  return (
    <Wrap>
      <Left>
        <Img src="img/img_portfolio2.png" alt="PFimg" />
      </Left>
      <Right>
        <TitleName>CHART APP</TitleName>
        <Acc>
          리액트를 학습하며 제작한 데스크탑 페이지입니다.
          <br />
          <br />칸 국제영화제에 출품한 국내 작품을 연도별로 모아볼 수 있으며, 마우스 hover 시 작품 정보를 확인할 수
          있습니다.
        </Acc>
        <Link href="https://jeonghodong.github.io/react_movie_app/" target="_blank" rel="noreferrer">
          {" "}
        </Link>
        <Skills>
          <li>React</li>
          <li>Sass / Scss</li>
          <li>CSS in Js</li>
        </Skills>
      </Right>
    </Wrap>
  );
}

export default Section2;
