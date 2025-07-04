import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { 
  DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, DiPython, DiAws 
} from 'react-icons/di';
import { 
  SiTypescript, SiRedux, SiFirebase, SiMongodb, SiNextdotjs, 
  SiVuedotjs, SiExpo, SiAndroidstudio, SiGooglecloud,
  SiPostgresql, SiMysql, SiMicrosoftsqlserver, SiVisualstudiocode 
} from 'react-icons/si';
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
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const CodeSection = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  margin-top: 4rem;
  box-shadow: ${props => props.theme.glassShadow};
`;

const CodeBlock = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 15px;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1rem;
  color: #00ff00;
  border: 1px solid ${props => props.theme.neonGlow};
  box-shadow: 0 0 20px ${props => props.theme.neonGlow};
  position: relative;
  overflow: hidden;
  
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
      rgba(0, 255, 255, 0.1),
      transparent
    );
    animation: scan 3s infinite;
  }
  
  @keyframes scan {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const CodeText = styled.span`
  white-space: pre-wrap;
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.glassShadow};
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillItem = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  text-decoration: none;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.neonGlow};
    box-shadow: 0 0 20px ${props => props.theme.neonGlow};
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.neonGlow};
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
`;

const ThreeContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
`;

function FloatingSkillsText() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          SKILLS
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.3} />
        </Text3D>
      </Center>
    </Float>
  );
}

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: DiJavascript, url: "https://www.javascript.com/" },
      { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
      { name: "Python", icon: DiPython, url: "https://www.python.org/" },
      { name: "Node.js", icon: DiNodejs, url: "https://nodejs.org/" },
      { name: "HTML5", icon: DiHtml5, url: "https://www.w3.org/TR/html52/" },
      { name: "CSS3", icon: DiCss3, url: "https://www.w3.org/Style/CSS/" }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: DiReact, url: "https://reactjs.org/" },
      { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org/" },
      { name: "Vue.js", icon: SiVuedotjs, url: "https://vuejs.org/" },
      { name: "Redux", icon: SiRedux, url: "https://redux.js.org/" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/" },
      { name: "PostgreSQL", icon: SiPostgresql, url: "https://www.postgresql.org/" },
      { name: "MySQL", icon: SiMysql, url: "https://www.mysql.com/" },
      { name: "Firebase", icon: SiFirebase, url: "https://firebase.google.com/" },
      { name: "SQL Server", icon: SiMicrosoftsqlserver, url: "https://www.microsoft.com/en-us/sql-server/" }
    ]
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: DiAws, url: "https://aws.amazon.com/" },
      { name: "Google Cloud", icon: SiGooglecloud, url: "https://cloud.google.com/" },
      { name: "VS Code", icon: SiVisualstudiocode, url: "https://code.visualstudio.com/" },
      { name: "Expo", icon: SiExpo, url: "https://expo.dev/" },
      { name: "Android Studio", icon: SiAndroidstudio, url: "https://developer.android.com/studio" }
    ]
  }
];

export default function MySkillsPage() {
  const [codeText, setCodeText] = useState('');

  useEffect(() => {
    const code = `// Importing the legend himself 🤖
import { mrRobotAbhi } from 'github';

// Tech stack arsenal since 2012 ⚡
import {
  React, TypeScript, Python, Node,
  AWS, MongoDB, PostgreSQL, Firebase
} from 'tech-stack';

// Crafting scalable solutions, pixel-perfect UIs & secure APIs 🚀
const fullStackDeveloper = {
  alias: 'mrRobotAbhi',
  expertise: ['Frontend Wizardry', 'Backend Engineering', 'Cloud Integration'],
  passion: 'Building digital experiences that inspire.',
  availableFor: ['Freelance', 'Collaborations', 'Open Source'],
  currentFocus: '3D Web Experiences & AI Integration'
};

export default fullStackDeveloper;`;

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

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ThreeBackground />
      <LogoComponent />
      <SocialIcons />
      <PowerButton />

      <ContentWrapper>
        <ThreeContainer>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingSkillsText />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </ThreeContainer>

        <CodeSection
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CodeBlock>
            <CodeText>{codeText}</CodeText>
          </CodeBlock>
        </CodeSection>

        <SkillsGrid>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: categoryIndex * 0.2 + 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.7,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconWrapper>
                      <skill.icon />
                    </IconWrapper>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </div>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </Container>
  );
}