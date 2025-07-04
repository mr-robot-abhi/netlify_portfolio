import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../App';

const ToggleContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  cursor: pointer;
`;

const ToggleButton = styled(motion.div)`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  display: flex;
  align-items: center;
  padding: 3px;
  position: relative;
  box-shadow: ${props => props.theme.glassShadow};
`;

const ToggleCircle = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.theme.neonGlow};
  box-shadow: 0 0 10px ${props => props.theme.neonGlow};
`;

const Icon = styled.div`
  position: absolute;
  font-size: 12px;
  color: ${props => props.theme.text};
  ${props => props.left ? 'left: 6px;' : 'right: 6px;'}
`;

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleContainer
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
    >
      <ToggleButton>
        <Icon left={!isDark}>☀️</Icon>
        <Icon left={isDark}>🌙</Icon>
        <ToggleCircle
          animate={{
            x: isDark ? 0 : 30
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
        />
      </ToggleButton>
    </ToggleContainer>
  );
}