import React, { useState } from 'react';
// import { customMedia } from 'src/styles/breakpoints';
import styled from 'styled-components'
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsBriefcase } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser, AiOutlineCloseCircle } from 'react-icons/ai'
import { BiDockRight } from 'react-icons/bi'
import { Link, animateScroll as scroll } from "react-scroll";

export const NavBar = () => {
    const [active, setActive] = useState('home');
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const displayMobileNav = () => {
        setIsMobileNavVisible(prevState => !prevState)
    }
    const handleActiveNav = (nav: string) => {
        setActive(nav)
    }





//     <Link 
//     activeClass="active" 
//     to="test1" 
//     spy={true} 
//     smooth={true} 
//     offset={50} 
//     duration={500} 
//     onSetActive={handleActiveNav}
//   >
//     Test 1
//   </Link>
    return (
        <>

            <Wrapper>
                <nav className='desktop-nav'>
                    <ul>
                        <li onClick={() => { handleActiveNav('home') }}>
                            <a href="#home" className={active === 'home' ? 'nav-item active' : 'nav-item'}>
                                Home
                            </a>
                        </li>
                        <li onClick={() => { handleActiveNav('resume') }}>
                            <a href="#resume" className={active === 'resume' ? 'nav-item active' : 'nav-item'}>
                                Resume
                            </a>
                        </li>
                        <li onClick={() => { handleActiveNav('portfolio') }}>
                            <a href="#portfolio" className={active === 'portfolio' ? 'nav-item active' : 'nav-item'}>
                                Portfolio
                            </a>
                        </li>
                        <li onClick={() => { handleActiveNav('contact') }}>
                            <a href="#contact" className={active === 'contact' ? 'nav-item active' : 'nav-item'}>
                                Contact
                            </a>
                        </li>
                    </ul>

                </nav>
                <div className='hamburger'>
                    <RxHamburgerMenu onClick={displayMobileNav} />
                </div>
            </Wrapper>
            {isMobileNavVisible && (
                <MobileNavContainer>
                    <AiOutlineCloseCircle onClick={displayMobileNav} className='icon close-icon' />
                    <div className={active === 'home' ? 'mobile-active mobile-selected' : 'mobile-active'} onClick={() => { handleActiveNav('home') }}>
                        <a href="#home" className={active === 'home' ? 'icon mobile-icon__active' : 'icon mobile-icon'}>
                        <AiOutlineHome className={active === 'home' ? 'icon mobile-icon__active' : 'icon mobile-icon'} />
                        </a>
                    </div>
                    <div className={active === 'resume' ? 'mobile-active mobile-selected' : 'mobile-active'} onClick={() => { handleActiveNav('resume') }}>
                        <a href="#resume" className={active === 'resume' ? 'icon mobile-icon__active' : 'icon mobile-icon'}>
                        <BiDockRight className={active === 'resume' ? 'icon mobile-icon__active' : 'icon mobile-icon'} />
                        </a>
                    </div>
                    <div className={active === 'portfolio' ? 'mobile-active mobile-selected' : 'mobile-active'} onClick={() => { handleActiveNav('portfolio') }}>
                        <a href="#portfolio" className={active === 'portfolio' ? 'icon mobile-icon__active' : 'icon mobile-icon'}>
                        <BsBriefcase className={active === 'portfolio' ? 'icon mobile-icon__active' : 'icon mobile-icon'} />
                        </a>
                    </div>
                    <div className={active === 'contact' ? 'mobile-active mobile-selected' : 'mobile-active'} onClick={() => { handleActiveNav('contact') }}>
                        <a href="#contact" className={active === 'contact' ? 'icon mobile-icon__active' : 'icon mobile-icon'}>
                        <AiOutlineUser className={active === 'contact' ? 'icon mobile-icon__active' : 'icon mobile-icon'} />
                        </a>
                    </div>
             
                </MobileNavContainer>
            )
            }
        </>

    )
}


const MobileNavContainer = styled.div`
    display: none;
    @media only screen and (max-width: 700px){
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #CDB5FF;
        position: absolute;
        top: 0;
        right: 10%;
        width: 100px;
        z-index: 5;
        bottom: 0;
        }

    .icon{
        width: 25px;
        height: 25px;
        fill: white;
    }
    .close-icon{
        margin: 20px 0 60px;
    }
     .mobile-icon{
        margin: 15px 0;
     }
     .mobile-icon__active{
        width: 25px;
        height: 25px;
        margin: 15px 0;
        fill: #CDB5FF;
   
     }
     .mobile-active{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        /* background-color: black; */
        background-image: linear-gradient(to bottom right, #CDB5FF, #FCA5F1);
        margin-bottom: 35px;
     }
     .mobile-selected{
        background: white;
     }
`;

const Wrapper = styled.div`
        width: 30%;
        @media only screen and (max-width: 700px){
            width: 50%;
        };
        nav, ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .active{
                color: #CDB5FF;
                padding-bottom: 7px;
                border-bottom: 3px solid #FCA5F1;
            }
            li{
                list-style: none;
                position: relative;
            }
            li:after{
                content: "";
                position: absolute;
                background-color: #FCA5F1;
                height: 3px;
                width: 0;
                left:0;
                bottom: -10px;
                transition: 0.3s
            }
            li:hover:after{
                width: 100%;
            }
            li:hover{
             cursor: pointer;
            }
        .nav-item{
            text-decoration: none;
            color: black;
            margin-left: 10px;
         
            &:hover{
                color: #CDB5FF;
            }
        }
         @media only screen and (max-width: 700px){
            display: none
        };
        }

        .hamburger{
            float: right;
            display:none;
            @media only screen and (max-width: 700px){
            display: block;
        };
        }
`;
