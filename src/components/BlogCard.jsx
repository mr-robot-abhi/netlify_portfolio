import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled(motion.a)`
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${props => props.theme.glassShadow};
  text-decoration: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  position: relative;
  
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
    z-index: 1;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.text};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid ${props => props.theme.glassBorder};
`;

const Date = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
  color: ${props => props.theme.text};
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

export default function BlogCard({ blog, index }) {
  const { name, tags, date, imgSrc, link } = blog;

  return (
    <CardContainer
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 30px ${props => props.theme.neonGlow}`,
        y: -10
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ImageContainer>
        <BlogImage src={imgSrc} alt={name} />
      </ImageContainer>
      
      <Content>
        <Title>{name}</Title>
        
        <TagsContainer>
          {tags.map((tag, tagIndex) => (
            <Tag key={tagIndex}>#{tag}</Tag>
          ))}
        </TagsContainer>
        
        <Date>{date}</Date>
      </Content>
    </CardContainer>
  );
}