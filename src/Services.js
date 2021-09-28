import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import {useQuery} from '@apollo/client';
import {DaasQuery} from './App';

function Services({dark}) {
   const {data} = useQuery(DaasQuery);

   const services = data.page.services;

    return (
        <ServicesSec id="services">
            
            <ServicesInner>
                <Heading>{services.heading}</Heading>
                <ServicesH>{services.serviceHeadOne}</ServicesH>
                <ServicesP>{services.serviceP}</ServicesP>

                <ServicesH>{services.serviceHeadTwo}</ServicesH>
                <ServicesP>{services.servicePTwo}</ServicesP>

                <ServicesH>{services.serviceHeadThree}</ServicesH>
                <ServicesP>{services.servicePThree}</ServicesP>

            </ServicesInner>

            <ServicesImage>
                {dark ? <video src="./img/img.mp4" autoPlay loop muted/> : <Image src="./img/pics/62608.png"/>}
                
            </ServicesImage>
        </ServicesSec>
    )
}

const ServicesSec = styled.section`
    padding:0 20px;
    position:relative;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
    }
    @media(min-width:992px){
        padding:0 100px;
    }
    

`;

const ServicesInner = styled.div`
    position:relative;
    z-index:2;
    margin:50px 0;
    @media(min-width:768px){
        width:50%;
    }
    @media(min-width:992px){
        margin:100px 0 150px;

    }
`;

const ServicesH = styled.h3`
    font-size:24px;
    font-weight:700;
    margin:0;
    font-family:${props => props.theme.fam.avenir};
    color:${props => props.theme.color.grey};
    line-height:25px;
`;

const ServicesP = styled.p`
    margin-bottom:30px;
    font-family:${props => props.theme.fam.mregular};
    font-size:${props => props.theme.size.small};
    line-height:30px;
    @media(min-width:992px){
        width:440px;
        line-height:20px;
    }
`;

const ServicesImage = styled.div`
    width:100%;
    position:relative;
    @media(min-width:768px){
        width:50%;
        margin: auto;
        height:fit-content;
    }
    @media(min-width:992px){
        position:absolute;
        z-index:1;
        width:48%;
        right:0;
        height:unset;
    }
    video{
        width:100%;
        transform: translateY(-25%);
        @media(min-width:768px){
            transform:scale(1.5) translate(-26%, 25%);
        }
    }
`;

const Image = styled.img`
    width:100%;
`;

export default Services
