import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    overflow-x: hidden;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    cursor: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
  }

  .glass {
    background: ${props => props.theme.glassBackground};
    backdrop-filter: blur(20px);
    border: 1px solid ${props => props.theme.glassBorder};
    border-radius: 20px;
    box-shadow: ${props => props.theme.glassShadow};
  }

  .neon-text {
    text-shadow: 
      0 0 5px ${props => props.theme.neonGlow},
      0 0 10px ${props => props.theme.neonGlow},
      0 0 15px ${props => props.theme.neonGlow},
      0 0 20px ${props => props.theme.neonGlow};
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .glow {
    box-shadow: 
      0 0 20px ${props => props.theme.neonGlow},
      0 0 40px ${props => props.theme.neonGlow},
      0 0 60px ${props => props.theme.neonGlow};
  }

  .holographic {
    background: linear-gradient(
      45deg,
      #ff006e,
      #8338ec,
      #3a86ff,
      #06ffa5,
      #ffbe0b,
      #fb5607
    );
    background-size: 400% 400%;
    animation: holographic 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes holographic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .cyber-grid {
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.body};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.neonGlow};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.text};
  }
`;

export default GlobalStyle;