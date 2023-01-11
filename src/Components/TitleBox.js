import styled from "styled-components";

const Wrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  background-color: rgb(255, 255, 255);
  padding-top 3rem;
  border-radius: 0 10vw 0 0;
  box-shadow: 15px 25px 18px -2px rgba(0, 0, 0, 0.44);
  z-index: 1;
  height: 100%;
`;
const Cover = styled.p`
  padding: 50px 0 20px 0;
  font-size: 1vw;
  font-weight: 400;
`;
const Name = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;
const Account = styled.span`
  text-align: center;
  word-break: break-all;
  width: 60%;
  font-size: 1vw;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 23px;
`;
const Line = styled.div`
  background-color: black;
  width: 3vw;
  height: 4px;
  margin: 47px 0 47px 0;
`;
const Circle = styled.div`
  background-color: gray;
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
`;
const ProfilImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid black;
`;

function TitleBox() {
  return (
    <Wrap>
      <Circle>
        <ProfilImg src="img/ghost2.jpg" alt="profil_img" />
      </Circle>
      <Cover>항상 빛나는 다이아몬드 같은 디자이너</Cover>
      <Name>jeonghodong</Name>
      <Line> </Line>
      <Account>
        니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
        <br />
        <br />
        단순하고 진부한 디자인이 아닌 개성있 는 기업의 매출을 극대화하는 디자인
        <br />
        <br />한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
      </Account>
    </Wrap>
  );
}

export default TitleBox;