import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

`;

const Title = styled.h1`
  font-size: 74px;
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;


const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/*3d model*/}
        </Left>
        <Right>
          <Title>Grant Hanrahan</Title>
          <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing eli.</Desc>
        </Right>
      </Container>
    </Section>
  )
  
}

export default Who