import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`

const AnimatedText = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  animation: ${fadeIn} 2s ease;
`

// Styled container for the GitHub chart card
const GitHubChartCard = styled.div`
  position: absolute;
  top: calc(15rem + 15vw);  // Placed below the text
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.cardBackground || '#333'};
  padding: 3px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 700px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateX(-50%) scale(1.03);
  }
`

// Styled title for the chart
const ChartTitle = styled.h2`
  color: ${(props) => props.theme.text};
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <AnimatedText>
        I am a passionate and skilled programmer with extensive experience in full-stack development. <br /> 
        Currently, I work as a Freelance Developer and Mentor, <><br /></>specializing in creating web and cross-platform mobile applications. <br /> 
        I use a variety of technologies, including React Native, React.js,<><br /></> Python, TypeScript, JavaScript and others as mentioned in my skills page. <br /> 
        I'm always open to collaboration with fellow freelance developers and eager to build innovative solutions for my clients.
        </AnimatedText>

        <BigTitle text="ABOUT" top="5%" left="5%" />

        {/* GitHub chart card with title */}
        <GitHubChartCard>
          <ChartTitle>mr-robot-abhi's Github Contributions (2024)</ChartTitle>
          <img src="https://ghchart.rshah.org/mr-robot-abhi" alt="mr-robot-abhi's Github chart" />
        </GitHubChartCard>
      
      </Box>
    </ThemeProvider>
  )
}

export default AboutPage
