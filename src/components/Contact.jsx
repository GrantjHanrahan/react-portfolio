import React from 'react'
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex; 
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`

`;

const Right = styled.div`
  flex: 1;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Contact Me</Title>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )

}

export default Contact