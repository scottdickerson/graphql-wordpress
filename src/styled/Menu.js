import React from 'react'
import styled from 'styled-components'

function Menu({click}) {
    
    
    return (
        <Outter className="outta">
            <MainMenu className={click ? 'active' : ''} >
                <MenuInner>
                    <li>
                        <Links href="#home">Home</Links>
                    </li>
                    <li>
                        <Links href="#about">about</Links>
                    </li>
                    <li>
                        <Links href="#services">services</Links>
                    </li>
                    <li>
                        <Links href="#projects">projects</Links>
                    </li>
                    <li>
                        <Links href="#contact">contact</Links>
                    </li>
                </MenuInner>
                
            </MainMenu>   
        </Outter>
        
    )
}

const Outter = styled.div`
    
        .active{
            left:0;
            max-width:100%;
        }
`;

const MainMenu = styled.div`
    left:100%;
    position:absolute;
    top:0;
    display:flex;
    z-index:11;
    justify-content:center;
    align-items:center;
    width:100%;
    max-width:0;
    overflow:hidden;
    height:100%;
    transition:0.7s;
        background:#fff;
`;

const MenuInner = styled.ul`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    height:50%;
    text-align:center;
`;

const Links = styled.a`
    text-decoration:none;
    display:block;
    text-transform:uppercase;
    padding:20px;
    font-weight:bold;
`;

export default Menu
