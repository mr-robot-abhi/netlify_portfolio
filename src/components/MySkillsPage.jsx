import React, { useState, useEffect, Suspense } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, DarkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import { motion } from 'framer-motion';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, DiPython, DiAws } from 'react-icons/di';
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiNextdotjs, SiVuedotjs, SiExpo, SiAndroidstudio, SiGooglecloud } from 'react-icons/si';
import { SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiVisualstudiocode } from 'react-icons/si';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import ThemeToggle from '../subComponents/ThemeToggle';

const Container = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CodeBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 20px;
  width: 60%;
  margin: 2rem auto;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.text};
`;

const CodeText = styled.span`
  color: ${props => props.theme.text};
  white-space: pre-wrap;
`;

const IconGrid = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 2rem;
  gap: 1rem;
`;

const IconColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  width: 18%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 15px;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const IconLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  text-align: center;
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
  font-size: 36px;
  color: ${props => props.theme.text};
`;

// 3D Text Component
const FloatingSkillsText = () => {
  return (
    <Suspense fallback={null}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0, 2, 0]}
        >
          SKILLS
          <meshStandardMaterial color="#ff6b6b" />
        </Text3D>
      </Center>
    </Suspense>
  );
};

// 3D Scene Component
const SkillsScene = ({ isDark }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingSkillsText />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const MySkillsPage = () => {
  const [codeText, setCodeText] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const code = `
// Importing the legend himself 🤖
import { mrRobotAbhi } from 'github';

// Tech stack arsenal since 2012 ⚡
import {
 ...
} from 'tech-stack';
// Crafting scalable solutions, pixel-perfect UIs & secure APIs 🚀
const fullStackDeveloper = {
  alias: 'mrRobotAbhi',
  expertise: ['Frontend Wizardry', 'Backend Engineering', 'Cloud Integration'],
  passion: 'Building digital experiences that inspire.',
  availableFor: ['Freelance', 'Collaborations', 'Open Source'],
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
    }, 50);
  }, []);

  const currentTheme = isDark ? DarkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <LogoComponent theme={isDark ? "dark" : "light"} />
        <SocialIcons theme={isDark ? "dark" : "light"} />
        <PowerButton />
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        
        <CanvasWrapper>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <SkillsScene isDark={isDark} />
          </Canvas>
        </CanvasWrapper>

        <ContentWrapper>
          <CodeBlock
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CodeText>{codeText}</CodeText>
          </CodeBlock>

          <IconGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {/* Languages */}
            <IconColumn
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Languages</h2>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.javascript.com/" target="_blank">
                  <Icon><DiJavascript /></Icon>
                  <IconLabel>JavaScript</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.typescriptlang.org/" target="_blank">
                  <Icon><SiTypescript /></Icon>
                  <IconLabel>TypeScript</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.python.org/" target="_blank">
                  <Icon><DiPython /></Icon>
                  <IconLabel>Python</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://nodejs.org/" target="_blank">
                  <Icon><DiNodejs /></Icon>
                  <IconLabel>Node.js</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://reactjs.org/" target="_blank">
                  <Icon><DiReact /></Icon>
                  <IconLabel>React</IconLabel>
                </IconLink>
              </IconItem>
            </IconColumn>

            {/* Frameworks */}
            <IconColumn
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Frameworks</h2>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://reactjs.org/" target="_blank">
                  <Icon><DiReact /></Icon>
                  <IconLabel>React</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://nextjs.org/" target="_blank">
                  <Icon><SiNextdotjs /></Icon>
                  <IconLabel>Next.js</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://vuejs.org/" target="_blank">
                  <Icon><SiVuedotjs /></Icon>
                  <IconLabel>Vue.js</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://redux.js.org/" target="_blank">
                  <Icon><SiRedux /></Icon>
                  <IconLabel>Redux</IconLabel>
                </IconLink>
              </IconItem>
            </IconColumn>

            {/* Databases */}
            <IconColumn
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Databases</h2>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.mongodb.com/" target="_blank">
                  <Icon><SiMongodb /></Icon>
                  <IconLabel>MongoDB</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.postgresql.org/" target="_blank">
                  <Icon><SiPostgresql /></Icon>
                  <IconLabel>PostgreSQL</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.mysql.com/" target="_blank">
                  <Icon><SiMysql /></Icon>
                  <IconLabel>MySQL</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://firebase.google.com/" target="_blank">
                  <Icon><SiFirebase /></Icon>
                  <IconLabel>Firebase</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank">
                  <Icon><SiMicrosoftsqlserver /></Icon>
                  <IconLabel>SQL Server</IconLabel>
                </IconLink>
              </IconItem>
            </IconColumn>

            {/* Cloud */}
            <IconColumn
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Cloud Services</h2>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://aws.amazon.com/" target="_blank">
                  <Icon><DiAws /></Icon>
                  <IconLabel>AWS</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://cloud.google.com/" target="_blank">
                  <Icon><SiGooglecloud /></Icon>
                  <IconLabel>Google Cloud</IconLabel>
                </IconLink>
              </IconItem>
            </IconColumn>

            {/* Tools */}
            <IconColumn
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Tools</h2>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://code.visualstudio.com/" target="_blank">
                  <Icon><SiVisualstudiocode /></Icon>
                  <IconLabel>VS Code</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://expo.dev/" target="_blank">
                  <Icon><SiExpo /></Icon>
                  <IconLabel>Expo</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://developer.android.com/studio" target="_blank">
                  <Icon><SiAndroidstudio /></Icon>
                  <IconLabel>Android Studio</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.w3.org/TR/html52/" target="_blank">
                  <Icon><DiHtml5 /></Icon>
                  <IconLabel>HTML5</IconLabel>
                </IconLink>
              </IconItem>
              <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <IconLink href="https://www.w3.org/Style/CSS/" target="_blank">
                  <Icon><DiCss3 /></Icon>
                  <IconLabel>CSS3</IconLabel>
                </IconLink>
              </IconItem>
            </IconColumn>
          </IconGrid>
        </ContentWrapper>
      </Container>
    </ThemeProvider>
  );
};

export default MySkillsPage;