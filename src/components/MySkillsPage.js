import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import { motion } from 'framer-motion';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, DiPython, DiAws } from 'react-icons/di';
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiNextdotjs, SiVuedotjs, SiExpo, SiAndroidstudio, SiGooglecloud,  } from 'react-icons/si';
import { SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiVisualstudiocode } from 'react-icons/si';


const Container = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const CodeBlock = styled.div`
  background-color: #f7f7f7;
  padding: 1rem;
  border-radius: 12px;
  width: 50%;
  margin: 2rem auto;
  font-family: monospace;
  font-size: 1.2rem;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CodeText = styled.span`
  color: #333;
  white-space: pre-wrap;
`;

const IconGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const IconColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 18%;
`;

const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
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
`;

const Icon = styled.div`
  font-size: 36px;
`;

const MySkillsPage = () => {
  const [codeText, setCodeText] = useState('');

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

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <CodeBlock>
          <CodeText>{codeText}</CodeText>
        </CodeBlock>
        <IconGrid>
  {/* Languages */}
          <IconColumn>
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
          <IconColumn>
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
              <IconLink href="https://nextjs.org/" target="_blank">
                <Icon><SiNextdotjs /></Icon>
                <IconLabel>Next.js</IconLabel>
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
          <IconColumn>
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
          <IconColumn>
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
          <IconColumn>
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

                  
      </Container>
    </ThemeProvider>
  );
};

export default MySkillsPage;
