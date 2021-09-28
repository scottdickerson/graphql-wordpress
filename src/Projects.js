import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import Heading from './Heading';

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade:true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <ProjectSec id="projects">
        <Heading >Projects</Heading>
        <Slider {...settings}>
            <Project>
                <ProjectInner>
                    
                    <ProjectH>SADC – Covid 19 Dashbord</ProjectH>
                    <ProjectP>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex</ProjectP>
                    <ProjectLink href="http://www.coviddashboard.io/">www.coviddashboard.io</ProjectLink>
                </ProjectInner>

                <Image src="./img/pics/21382032.png" />

                <Number>01/<span>03</span></Number>
            </Project>
            <Project>
                <ProjectInner>
                   
                    <ProjectH>SADC – Covid 190 Dashbord</ProjectH>
                    <ProjectP>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex</ProjectP>
                    <ProjectLink href="http://www.coviddashboard.io/">www.coviddashboard.io</ProjectLink>
                </ProjectInner>

                <Image src="./img/pics/21382032.png" />
                <Number>02/<span>03</span></Number>
            </Project>
            <Project>
                <ProjectInner>
                   
                    <ProjectH>SADC – Covid 195 Dashbord</ProjectH>
                    <ProjectP>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex</ProjectP>
                    <ProjectLink href="http://www.coviddashboard.io/">www.coviddashboard.io</ProjectLink>
                </ProjectInner>

                <Image src="./img/pics/21382032.png" />
                <Number>03/<span>03</span></Number>
            </Project>
        </Slider>
        </ProjectSec>
        
    )
}

const ProjectSec = styled.section`
    width:100%;
    overflow:hidden;

    h2{
        padding-left:20px;
        width:max-content;
        @media(min-width:768px){
            padding-left:0;
            transform:translate(20px,216%)  !important;
            
        }
        @media(min-width:992px){
            transform:translate(100px,280%)  !important;
        }
    }
`;

const Project = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`;

const ProjectInner = styled.div`
   width:100%;
   
   padding-left:20px;
   @media(min-width:768px){
    margin:150px 0;
       width:70%;
   }
   @media(min-width:992px){
       width:50%;
       margin:200px 0;
       padding-left:100px;
   }
`;

const ProjectH = styled.h3`
    font-size:25px;
    font-weight:700;
    margin:0;
    font-family:${props => props.theme.fam.avenir};
    color:${props => props.theme.color.grey};
    line-height:25px;
`;

const ProjectP = styled.p`
    width:90%;
    font-family:${props => props.theme.fam.mregular};
    font-size:15px;
    line-height:25px;
    @media(min-width:768px){
        width:65%;
    }
    @media(min-wdith:992px){
        width:400px;
    }
`;

const ProjectLink = styled.a`
    padding-bottom:8px;
    text-decoration:none;
    font-family:${props => props.theme.fam.mmedium};
`;

const Image = styled.img`
    margin:0 auto;
    width:100%;
    display:none !important;
    @media(min-width:768px){
        position:absolute;
        width:56%;
        display:block !important;
        z-index:5;
        right:0%;
        top:27%;
        transform:translateY(0);
    }
    @media(min-width:992px){
        top:15%;
    }
    @media(min-width:1200px){
        top:4%;
        width:60%;
    }
`;

const Number = styled.span`
    position:absolute;
    bottom:-150px;
    left:8%;
    font-size:25px;
    font-family:${props => props.theme.fam.avenir};
    color:${props => props.theme.color.grey};
    span{
        font-size:15px;
    }
    @media(min-width:768px){
        bottom:50px;
    }
`;



export default Projects
