import styled from "styled-components";

const Wrap = styled.div`
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cover = styled.p`
  padding: 50px 0 20px 0;
`;
const Name = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;
const Account = styled.span`
  text-align: center;
  word-break: break-all;
  width: 60%;
  font-weight: 300;
`;
const Line = styled.div`
  background-color: black;
  width: 3vw;
  height: 4px;
  margin: 60px 0 60px 0;
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
        <br />
        한 가지 색이 아닌 다양한 색을 가진 디자이너가 되고자 합니다.
        <br />
        <br />
        니즈를 파악하여 주제에 맞는 디자인을 하는 것 어떠한 사용자 편리하고 보기 좋은 디자인을 하는 것
      </Account>
    </Wrap>
  );
}

export default TitleBox;
