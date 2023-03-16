import React from 'react'
import styled, { keyframes } from 'styled-components';


const inOut = keyframes`
  0%{
      left:-60px;
      color:white;

  }
  50%{
      left:-50px;
      color:black;
}
  100%{
      left:-60px;
      color:white;
}
`;
const inOut2 = keyframes`
  0%{
      left:-140px;
      color:white;

  }
  50%{
      left:-130px;
      color:black;
}
  100%{
      left:-140px;
      color:white;
}
`;
const Wrap = styled.div`
  display:flex;
`;
const Arrow = styled.i`
  color:black;
  position:absolute;
  font-size:2.5rem;
  left:-50px;
  bottom:20px ;
  animation: ${inOut} 1.5s ease-in-out infinite;
`;
const Text = styled.i`
  color:black;
  position:absolute;
  font-size:1.2rem;
  bottom:32px;
  animation: ${inOut2} 1.5s ease-in-out infinite;
`;

function LinkArrow() {
  return (
    <Wrap>
      <Text>Go Link</Text>
      <Arrow className="fa-solid fa-arrow-right"> </Arrow>
    </Wrap>
  )
}

export default LinkArrow
