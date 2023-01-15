import { forwardRef } from "react";
import styled from "styled-components";
import { ContactData } from "../Data/IntroData";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 5rem 5rem;
  background-color: rgb(240 240 240);
  font-family: "Poppins", sans-serif;
`;
const Icon = styled.span`
  display: inline-block;
  font-size: 1.3vw;
  margin: 1rem 1rem;
`;
const Text = styled.span`
  font-size: 1vw;
`;
const TitleText = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  color: #0000c5;
  text-align: center;
  margin-bottom: 5rem;
`;

const ContactBox = forwardRef((_, contact) => {
  return (
    <Wrap ref={contact}>
      <TitleText>Contact & Channel</TitleText>
      {ContactData.map((v) => (
        <div key={v.id}>
          <Icon>{v.icon}</Icon>
          <Text>{v.value}</Text>
        </div>
      ))}
    </Wrap>
  );
});

export default ContactBox;
