import React from 'react';
import styled from 'styled-components';




export const About = ()=>{
    return(
    <Wrapper>
        <h2 className='title'>About Me</h2>
        <p className='bio'>
            I am a Frontend Web Developer with over 2 years experience 
            <br/>
            keen on creating visually appealing and user intuitive interfaces
            <br/>
            I love exploring new technologies in my free time and delivering excelling products.
            <br/>
            I’m always interested in hearing about new projects and opportunities.
            <br/>
            Let's talk about everything! Connect with me 🚀.
        </p>
    </Wrapper>
    )
}


const Wrapper = styled.section`
    width: 100%;
    text-align: center;
    font-family: 'Cantora One', sans-serif;
    .title{
        margin-top: 6%;
        line-height: 1.8;
        font-size: 20px;
    }
    .bio{
        line-height: 1.5;
        font-size: 18px;
        margin-bottom: 6%;
        @media only screen and (max-width: 500px){
            font-size: 15px;
         }
    }
`;

