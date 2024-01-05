import React from 'react';
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import { ReactComponent as TypescriptIcon } from "../../assets/typescript.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/javascript.svg";
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as HTMLIcon } from "../../assets/html.svg";
import { ReactComponent as GITIcon } from "../../assets/git.svg";
import { ReactComponent as CSSIcon } from "../../assets/css.svg";
import { ReactComponent as TailwindIcon } from "../../assets/tailwind.svg";
import { ReactComponent as VSIcon } from "../../assets/vscode.svg";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as JestIcon } from "../../assets/jest.svg";
import { ReactComponent as SassIcon } from "../../assets/sass.svg";
import { ReactComponent as AntIcon } from "../../assets/ant.svg";
import { resumeData } from '../../staticData/data';;

const proficientTechstack = [
    {
        name: "HTML5",
        techIcon: <HTMLIcon />,
    },
    {
        name: "CSS3",
        techIcon: <CSSIcon />,
    },
    {
        name: "Javascript",
        techIcon: <JavascriptIcon />,
    },
    {
        name: "Typescript",
        techIcon: <TypescriptIcon />,
    },
    {
        name: "React JS",
        techIcon: <ReactIcon />,
    },
    {
        name: "Next JS",
        techIcon: <NextIcon />,
    },
    {
        name: "Redux",
        techIcon: <ReduxIcon />,
    },
    {
        name: "Tailwind",
        techIcon: <TailwindIcon />,
    },
    {
        name: "Sass",
        techIcon: <SassIcon />,
    },
    {
        name: "Ant Design",
        techIcon: <AntIcon />,
    },
    {
        name: "Git",
        techIcon: <GITIcon />,
    },

    {
        name: "Jest",
        techIcon: <JestIcon />,
    },
    {
        name: "VSCode",
        techIcon: <VSIcon />,
    },
]

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
                        {proficientTechstack.map((data, index) => (
                            <Fade key={index} direction={'up'} triggerOnce={true}>
                                <div className='stack-container'>
                                    <div className='stack-icon-container'>
                                        {data.techIcon}
                                    </div>
                                    <span className='tech-stack-name' >{data.name}</span>
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
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 10px;
    }
    .stack-container{
        width: 100px;
        height: 100px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        /* background-color: whitesmoke; */
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .stack-icon-container{
        width: 40px;
        height: 40px;
    }
    .tech-stack-name{
      margin-top: 8px;
    }
 `;

export default ResumePage;
