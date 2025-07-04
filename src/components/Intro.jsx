import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 3rem;
  max-width: 600px;
  text-align: center;
  z-index: 1000;
  box-shadow: ${props => props.theme.glassShadow};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
  opacity: 0.9;
`;

export default function Intro() {
  return (
    <IntroContainer
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Title>Hi, mr-robot-abhi here!</Title>
      <Description>
        I am a Full-Stack Developer. I design and code simple yet powerful applications 
        that bring ideas to life in the digital world.
      </Description>
    </IntroContainer>
  );
}