import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const items = [
  {
    id: 1,
    title: "Project 1",
    desc: "lorem asda asdad",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Project 2",
    desc: "lorem asda asdad",
    img: "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Project 3",
    desc: "lorem asda asdad",
    img: "https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Project 4",
    desc: "lorem asda asdad",
    img: "https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const SingleSection = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  overflow: hidden;
`;

const PortfolioWrapper = styled.div`
  position: relative;
`;

const Progress = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding-top: 50px;
  text-align: center;
  color: orange;
  font-size: 36px;

  @media (max-width: 768px) {
    padding-top: calc(100vh - 100px);
    font-size: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  max-width: 1366px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: white;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 50%;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    transform: none !important;
    padding: 10px;
    align-items: center;
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 72px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Desc = styled.p`
  color: gray;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: orange;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
`;

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <SingleSection ref={ref}>
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={item.img} alt="Portfolio image" />
          </ImageContainer>
          <TextContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Heading>{item.title}</Heading>
            <Desc>{item.desc}</Desc>
            <Button>See Demo</Button>
          </TextContainer>
        </Wrapper>
      </Container>
    </SingleSection>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <PortfolioWrapper ref={ref}>
      <Progress>
        <h1>Featured Works</h1>
        {/* <ProgressBar as={motion.div} style={{ scaleX }} /> */}
      </Progress>
      <AnimatePresence>
        {items.map((item) => (
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Single item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </PortfolioWrapper>
  );
};

export default Portfolio;