import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 25px;
  padding: 4rem;
  max-width: 700px;
  text-align: center;
  z-index: 1000;
  box-shadow: ${props => props.theme.glassShadow};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${props => props.theme.primary}20, 
      ${props => props.theme.secondary}20
    );
    opacity: 0.5;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.neonGlow};
  box-shadow: 
    0 0 20px ${props => props.theme.neonGlow},
    0 0 40px ${props => props.theme.neonGlow};
  margin-bottom: 2rem;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  opacity: 0.9;
  position: relative;
  z-index: 2;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 3;
  
  &:hover {
    background: ${props => props.theme.neonGlow};
    color: ${props => props.theme.body};
  }
`;

export default function Intro({ onClose }) {
  return (
    <IntroContainer
      initial={{ scale: 0, opacity: 0, rotateY: 180 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0, opacity: 0, rotateY: -180 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <CloseButton
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ×
      </CloseButton>
      
      <ProfileImage
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="mr-robot-abhi"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      />
      
      <Title
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Hi, mr-robot-abhi here!
      </Title>
      
      <Description
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I am a Full-Stack Developer passionate about creating innovative digital solutions. 
        I design and code simple yet powerful applications that bring ideas to life in the digital world.
        Let's build something amazing together! 🚀
      </Description>
    </IntroContainer>
  );
}