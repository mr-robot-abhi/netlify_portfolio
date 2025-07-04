import { motion } from "framer-motion";
import styled from "styled-components";
import { Github, Twitter, Facebook, YouTube, LinkedIn } from "./AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;
  gap: 1rem;
`;

const IconWrapper = styled(motion.a)`
  color: ${props => props.theme.text};
  background: ${props => props.theme.glassBackground};
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px ${props => props.theme.neonGlow};
    transform: translateY(-5px);
  }
`;

const socialLinks = [
  {
    href: "https://github.com/mr-robot-abhi",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://x.com/mr_robot_abhi",
    icon: Twitter,
    label: "Twitter"
  },
  {
    href: "https://facebook.com/abhishek_ilv",
    icon: Facebook,
    label: "Facebook"
  },
  {
    href: "https://www.youtube.com/channel/UCTA6Ix-995cZidZGm4Rqz_g",
    icon: YouTube,
    label: "YouTube"
  },
  {
    href: "https://linkedin.com/in/mr-robot-abhi",
    icon: LinkedIn,
    label: "LinkedIn"
  }
];

export default function SocialIcons() {
  return (
    <Icons>
      {socialLinks.map((social, index) => (
        <IconWrapper
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon width={25} height={25} fill="currentColor" />
        </IconWrapper>
      ))}
    </Icons>
  );
}