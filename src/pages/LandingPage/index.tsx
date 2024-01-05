import React from 'react';
import styled from 'styled-components';
import { BsGithub, BsMedium, BsLinkedin, BsTwitter, BsInstagram, BsChevronDoubleDown } from 'react-icons/bs';
import portfolioImage from '../../assets/port.png';
import scratchImage from '../../assets/scratch-image.png';
import { NavBar } from '../../Layout/Navbar';

export const LandingPage = () => {
    return (
        <Wrapper id='home'>
            <div className='circle circle1'></div>
            <div className='circle circle2'></div>
            <div className='circle circle3'></div>
            <div className='circle circle4'></div>
            <Content>
                <ImageContainer>
                    <img src={portfolioImage} className='portfolio-image' alt='portfolio' title='portfolio-image' />
                </ImageContainer>
                <Intro>
                    <div className='scratch'>
                        <p className='salutation'>Hello, I'm</p>
                        <img src={scratchImage} alt='scratch' title='scratch' className='scratch-image' />
                    </div>

                    <h3 className='name'>Doris Nnadozie</h3>
                    <p className='occupation'>Frontend Web Developer</p>
                    <div className='media-container'>
                        <a target='_blank' rel="noopener noreferrer" href='https://github.com/nazorm'>  <BsGithub className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@nnadoziechinazor'>  <BsMedium className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/chinazornnadozie/'>  <BsLinkedin className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/_Nazor_'>  <BsTwitter className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/chi.nazor/'>  <BsInstagram className='contact-image' /></a>
                    </div>
                </Intro>
            </Content>
            <div className='downward-arrow'>
                <BsChevronDoubleDown className='downward-image' />
            </div>
        </Wrapper>

    )
}



const Wrapper = styled.section`
    height: 90vh;
    background-color: #F0F1FF;
    position: relative;
    overflow: hidden;
    .circle{
        position: absolute;
        border-radius: 50%;
        background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
    }
    .circle1{
        width: 80px;
        height: 80px;
        left: 10%;
        top: 20%;
        @media only screen and (max-width: 700px){
           display: none;
        }
    }
    .circle4{
        width: 80px;
        height: 80px;
        right: 10%;
        bottom: 50%;
    }
    .circle2{
        width: 22rem;
        height: 22rem;
        left: -5%;
        bottom: -5%;
        border-radius: 50% 50% 50% 0;
    }
    .circle3{
        width: 250px;
        height: 250px;
        right: -5%;
        bottom: -5%;
        border-radius: 50% 50% 0 50%;
        @media only screen and (max-width: 700px){
           display: none;
        }
    }
    .downward-arrow{
        border-radius: 50%;
        background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: bounce 3s linear infinite;
    }
    @keyframes bounce{
    0%{
        bottom: 2%;
    }
    50%{
        bottom: 4%;
    }
    100%{
        bottom: 2%;
    }
  }
`;
const Intro = styled.div`
    width: 45%;
    a{
       text-decoration: none;
      }
    .media-container{
        display: flex;
        align-items: center;
    }
    .contact-image{
                width: 25px;
                height: 25px;
                margin: 0 15px 0 0;
                fill: black;
    }
    .scratch{
        margin: 30% 0 0 0;
        position: relative;
    }
    .scratch-image{
      width: 12rem;  
      transform: rotate(180deg);
      position: absolute;
      bottom: 0;

    }
    .salutation{
        font-family: 'Dancing Script', cursive;
        font-weight: 700;
        font-size: 2.25rem;
        margin:0;
        z-index: 1;
        position: relative;
        @media only screen and (max-width: 700px){
            font-size: 1.5rem;
            line-height: 1.5rem;
         }
    }
    .name{
        /* font-size: 3rem; */
        /* font-weight: 800; */
        margin: 0;
        font-family: 'Cantora One', sans-serif;
        font-size: 2.25rem;
        line-height: 1.8;
        @media only screen and (max-width: 700px){
            font-size: 1.5rem;
            line-height: 1.5rem;
         }
    }
    .occupation{
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 0 0 5% 0;
        font-weight : 700;
        font-family: 'Cantora One', sans-serif;

        @media only screen and (max-width: 700px){
            font-size: 1rem;
            line-height: 1.5rem;
         }
       }

    @media only screen and (max-width: 700px){
        position: relative;
        z-index: 1;
        width: 100%;
     }
`;
const ImageContainer = styled.div`
     width: 45%;
     /* border: 1px solid green; */
     @media only screen and (max-width: 700px){
        width: 100%;
     }
    .portfolio-image{
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: relative;
        z-index: 1;
        /* border: 1px solid brown; */
       
    }
`;


const Content = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 0;
    width: 90%;
    position:absolute;
    bottom: -1%; 
    left: 8%;
    @media only screen and (max-width: 700px){
        margin: 0 auto 0;
      flex-direction: column-reverse;
     }
`;



