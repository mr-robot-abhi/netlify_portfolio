import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import ThreeBackground from './ThreeBackground';
import LogoComponent from './LogoComponent';
import SocialIcons from './SocialIcons';
import PowerButton from './PowerButton';
import { Blogs } from '../data/BlogData';
import BlogCard from './BlogCard';

const Container = styled(motion.div)`
  background: ${props => props.theme.body};
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
`;

const ThreeContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  margin: 2rem auto;
  max-width: 800px;
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 4rem;
  text-align: center;
  margin: 2rem 0;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px ${props => props.theme.neonGlow};
`;

function FloatingBlogText() {
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
          BLOG
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} />
        </Text3D>
      </Center>
    </Float>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function BlogPage() {
  return (
    <Container
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <ThreeBackground />
      <LogoComponent />
      <SocialIcons />
      <PowerButton />

      <ContentWrapper>
        <SectionTitle
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Blog
        </SectionTitle>

        <ThreeContainer>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingBlogText />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </ThreeContainer>

        <BlogGrid variants={containerVariants}>
          {Blogs.map((blog, index) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              index={index}
            />
          ))}
        </BlogGrid>
      </ContentWrapper>
    </Container>
  );
}