import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { PowerBtn } from './AllSvgs';

const Power = styled(motion.button)`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  color: ${props => props.theme.text};
  
  &:hover {
    box-shadow: 0 0 30px ${props => props.theme.neonGlow};
    transform: translateY(-50%) scale(1.1);
  }
`;

export default function PowerButton() {
  return (
    <Power
      as={NavLink}
      to="/"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <PowerBtn width={30} height={30} fill="currentColor" />
    </Power>
  );
}