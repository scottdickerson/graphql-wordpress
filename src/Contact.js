import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import React from 'react'
import styled, { css } from 'styled-components';
import Heading from './Heading';

function Contact() {
    return (
        <ContactSection id="contact">
            <ContactInner>
                <Heading>Get in touch</Heading>
                <ContactP margin>PHONE</ContactP>
                <ContactSpan>+44 217-412-5060</ContactSpan>

                <ContactP>CONTACT US VIA EMAIL</ContactP>
                <ContactSpan>info@daasafrica.com</ContactSpan>

                <ContactP>FOLLOW US</ContactP>
                <ContactSpan align>
                    <Links href="https://www.linkedin.com/">LinkedIn</Links>
                    <Links href="https://www.facebook.com/">Facebook</Links>
                    <Links href="https://www.twitter.com/">Twitter</Links>
                </ContactSpan>

            </ContactInner>

            <ContactInner>
                <HeadR>Fill in the form…</HeadR>
                <FormControl>
                    <InputLabel>Full Name</InputLabel>
                    <Input type="text"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email Address</InputLabel>
                    <Input type="email"/>
                </FormControl>
                <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                />
                <form action="">
                    <SubmitButton type="submit" onClick={e => e.preventDefault()}>Submit Message</SubmitButton>
                </form>
                
            </ContactInner>
        </ContactSection>
    )
}

const ContactSection = styled.section`
    padding:0 20px;
    position:relative;
    @media(min-width:768px){
        display:flex;
        padding:0 20px;
        justify-content:space-between;
    }
    @media(min-width:992px){
        padding:0 100px;
    }`;

const ContactInner = styled.div`
    width:100%;
    margin:50px 0 70px;
    @media(min-wdith:768px){
        width:50%;
    }
    @media(min-width:992px){
        width:42%;
    }
`;

const ContactP = styled.p`
    text-transform:uppercase;
    font-family:${props => props.theme.fam.mregular};
    font-size:16px;
    margin-top:50px;
    ${({margin}) =>
    margin && css`
        margin-top:20px;
    `}
`;

const ContactSpan = styled.span`
    font-family:${props => props.theme.fam.mbold};
    font-size:18px;
    ${({align}) =>
        align && css`
            display:flex;
            flex-wrap:wrap;
        `
    };
`;

const Links = styled.a`
    text-decoration:none;
    display:block;
    margin:30px 30px 30px 0;
    @media(min-width:768px){
        margin:0 30px 0 0;
    }
`;

const HeadR = styled.h3`
    font-size:35px;
    font-weight:700;
    @media(min-width:768px){
         margin-left:-20px;
    }
`;

const InputText = styled.input`
    border:none;
    width:100%;
    padding-bottom:40px;
    margin-bottom:20px;
    font-family:${props => props.theme.fam.mmedium};
    &::placeholder{
        text-transform:uppercase;
    }
    &:focus{
        outline:none;
    }
`;

const InputTextA = styled.textarea`
    border:none;
    width:100%;
    font-family:${props => props.theme.fam.mmedium};
    border-bottom:1px solid black;
    padding-bottom:40px; 
    margin-bottom:20px;  
    &::placeholder{
        text-transform:uppercase;
    }
    &:focus{
        outline:none;
    }
`;

const SubmitButton = styled.button`
    border:none;
    margin:25px 0 10px 0;
    margin-left:auto;
    height:40px;
    width:250px;
    display:block;
    font-family:${props => props.theme.fam.avenirD};
    font-weight:bold;
    cursor:pointer;
`;

export default Contact
