import styled from "styled-components";
import { ContactData } from "../Data/IntroData";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const Icon = styled.span`
  display: inline-block;
  font-size: 1.2vw;
  margin: 0.8rem 1.5rem 0 0;
`;

function ContactBox() {
  return (
    <Wrap>
      {ContactData.map((v) => (
        <div key={v.id}>
          <Icon>{v.icon}</Icon>
          <span>{v.value}</span>
        </div>
      ))}
    </Wrap>
  );
}

export default ContactBox;
