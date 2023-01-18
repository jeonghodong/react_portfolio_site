import { forwardRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContactData } from "../Data/IntroData";
import theme from "../styles/theme";

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

const ContactUl = styled.ul``;
const ContactLi = styled.ul``;
const Wrap = styled.div`
  @media ${(props) => props.theme.mobile} {
    ${TitleText} {
      font-size: 22px;
    }
    ${ContactLi} {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      margin-bottom: 1.4rem;
    }
    ${Text} {
      font-size: 14px;
    }
    ${Icon} {
      font-size: 12px;
    }
  }
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 4rem 4rem;
  margin-top: 5rem;
  background-color: rgb(240 240 240);
  font-family: "Poppins", sans-serif;
`;
const FooterLine = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    border-radius: 0;
    height: 50px;
    font-size: 10px;
  }
  background-color: #5353c2;
  width: 99vw;
  border-radius: 1rem;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  color: white;
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.44);
`;

const ContactBox = forwardRef((_, contact) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap ref={contact}>
        <TitleText>Contact Channel</TitleText>
        {ContactData.map((v) => (
          <ContactUl key={v.id}>
            <ContactLi>
              <Icon>{v.icon}</Icon>
              <Text>{v.value}</Text>
            </ContactLi>
          </ContactUl>
        ))}
      </Wrap>
      <FooterLine>2023 Copyright Hodong All right reserved.</FooterLine>
    </ThemeProvider>
  );
});

export default ContactBox;
