import styled from 'styled-components';
import { motion } from 'framer-motion';

const Logo = styled(motion.h1)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 10;
  font-family: 'Orbitron', monospace;
  font-weight: 900;
  font-size: 2rem;
  background: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px ${props => props.theme.neonGlow};
  cursor: pointer;
`;

export default function LogoComponent() {
  return (
    <Logo
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ 
        scale: 1.1,
        textShadow: `0 0 30px ${props => props.theme.neonGlow}`
      }}
    >
      mr-robot-abhi
    </Logo>
  );
}