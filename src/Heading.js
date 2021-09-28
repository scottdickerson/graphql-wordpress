import React from 'react'
import styled from 'styled-components'

function Heading({children, transform}) {
    return (
        <>
        <TheHead>{children}</TheHead>
        </>
    )
}

const TheHead = styled.h2`
    text-transform:uppercase;
    opacity:15%;
    line-height:70px;
    font-size:40px;
    margin:10px 0;
    @media(min-width:992px){
        font-size:48px;
    }
`;

export default Heading
