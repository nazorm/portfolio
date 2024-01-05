import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { BsGithub, BsMedium, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

const ContactPage = () => {
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEY;
    const serviceId = process.env.REACT_APP_SERVICEID;

    const [senderInfo, setSenderInfo] = useState({
        fullName: '', email: '', subject: '', message: ''
    })
    const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSenderInfo({
            ...senderInfo,
            [event.target.name]: value
        })
    }

    const handleMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setSenderInfo({
            ...senderInfo,
            [event.target.name]: value
        })
    }
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        emailjs.sendForm(serviceId!, templateId!, 'form', publicKey)
            .then((result) => {
                // toast.success(`${result.text}, Message sent`);
            }, (error) => {
                console.log(error.text);
                // toast.error('An error occured');
            });
    }

    return (
        <div id="contact">
            <Container>
                <h1>Get in touch</h1>
                <p>I’m always interested in hearing about new projects and opportunities</p>
                <Section>
                    <div className='alternative'>
                        <p>Let&apos;s talk about everything!</p>
                        <span >Don&apos;t like forms? Send me an <a target='_blank' rel="noopener noreferrer" href='mailto:nnadoziechinazor@gmail.com' className='form-link'>email</a>. 👋
                        </span>
                    </div>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit} className='form'>
                            <InputRow>
                                <input
                                    placeholder='Full Name'
                                    name='fullName'
                                    autoComplete='on'
                                    type='text'
                                    value={senderInfo.fullName}
                                    onChange={handleInputValue}
                                    className='input-field row-field'
                                />
                                <input
                                    placeholder='Email Address'
                                    name='email'
                                    type='email'
                                    autoComplete='on'
                                    value={senderInfo.email}
                                    onChange={handleInputValue}
                                    className='input-field row-field'
                                />
                            </InputRow>
                            <input
                                placeholder='Subject'
                                name='subject'
                                type='text'
                                autoComplete='on'
                                value={senderInfo.subject}
                                onChange={handleInputValue}
                                className='input-field block-input'
                            />
                            <br />
                            <textarea
                                placeholder='Message'
                                name='message'
                                autoComplete='on'
                                value={senderInfo.message}
                                onChange={handleMessage}
                                className='input-field block-input'
                            />
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div>

                </Section>
                <SocialMediaSection>
                    Connect on social media!
                    <div className='media'>
                        <a target='_blank' rel="noopener noreferrer" href='https://github.com/nazorm'>  <BsGithub className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://medium.com/@nnadoziechinazor'>  <BsMedium className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/chinazornnadozie/'>  <BsLinkedin className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/_Nazor_'>  <BsTwitter className='contact-image' /></a>
                        <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/chi.nazor/'>  <BsInstagram className='contact-image' /></a>
                    </div>
                </SocialMediaSection>
            </Container>
        </div>

    )
}

const Container = styled.div`
    width: 90%;
    margin: 5% auto;
    font-family: 'Cantora One', sans-serif;
    line-height: 1.8;
    //  font-family: 'Roboto', sans-serif;
    /* input, textarea{
        width: 100%;
        padding: 10px 15px;
        margin: 5px;
        border-radius: 8px;
        border: transparent;
        font-size: 16px;
        background: white;
        &:focus {
             border: 3px solid #3232a7;
             outline:none;
             padding: 10px 15px;
        }
    } */
    textarea{
        height: 150px;
    }
`;
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    @media only screen and (max-width: 900px){
        flex-direction: column;
    }
   
    .form-link{
        color: #3232a7;
    }
    .form-container{
        width: 60%;
        background-color:  #f3f7fa;
        border-radius: 8px;
        @media only screen and (max-width: 900px){
            margin-top: 2rem;
            width: 100%;
        }
    }
  .form{
        overflow: hidden;
        width: 90%;
        margin: 0 auto;
  
    .input-field{
        border-radius: 8px;
        border: transparent;
        padding: 20px 10px;
        margin: 5px auto;
        font-size: 16px;
        &:focus {
             outline:none;
        }
    }
    .block-input{
        width: 96%;
    }

    .submit-btn{
        padding: 15px 25px;
        border-radius: 8px;
        border: transparent;
        font-size: 16px;
        float: right;
        margin: 2rem 0;
        background: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
    }
  }
`;

const InputRow = styled.div`
    margin-top: 2rem;
    display: flex;
    @media only screen and (max-width: 900px){
     flex-direction: column;
    }    
    .row-field{
       width: 45%;
       @media only screen and (max-width: 900px){
          width: 96%;
        } 
    }
`;

const SocialMediaSection = styled.div`
    display: flex;
    /* margin: 5% 0  40%!important ; */
    margin-top: 5%;
    margin-bottom: 5% !important;
    justify-content: space-between;
    @media only screen and (max-width: 700px){
        flex-direction: column;
    }
    .media{
        width: 70%;
        display: flex;
        a{
            margin: 0 20px;
            @media only screen and (max-width: 700px){
                width: 10%;
        }
        }
        .contact-image{
            width: 30px;
            height: 30px;
            fill: black;
        }
        
        @media only screen and (max-width: 700px){
            width: 100%;
            margin-top: 10px;
        }
    }
`;

export default ContactPage;
