import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';



const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;


`;
 
const Container = styled.div`
display: grid;
grid-template-columns: lfr lfr;
height: 100vh;
padding:3rem calc((100vw-1300px)/2);


@media screen and (max-width:768px){
    grid-grid-template-column: lfr;
}
`;

const ColumnLeft = styled.div`
display:flex;
color:#fff;
flex-direction:column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size:2rem;

}
p{
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`;
const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
outline: none;
cursor: pointer;
background: transparent;
color: #fff;

`;

const Image = styled(motion.img)`
position:absolute;
height:100%;
width: 100%;
max-width: 250px;
max-height:250px;

`;

const ColumnRight = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1){
    top:0px;
    left:40px;
}

${Image}:nth-child(2){
    top:-200px;
    right:-100px;
}
${Image}:nth-child(3){
    top:-450px;
    left:500px;
}
${Image}:nth-child(4){
    bottom:50px;
    right:20px;
}
`;

function Hero() {
    const fadeLeft = {
        hidden: {opacity:0, x:-100},
        visible: {opacity:1, x:0},
    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <motion.h1 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                >Welcome to Space</motion.h1>
                
                <motion.p 
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration:1}}
                
                >
                    Journey to the unknown</motion.p>
                <Button
                whileHover={{scale:1.05}}
                whileTap={{scale: 0.95, backgroundColor: '#67F6E7', border:'none', color: '#000'}}
                initial={{opacity:0}}
                animate={{opacity:1, transition:{ducration:1.4}}}
                >
                    Get Started
                </Button>
                </ColumnLeft>
                <ColumnRight>
                <Image src={PlanetOne} alt="planet" 
                whileTap={{scale: 0.9}} 
                drag={true} 
                dragConstraints={{left:20, right:20, top:0, bottom:10}}
                initial={{opacity:0, y:-100}}
                animate={{opacity:1, y:0, transition:{duration:1}}}
                />
                <Image src={PlanetTwo} alt="planet" 
                whileTap={{scale: 0.6}} 
                drag={true}
                dragConstraints={{left:10, right:10, top:10, bottom:10}}
                initial={{opacity:0, x:100}}
                animate={{opacity:1, y:0, transition:{duration:1}}}/>

                <Image src={PlanetThree} alt="planet" 
                whileTap={{scale: 0.8}} 
                drag={true}
                dragConstraints={{left:0, right:20, top:0, bottom:10}}
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, y:0, transition:{duration:1}}}/>
                <Image src={PlanetFour} alt="planet" 
                whileTap={{scale: 0.7}} 
                drag={true}
                dragConstraints={{left:5, right:20, top:0, bottom:0}}
                initial={{opacity:0, y:100}}
                animate={{opacity:1, y:0, transition:{duration:1}}}/>
                </ColumnRight>
                
                
                </Container>

          
        </Section>
    )
}

export default Hero;
