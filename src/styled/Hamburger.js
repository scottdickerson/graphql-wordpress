import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';

function Hamburger({setClick, click}) {
    
    const handleClick = () => setClick(!click);
    window.onscroll = () =>{
        setClick(false)
    } 

    return (
        <>
            <MenuBox  onClick={handleClick}>
                <Bar className={click ? 'active' : ''}/>
            </MenuBox>
            <Menu click={click} setClick={setClick}/>
        </>
    )
}

const MenuBox = styled.div`
    padding:15px 46px 25px 5px;
    position:absolute;
    z-index:99;
    right:10%;
    cursor:pointer;
    top:10%;
    .active{
        width:30px;
        transform:rotate(498deg);
        background:black;
            &:after{
                width:100%;
                top:0;
                transform:rotate(-458deg);
                background:black;
            }
    }
`;

const Bar = styled.span`
    width:40px;
    height:4px;
    background:white;
    border-radius:10px;
    position:absolute;
    transition:0.7s;
    &:after{
        background:white;
        content:'';
        width:70%;
        right:0;
        border-radius:10px;
        height:100%;
        position:absolute;
        top:9px;
        transition:0.7s;
    }
`;

export default Hamburger
