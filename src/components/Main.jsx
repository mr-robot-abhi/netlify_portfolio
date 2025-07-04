import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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

const HeroSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 4rem;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.neonGlow};
  box-shadow: 
    0 0 30px ${props => props.theme.neonGlow},
    0 0 60px ${props => props.theme.neonGlow},
    0 0 90px ${props => props.theme.neonGlow};
  margin-bottom: 2rem;
  object-fit: cover;
  filter: brightness(1.1) contrast(1.2);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b);
  background-size: 400% 400%;
  animation: holographic 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${props => props.theme.neonGlow};
  
  @keyframes holographic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const NavigationGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  width: 70%;
  height: 50%;
  max-width: 900px;
  max-height: 500px;
`;

const NavCard = styled(motion.div)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 25px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.text};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${props => props.theme.glassShadow};
  
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &::after {
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const NavIcon = styled(motion.div)`
  font-size: 3rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const NavTitle = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
`;

const NavDescription = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  opacity: 0.8;
  position: relative;
  z-index: 2;
`;

const Contact = styled(motion.a)`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.text};
  text-decoration: none;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: ${props => props.theme.glassShadow};
  
  &:hover {
    box-shadow: 0 0 30px ${props => props.theme.neonGlow};
    transform: translateX(-50%) translateY(-5px) scale(1.05);
    border-color: ${props => props.theme.neonGlow};
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(2px);
`;

const navItems = [
  {
    path: '/about',
    title: 'About',
    description: 'Discover my journey and passion',
    icon: '👨‍💻'
  },
  {
    path: '/skills',
    title: 'Skills',
    description: 'Explore my technical arsenal',
    icon: '⚡'
  },
  {
    path: '/work',
    title: 'Work',
    description: 'Browse my latest creations',
    icon: '🚀'
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Read my thoughts & tutorials',
    icon: '📝'
  }
];

export default function Main() {
  const [click, setClick] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingShapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`
  }));

  return (
    <MainContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ThreeBackground />
      
      <FloatingElements>
        {floatingShapes.map((shape) => (
          <FloatingShape
            key={shape.id}
            size={shape.size}
            color={shape.color}
            style={{
              left: shape.x,
              top: shape.y,
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </FloatingElements>
      
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
        
        <Contact 
          href="https://topmate.io/abhishek_math" 
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔥 Hire Me - Let's Build Something Amazing! 🔥
        </Contact>

        <HeroSection variants={itemVariants}>
          <ProfileImage
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="mr-robot-abhi"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              delay: 0.5,
              duration: 1.2 
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: `0 0 50px currentColor`,
              rotate: 5
            }}
          />
          
          <HeroTitle
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            mr-robot-abhi
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Full-Stack Developer & Digital Architect
            <br />
            Crafting the future, one line of code at a time
          </HeroSubtitle>
        </HeroSection>

        <NavigationGrid variants={containerVariants}>
          {navItems.map((item, index) => (
            <NavCard
              key={item.path}
              as={NavLink}
              to={item.path}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                boxShadow: `0 0 40px ${props => props.theme.neonGlow}`,
                y: -15,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`
              }}
            >
              <NavIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 1.2, type: "spring" }}
              >
                {item.icon}
              </NavIcon>
              <NavTitle>{item.title}</NavTitle>
              <NavDescription>{item.description}</NavDescription>
            </NavCard>
          ))}
        </NavigationGrid>
      </Container>

      <AnimatePresence>
        {click && <Intro onClose={() => setClick(false)} />}
      </AnimatePresence>
    </MainContainer>
  );
}