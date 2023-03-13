/* eslint-disable no-shadow */
/* eslint-disable func-names */
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import HeaderData from "../Data/HeaderData";
import openBg from "../Functions/openBg";
import theme from "../styles/theme";

const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background: inherit;
  font-size: 1vw;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.5vw;
  padding: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  & li {
    margin-left: 2rem;
    &:nth-child(1) {
      margin: 0;
    }
  }
`;

const Wrap = styled.div`
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    ${Logo} {
      display: none;
    }
    ${Button} {
      padding: 1rem 0 1rem 0;
      font-size: 11px;
    }
  }
  font-family: "Poppins", sans-serif;
  background-color: #0000c5;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 0 5vw 0 5vw;
  z-index: 2;
  transition:1s;
  &.hide {
        transform: translateY(-80px);
        transition:1s;
    }
`;

const Header = forwardRef(({ onClick }, buttonBg) => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this, e);
        timerId = null;
      }, waitTime);
    };
  };
  useLayoutEffect(() => {
    openBg(buttonBg);
  }, []);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    <ThemeProvider theme={theme}>
      <Wrap className={hide && 'hide'} ref={buttonBg}>
        <Logo>HODONG</Logo>
        <Ul>
          {HeaderData.map((v) => (
            <li key={v.id}>
              <Button
                type="button"
                onClick={() => {
                  onClick(v.name);
                }}
              >
                {v.name}
              </Button>
            </li>
          ))}
        </Ul>
      </Wrap>
    </ThemeProvider>
  );
});

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
