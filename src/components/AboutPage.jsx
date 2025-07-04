import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';
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

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin-top: 4rem;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 25px;
  padding: 3rem;
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
`;

const ProfileSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.neonGlow};
  box-shadow: 
    0 0 30px ${props => props.theme.neonGlow},
    0 0 60px ${props => props.theme.neonGlow},
    0 0 90px ${props => props.theme.neonGlow};
  object-fit: cover;
  filter: brightness(1.1) contrast(1.2);
`;

const ThreeContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 25px;
  overflow: hidden;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  box-shadow: ${props => props.theme.glassShadow};
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: ${props => props.theme.text};
  opacity: 0.9;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const GitHubSection = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(30px);
  border: 2px solid ${props => props.theme.glassBorder};
  border-radius: 25px;
  padding: 3rem;
  text-align: center;
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
`;

const ChartTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
  position: relative;
  z-index: 2;
`;

const ChartImage = styled.img`
  width: 100%;
  border-radius: 15px;
  filter: drop-shadow(0 0 20px ${props => props.theme.neonGlow});
  position: relative;
  z-index: 2;
`;

function FloatingAstronaut() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Center>
        <group>
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <MeshDistortMaterial 
              color="#00ffff" 
              distort={0.5} 
              speed={2} 
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.3}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            position={[-1, -2, 0]}
          >
            DEVELOPER
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
          </Text3D>
        </group>
      </Center>
    </Float>
  );
}

export default function AboutPage() {
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
        <HeroSection>
          <TextContent
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Title>About Me</Title>
            <Description>
              I am a passionate and skilled programmer with extensive experience in full-stack development.
            </Description>
            <Description>
              Currently, I work as a Freelance Developer and Mentor, specializing in creating web and cross-platform mobile applications.
            </Description>
            <Description>
              I use a variety of technologies, including React Native, React.js, Python, TypeScript, JavaScript and others as mentioned in my skills page.
            </Description>
            <Description>
              I'm always open to collaboration with fellow freelance developers and eager to build innovative solutions for my clients.
            </Description>
          </TextContent>

          <ProfileSection
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ProfileImage
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="mr-robot-abhi"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: `0 0 50px currentColor`
              }}
            />
            
            <ThreeContainer>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <FloatingAstronaut />
                  <OrbitControls enableZoom={false} />
                </Suspense>
              </Canvas>
            </ThreeContainer>
          </ProfileSection>
        </HeroSection>

        <GitHubSection
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <ChartTitle>GitHub Contributions (2024)</ChartTitle>
          <ChartImage 
            src="https://ghchart.rshah.org/mr-robot-abhi" 
            alt="mr-robot-abhi's Github chart" 
          />
        </GitHubSection>
      </ContentWrapper>
    </Container>
  );
}