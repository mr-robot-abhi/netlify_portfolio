import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThreeBackground from './ThreeBackground';
import LogoComponent from './LogoComponent';
import SocialIcons from './SocialIcons';
import PowerButton from './PowerButton';
import Intro from './Intro';

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  width: 60%;
  height: 60%;
  max-width: 800px;
  max-height: 600px;
`;

const NavCard = styled(motion.div)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.text};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const NavTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  opacity: 0.8;
`;

const CenterLogo = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5);
  background-size: 400% 400%;
  animation: holographic 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${props => props.theme.neonGlow};
  z-index: 0;
`;

const Contact = styled.a`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.text};
  text-decoration: none;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 15px;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    box-shadow: 0 0 20px ${props => props.theme.neonGlow};
    transform: translateX(-50%) translateY(-5px);
  }
`;

const navItems = [
  {
    path: '/about',
    title: 'About',
    description: 'Learn about my journey and experience'
  },
  {
    path: '/skills',
    title: 'Skills',
    description: 'Explore my technical expertise'
  },
  {
    path: '/work',
    title: 'Work',
    description: 'Check out my latest projects'
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Read my thoughts and tutorials'
  }
];

export default function Main() {
  const [click, setClick] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <MainContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ThreeBackground />
      
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
        
        <Contact 
          href="https://topmate.io/abhishek_math" 
          target="_blank"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me 🚀
          </motion.span>
        </Contact>

        <CenterLogo
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.5,
            duration: 1 
          }}
        >
          ABHI
        </CenterLogo>

        <NavigationGrid>
          {navItems.map((item, index) => (
            <NavCard
              key={item.path}
              as={NavLink}
              to={item.path}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 30px ${props => props.theme.neonGlow}`,
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
            >
              <NavTitle>{item.title}</NavTitle>
              <NavDescription>{item.description}</NavDescription>
            </NavCard>
          ))}
        </NavigationGrid>
      </Container>

      {click && <Intro />}
    </MainContainer>
  );
}