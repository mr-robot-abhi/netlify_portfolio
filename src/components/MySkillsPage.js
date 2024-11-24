import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import { motion } from 'framer-motion';
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, DiPython, DiAws } from 'react-icons/di';
import { SiTypescript, SiRedux, SiFirebase, SiMongodb, SiNextdotjs, SiVuedotjs, SiReact, SiExpo, SiAndroidstudio } from 'react-icons/si';
import { SiRuby, SiJava, SiPhp, SiRust, SiAngular, SiPostgresql, SiMysql, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';

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
  height: auto; /* Adjusted height to auto */
`;

const CodeText = styled.span`
  color: #333;
  white-space: pre-wrap;
`;

const IconGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Ensure full width for columns */
  margin-top: 2rem;
`;

const IconColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; /* Adjusted padding */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 18%; /* Adjusted width for five columns */
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

const IconLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text};
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 0.5rem; /* Adjusted margin */
`;

const MySkillsPage = () => {
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    const code = `
import mr-robot-abhi from 'github';
import {List of Tech Stack Used} from '2012';
...
...
export full-stack-dev
`;
    let i = 0;
    const interval = setInterval(() => {
      setCodeText(code.substring(0, i));
      i +=1;
      if (i > code.length) {
        clearInterval(interval);
      }
    }, 50);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme = 'light'/>
        <CodeBlock>
          <CodeText>{codeText}</CodeText>
        </CodeBlock>
        
        <IconGrid>
          <IconColumn>
            <h2>Languages</h2>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.javascript.com/" target="_blank">
                <Icon><DiJavascript /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.typescriptlang.org/" target="_blank">
                <Icon><SiTypescript /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.python.org/" target="_blank">
                <Icon><DiPython /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.ruby-lang.org/en/" target="_blank">
                <Icon><SiRuby /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.php.net/" target="_blank">
                <Icon><SiPhp /></Icon>
              </IconLink>
            </IconItem>
          </IconColumn>

          <IconColumn>
            <h2>Frameworks</h2>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://reactjs.org/" target="_blank">
                <Icon><DiReact /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://angular.io/" target="_blank">
                <Icon><SiAngular /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://vuejs.org/" target="_blank">
                <Icon><SiVuedotjs /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://nextjs.org/" target="_blank">
                <Icon><SiNextdotjs /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://redux.js.org/" target="_blank">
                <Icon><SiRedux /></Icon>
              </IconLink>
            </IconItem>
          </IconColumn>

          <IconColumn>
            <h2>Databases</h2>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.mongodb.com/" target="_blank">
                <Icon><SiMongodb /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.postgresql.org/" target="_blank">
                <Icon><SiPostgresql /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.mysql.com/" target="_blank">
                <Icon><SiMysql /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://firebase.google.com/" target="_blank">
                <Icon><SiFirebase /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.microsoft.com/en-us/sql-server/sql-server-2019" target="_blank">
                <Icon><SiMicrosoftazure /></Icon>
              </IconLink>
            </IconItem>
          </IconColumn>

          <IconColumn>
            <h2>Cloud</h2>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://aws.amazon.com/" target="_blank">
                <Icon><DiAws /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://cloud.google.com/" target="_blank">
                <Icon><SiGooglecloud /></Icon>
              </IconLink>
            </IconItem>
          </IconColumn>

          <IconColumn>
            <h2>Tools</h2>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://code.visualstudio.com/" target="_blank">
                <Icon><SiVuedotjs /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://expo.dev/" target="_blank">
                <Icon><SiExpo /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://developer.android.com/studio" target="_blank">
                <Icon><SiAndroidstudio /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.w3.org/TR/html52/" target="_blank">
                <Icon><DiHtml5 /></Icon>
              </IconLink>
            </IconItem>
            <IconItem animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <IconLink href="https://www.w3.org/Style/CSS/" target="_blank">
                <Icon><DiCss3 /></Icon>
              </IconLink>
            </IconItem>
          </IconColumn>
        </IconGrid>
      
      </Container>
    </ThemeProvider>
  );
};

export default MySkillsPage;
