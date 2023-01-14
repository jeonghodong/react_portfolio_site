import styled from "styled-components";
import { ContactData } from "../Data/IntroData";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  background-color: blue;
  padding: 2rem;
  color: white;
`;
const Icon = styled.span`
  display: inline-block;
  font-size: 1.3vw;
  margin: 0.8rem 1.5rem 0 0;
`;
const Text = styled.span`
  font-size: 1vw;
`;

function ContactBox() {
  return (
    <Wrap>
      {ContactData.map((v) => (
        <div key={v.id}>
          <Icon>{v.icon}</Icon>
          <Text>{v.value}</Text>
        </div>
      ))}
    </Wrap>
  );
}

export default ContactBox;
