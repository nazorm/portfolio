import React from 'react';
import styled from 'styled-components';
import { portfolioDta } from '../../staticData/portfolioData';
import { Fade } from "react-awesome-reveal";
import { BsGithub } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';

 const PortfolioPage = () => {
    return (
        <>
            <Wrapper id="portfolio">
                <h1>Recent Works</h1>
                <section className='projects'>
                    {portfolioDta.map((data, index) => (
                        <Fade key={index} direction={'up'} triggerOnce={true}>
                            <Project className='project'>
                                {/* <Image src={data.img} width={550} height={300} alt='project-preview' /> */}
                                <Image src={data.img} className='preview-image' alt='project-preview' />
                                <Fade>
                                    <div className='project-info'>
                                        <div></div>
                                        <p>{data.name}</p>
                                        {/* <div className='redirect'>
                                            <a href={data.liveUrl} target='_blank' rel='noopener noreferrer' className='link'> <AiOutlineThunderbolt /></a>
                                            <a href={data.gitUrl} target='_blank' rel='noopener noreferrer' className='link'> <BsGithub /></a>
                                        </div> */}
                                    </div>
                                </Fade>
                            </Project>
                        </Fade>
                    ))}
                </section>

            </Wrapper>
        </>
    )
}
export default PortfolioPage;

const Wrapper = styled.div`
    width: 80%;
    margin: 5% auto;
    font-family: 'Roboto', sans-serif;
    .projects{
        margin: 5% auto;
        width: 80%;
        font-family: 'Cantora One', sans-serif;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 15px;
        @media only screen and (max-width: 700px){
            width: 90%;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

    }
    @media only screen and (max-width: 700px){
            width: 90%;
        }
`;
const Image = styled.img`

`;

const Project = styled.div`
    display: relative;
    width: 280px;
    @media only screen and (max-width: 700px){
        width: 100%;
        }
    &:hover{
        cursor: pointer;
        .project-info{
            position: absolute;
            top: 0;
            left: 0;
            width: 280px;
            height: 200px;
            background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            line-height: 1.8;
            border-radius: 10px;
            opacity: 0.9;
            animation: createBox 0.80s;
            @media only screen and (max-width: 700px){
        width: 100%;
        }
        }
        @keyframes createBox {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
        }
           
    }
    .preview-image{
         width: 280px;
         height: 200px;
         border-radius: 10px;
         object-fit: fill;
         @media only screen and (max-width: 700px){
        width: 100%;
        }
    }
    .project-info{
        display: none
    
    }
`;



      /* ${customMedia.lessThan('large')`
            grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        `}
        ${customMedia.lessThan('small')`
            display: flex;
            flex-direction: column;
        `} */