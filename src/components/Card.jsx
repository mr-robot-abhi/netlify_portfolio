import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Github } from './AllSvgs';

const CardContainer = styled(motion.div)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: ${props => props.theme.glassShadow};
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

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.text};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid ${props => props.theme.glassBorder};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  background: ${props => props.theme.neonGlow};
  color: ${props => props.theme.body};
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px ${props => props.theme.neonGlow};
    transform: translateY(-2px);
  }
`;

const GitHubLink = styled.a`
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.neonGlow};
    transform: scale(1.2);
  }
`;

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Card({ data, index }) {
  const { name, description, tags, demo, github } = data;

  return (
    <CardContainer
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 30px ${props => props.theme.neonGlow}`,
        y: -10
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Title>{name}</Title>
      <Description>{description}</Description>
      
      <TagsContainer>
        {tags.map((tag, tagIndex) => (
          <Tag key={tagIndex}>#{tag}</Tag>
        ))}
      </TagsContainer>
      
      <Footer>
        <Link href={demo} target="_blank" rel="noopener noreferrer">
          View Project
        </Link>
        <GitHubLink href={github} target="_blank" rel="noopener noreferrer">
          <Github width={30} height={30} fill="currentColor" />
        </GitHubLink>
      </Footer>
    </CardContainer>
  );
}