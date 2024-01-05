import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineThunderbolt } from 'react-icons/ai';

interface IProjectOverviewProps {
    name: string,
    img: string,
    liveUrl: string,
    gitUrl: string,
    overview: string,

}

export const ProjectOverview = (props: IProjectOverviewProps) => {
    const { name, img, liveUrl, gitUrl, overview } = props;

    return (
        <Wrapper>
            <img src={img} className='overview-image' title='project' alt='project' />
            <div className='overview-content'>
                <h3 className='overview-name'>{name}</h3>
                <p className='overview-text'>{overview}</p>
                <br />
                <a href={gitUrl} target='_blank' rel="noreferrer noopener" className='eternal-link primary-btn'>View on Github</a>
                <a href={liveUrl} target='_blank' rel="noreferrer noopener" className='eternal-link'>View Live</a>
            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    border: 1px solid green;
    background-color: white;
    /* align-items: center; */
    padding: 20px;
    width: 60%;
    margin: 10% auto;
    height: 400px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    @media only screen and (max-width: 700px){
          flex-direction: column;
          width: 90%;
          height: 500px;
          margin: 30% auto;
          justify-content: space-evenly;
        }
    .overview-image{
        width: 45%;
        border-radius: 10px;
        object-fit: contain;
        @media only screen and (max-width: 700px){
          flex-direction: column;
          width: 100%;
       
        }
    }
    .overview-content{
        width: 45%;
        @media only screen and (max-width: 700px){
          flex-direction: column;
          width: 100%;
       
        }
    }
    .overview-text{
        line-height: 1.5;
    }
    .eternal-link{
        margin-right: 20px;
        text-decoration: none;
        border: 1px solid #CDB5FF;
        padding: 10px;
        border-radius: 8px;
        font-weight: 700;
        color: #CDB5FF;
    }
    .primary-btn{
        background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
        border: transparent;
        color: white;
    }
`;


