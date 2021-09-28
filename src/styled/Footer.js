import React from 'react'
import styled from 'styled-components'

function Footer({dark}) {
    return (
        <FooterSection>
            <Image src={dark  ? "./img/pics/logo.png" : "./img/pics/logo-dark.png"} />
            <List>
                <li>
                    <Links>ABOUT US</Links>
                </li>
                <li>
                    <Links>DATASETS</Links>
                </li>
                <li>
                    <Links>SERVICES</Links>
                </li>
                <li>
                    <Links>PROJECTS</Links>
                </li>
                <li>
                    <Links>CONTACT</Links>
                </li>
            </List>
        </FooterSection>
    )
}

const FooterSection = styled.footer`
   
    @media(min-width:992px){
        display:flex;
        flex-wrap:wrap;
    }
`;

const Image = styled.img`
    width:170px;
    margin-left:100px;
    margin:0 auto;
    display:block;
    object-fit:contain;
    @media(min-width:992px){
        margin-left:100px;
    }
`;

const List = styled.ul`
    display:flex;
    flex:1;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    
    @media(min-width:992px){
        transform:translateX(-10%);
    }
`;

const Links = styled.a`
    text-transform:uppercase;
    text-decoration:none;
    display:block;
    padding:20px;
    font-size:14px;
    font-family:${props => props.theme.fam.msemibold};
    @media(min-width:992px){
        transform:translateY(15px);
    }
`;



export default Footer
