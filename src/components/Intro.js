import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import ParticleComponent from '../subComponents/ParticleComponent'

const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '60vh'}}
        transition={{ type: 'spring', duration:1.25, delay:1.5 }}
        >
            <SubBox>
                <Text>
                    <h2>Hi,</h2>
                    <h2>mr-robot-abhi here, </h2>
                    <h6>I am a Full-Stack Developer. I design and code simple yet powerful applications.</h6>
                </Text>
            </SubBox>
            <SubBox>
            
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 2}}
        transition={{ duration:1.5, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                    
                </motion.div>
            </SubBox>
        <ParticleComponent theme='light' />
        </Box>
    
    )
}

export default Intro
