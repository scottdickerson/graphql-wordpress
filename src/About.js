import React from 'react';
import styled from 'styled-components'
import Heading from './Heading';
import OutterSection from './styled/OutterSection';
import {useQuery} from '@apollo/client'
import {DaasQuery} from './App'

function About() {
        const {data} = useQuery(DaasQuery);

        const about = data.page.about;

    return (
        <OutterSection id="about">
            <AboutLeft>
                <Heading>{about.aboutHeading}</Heading>
                <LeftP>{about.leftpTop}</LeftP>
                <LeftP>{about.leftpMiddle}</LeftP>
                <LeftP>{about.leftpBottom}</LeftP>
            </AboutLeft>
            <AboutRight>
                    <Image src={about.aboutImage.sourceUrl} />
                <RightP>{about.rightp}</RightP>
                    <Name>{about.name}</Name>
            </AboutRight>
        </OutterSection>
    )
}


const AboutLeft = styled.div`
        margin:50px 0;
        @media(min-width:768px){
                width:70%;
        }
        @media(min-width:992px){
                width:60%;
                margin:150px 0;
            }
`;

const AboutRight = styled.div`
            margin:50px 0;
            display:flex;
            flex-direction:column;
            justify-content:flex-end;
            text-align:left;
        @media(min-width:992px){
                width:38%;
                margin:150px 0;
                padding-left:100px;
            }
`;

const LeftP = styled.p`
        font-size:${props => props.theme.size.small};
        margin:0;
        line-height:27px;
        font-family:${props => props.theme.fam.mregular};
`;

const RightP = styled.p`
        font-size:17px;
        line-height:30px;
        font-family:${props => props.theme.fam.mmedium};
        margin-bottom:30px;
        @media(min-width:992px){
                font-size:20px;    
        }

`;

const Name = styled.span`
        font-family:${props => props.theme.fam.mbolditalic};
        font-size:12px;
`;

const Image = styled.img`
        width:25px;
`;

export default About
