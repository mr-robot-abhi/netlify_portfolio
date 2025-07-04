import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, DiPython, DiAws } from 'react-icons/di';
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiNextdotjs, SiVuedotjs, SiExpo, SiAndroidstudio, SiGooglecloud } from 'react-icons/si';
import { SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiVisualstudiocode } from 'react-icons/si';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Center, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import ThreeBackground from './ThreeBackground';
import LogoComponent from './LogoComponent';
import SocialIcons from './SocialIcons';
import PowerButton from './PowerButton';

const Container = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
`;

const CodeBlock = styled(motion.div)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  padding: 3rem;
  border-radius: 25px;
  width: 80%;
  max-width: 900px;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.2rem;
  box-shadow: ${props => props.theme.glassShadow};
  color: ${props => props.theme.text};
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
      ${props => props.theme.primary}10, 
      ${props => props.theme.secondary}10
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CodeText = styled.span`
  color: ${props => props.theme.text};
  white-space: pre-wrap;
  position: relative;
  z-index: 2;
`;

const SkillsTitle = styled(motion.h1)`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${props => props.theme.neonGlow};
`;

const IconGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin-top: 2rem;
`;

const IconColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 25px;
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
      ${props => props.theme.primary}10, 
      ${props => props.theme.secondary}10
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
    background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1.2rem;
  margin: 0.5rem 0;
  border-radius: 20px;
  transition: all 0.3s ease;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.theme.glassBorder};
  position: relative;
  z-index: 2;
  
  &:hover {
    background: ${props => props.theme.glassBackground};
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 10px 30px ${props => props.theme.neonGlow}40;
  }
`;

const IconLabel = styled.span`
  margin-top: 0.8rem;
  font-size: 1rem;
  color: ${props => props.theme.text};
  text-align: center;
  font-weight: 600;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  font-size: 48px;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  
  ${IconItem}:hover & {
    color: ${props => props.theme.neonGlow};
    filter: drop-shadow(0 0 10px ${props => props.theme.neonGlow});
  }
`;

// 3D Floating Skills Orbs
function FloatingSkillsOrb({ position, color, text }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef} position={position}>
        <Sphere args={[0.5, 32, 32]}>
          <MeshDistortMaterial 
            color={color} 
            distort={0.3} 
            speed={2} 
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.1}
          height={0.02}
          position={[-0.3, -0.8, 0]}
        >
          {text}
          <meshStandardMaterial color={color} />
        </Text3D>
      </group>
    </Float>
  );
}

// 3D Scene Component
const SkillsScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <FloatingSkillsOrb position={[-3, 2, 0]} color="#61dafb" text="REACT" />
      <FloatingSkillsOrb position={[3, 1, -2]} color="#f7df1e" text="JS" />
      <FloatingSkillsOrb position={[0, -2, 1]} color="#3776ab" text="PYTHON" />
      <FloatingSkillsOrb position={[-2, -1, -3]} color="#68217a" text="CSS" />
      <FloatingSkillsOrb position={[2, 3, 2]} color="#339933" text="NODE" />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const ThreeContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 25px;
  overflow: hidden;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: ${props => props.theme.glassShadow};
`;

const MySkillsPage = () => {
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    const code = `
// Importing the legend himself 🤖
import { mrRobotAbhi } from 'github';

// Tech stack arsenal since 2012 ⚡
import {
  React, TypeScript, Python, Node, AWS,
  MongoDB, PostgreSQL, Firebase, Redux,
  NextJS, VueJS, Docker, Kubernetes
} from 'tech-stack';

// Crafting scalable solutions, pixel-perfect UIs & secure APIs 🚀
const fullStackDeveloper = {
  alias: 'mrRobotAbhi',
  expertise: ['Frontend Wizardry', 'Backend Engineering', 'Cloud Integration'],
  passion: 'Building digital experiences that inspire.',
  availableFor: ['Freelance', 'Collaborations', 'Open Source'],
  motto: 'Code is poetry, bugs are just plot twists! 🎭'
};

export default fullStackDeveloper;
`;
    let i = 0;
    const interval = setInterval(() => {
      setCodeText(code.substring(0, i));
      i += 1;
      if (i > code.length) {
        clearInterval(interval);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ThreeBackground />
      <LogoComponent />
      <SocialIcons />
      <PowerButton />

      <ContentWrapper>
        <SkillsTitle
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Skills
        </SkillsTitle>

        <CodeBlock
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <CodeText>{codeText}</CodeText>
        </CodeBlock>

        <ThreeContainer>
          <Canvas camera={{ position: [0, 0, 8] }}>
            <Suspense fallback={null}>
              <SkillsScene />
            </Suspense>
          </Canvas>
        </ThreeContainer>

        <IconGrid variants={containerVariants}>
          {/* Languages */}
          <IconColumn
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h2>Languages</h2>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.javascript.com/" target="_blank">
                <Icon><DiJavascript /></Icon>
                <IconLabel>JavaScript</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.typescriptlang.org/" target="_blank">
                <Icon><SiTypescript /></Icon>
                <IconLabel>TypeScript</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.python.org/" target="_blank">
                <Icon><DiPython /></Icon>
                <IconLabel>Python</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://nodejs.org/" target="_blank">
                <Icon><DiNodejs /></Icon>
                <IconLabel>Node.js</IconLabel>
              </IconLink>
            </IconItem>
          </IconColumn>

          {/* Frameworks */}
          <IconColumn
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h2>Frameworks</h2>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://reactjs.org/" target="_blank">
                <Icon><DiReact /></Icon>
                <IconLabel>React</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://nextjs.org/" target="_blank">
                <Icon><SiNextdotjs /></Icon>
                <IconLabel>Next.js</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://vuejs.org/" target="_blank">
                <Icon><SiVuedotjs /></Icon>
                <IconLabel>Vue.js</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://redux.js.org/" target="_blank">
                <Icon><SiRedux /></Icon>
                <IconLabel>Redux</IconLabel>
              </IconLink>
            </IconItem>
          </IconColumn>

          {/* Databases */}
          <IconColumn
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h2>Databases</h2>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.mongodb.com/" target="_blank">
                <Icon><SiMongodb /></Icon>
                <IconLabel>MongoDB</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.postgresql.org/" target="_blank">
                <Icon><SiPostgresql /></Icon>
                <IconLabel>PostgreSQL</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://www.mysql.com/" target="_blank">
                <Icon><SiMysql /></Icon>
                <IconLabel>MySQL</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://firebase.google.com/" target="_blank">
                <Icon><SiFirebase /></Icon>
                <IconLabel>Firebase</IconLabel>
              </IconLink>
            </IconItem>
          </IconColumn>

          {/* Cloud & Tools */}
          <IconColumn
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h2>Cloud & Tools</h2>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://aws.amazon.com/" target="_blank">
                <Icon><DiAws /></Icon>
                <IconLabel>AWS</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://cloud.google.com/" target="_blank">
                <Icon><SiGooglecloud /></Icon>
                <IconLabel>Google Cloud</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://code.visualstudio.com/" target="_blank">
                <Icon><SiVisualstudiocode /></Icon>
                <IconLabel>VS Code</IconLabel>
              </IconLink>
            </IconItem>
            <IconItem whileHover={{ scale: 1.1 }}>
              <IconLink href="https://expo.dev/" target="_blank">
                <Icon><SiExpo /></Icon>
                <IconLabel>Expo</IconLabel>
              </IconLink>
            </IconItem>
          </IconColumn>
        </IconGrid>
      </ContentWrapper>
    </Container>
  );
};

export default MySkillsPage;