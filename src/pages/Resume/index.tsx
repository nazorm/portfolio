import React from 'react';
// import PageHeader from 'src/components/Header';
// import { customMedia } from 'src/styles/breakpoints';
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import {resumeData} from '../../staticData/data';;



const ResumePage = () => {
    return (
      
            <Wrapper id="resume">
                <Section>
                    <p className='section-title'>Work Experience <br />
                        <span className='section-desc'>PRESENT & PREVIOUS JOBS</span>
                    </p>
                    <Experience>
                        {resumeData.workExperience.map((data, index) => (
                            <Fade key={index} direction={'up'} triggerOnce={true}>
                                <div className='summary'>
                                    <h2 className='role'>{data.role}</h2>
                                    <p className='company'>{data.company} &nbsp;. &nbsp; <span className='time-frame'>{data.timeFrame}</span></p>
                                    {data.workDone.map((data, index) => (
                                        <ul key={index} className='list-container'>
                                            <li className='list'>{data}</li>
                                        </ul>
                                    )
                                    )}
                                </div>


                            </Fade>
                        )
                        )}
                    </Experience>
                </Section>
                <Section>
                    <p className='section-title'>Education <br />
                        <span className='section-desc'>SCHOOLING & TRAINING</span>
                    </p>
                    <Experience>
                        {resumeData.education.map((data, index) => (
                            <Fade key={index} direction={'up'} triggerOnce={true}>
                                <div className='summary'>
                                    <h2 className='role'>{data.institution}</h2>
                                    <span className='time-frame'>{data.timeFrame}</span>
                                    <p className='company'>{data.course} </p>
                                    <p className='education-summary'>{data.educationSummary}</p>

                                    {data.educationHighlights.map((data, index) => (
                                        <ul key={index} className='list-container'>
                                            <li className='list'>{data}</li>
                                        </ul>
                                    )
                                    )}
                                </div>


                            </Fade>
                        )
                        )}
                    </Experience>
                </Section>
                <Section>
                    <p className='section-title'>Tech Stack <br />
                        <span className='section-desc'>TOOLS & TECHNOLOGIES</span>
                    </p>
                    <Experience>
                        <div className='stack'>
                            {resumeData.techStack.map((data, index) => (
                                <Fade key={index} direction={'up'} triggerOnce={true}>
                                    <div>
                                        <span className='teck-stack'>{data}</span>
                                    </div>
                                </Fade>
                            )
                            )}
                        </div>
                    </Experience>
                </Section>
            </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    margin: 5% auto;
    .section-title{
        font-size: 20px;
        font-family: 'Cantora One', sans-serif;
    }
    .section-desc{
        font-size:12px;
        color: black;
        font-family: 'Cantora One', sans-serif;
    }
    .list, .education-summary{
        color: black;
        font-family: 'Cantora One', sans-serif;
    }
 `;
const Section = styled.section`
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        @media only screen and (max-width: 700px){
            flex-direction: column;
        }
    `;
const Experience = styled.div`
    width: 70%;
    line-height: 1.8;
   .role{
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0;
   }
   .company{
    font-family: 'Cantora One', sans-serif;
    margin-top: 0;
   }
   .time-frame{
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
   }
   @media only screen and (max-width: 700px){
    width: 100%;
       margin-top: 10px;
        }
    .list-container{
        margin-left: 25px;
    }

    .education-summary{}
    .stack{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
 `;

export default ResumePage;
