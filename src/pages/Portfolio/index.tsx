import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioDta } from '../../staticData/portfolioData';
import { Fade } from "react-awesome-reveal";
import Modal from '@mui/material/Modal';
import { ProjectOverview } from './components/ProjectOverview';

interface IProjectOverviewProps {
    name: string,
    img: string,
    liveUrl: string,
    gitUrl: string,
    overview: string,

}
const PortfolioPage = () => {
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<IProjectOverviewProps>();

    const handleOpen = () => setIsOverviewOpen(true);
    const handleClose = () => setIsOverviewOpen(false);
    const projectToView = (name: string) => {
        const project = portfolioDta.find((data) => data.name === name);
        setActiveProject(project);
    }

    return (
        <>
            <Wrapper id="portfolio">
                <h1>Recent Works</h1>
                <section className='projects'>
                    {portfolioDta.map((data, index) => (

                        <Fade key={index} direction={'up'} triggerOnce={true}>
                            <Project className='project' onClick={() => {
                                handleOpen();
                                projectToView(data.name)
                            }}>
                                {/* <Image src={data.img} width={550} height={300} alt='project-preview' /> */}
                                <img src={data.img} className='preview-image' alt='project-preview' />
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
                {!!activeProject && isOverviewOpen && (
                    <Modal
                        open={isOverviewOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <ProjectOverview
                            name={activeProject.name}
                            img={activeProject.img}
                            liveUrl={activeProject.liveUrl}
                            gitUrl={activeProject.gitUrl}
                            overview={activeProject.overview} />
                    </Modal>
                )}

            </Wrapper>
        </>
    )
}
export default PortfolioPage;

const Wrapper = styled.div`
    width: 80%;
    margin: 5% auto;
    font-family: 'Roboto', sans-serif;
    white-space: pre-wrap;
    .projects{
        margin: 5% auto;
        width: 85%;
        font-family: 'Cantora One', sans-serif;
        display: grid;
        text-align: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const Project = styled.div`
    display: relative;
    width: 300px;
    @media only screen and (max-width: 700px){
        width: 100%;
        }
    &:hover{
        cursor: pointer;
        .project-info{
            position: absolute;
            top: 0;
            left: 0;
            width: 300px;
            height: 250px;
            background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
            line-height: 1.8;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.9;
            animation: createBox 0.80s;
            @media only screen and (max-width: 700px){
                width: 90%;
                height: 200px;
                margin: auto;
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
         width: 300px;
         height: 250px;
         border-radius: 10px;
         object-fit: fill;
         @media only screen and (max-width: 700px){
           width: 90%;
           height: 200px;
           margin: auto;
        }
    }
    .project-info{
        display: none
    
    }
`;
