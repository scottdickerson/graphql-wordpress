import React from 'react'
import styled from 'styled-components'

function OutterSection({children}) {
    return (
        <>
            <Section >{children}</Section>
        </>
    )
}

const Section = styled.section`
    padding:0 20px;
    position:relative;
    @media(min-width:992px){
        display:flex;
        padding:0 100px;
        justify-content:space-between;
    }
`;

export default OutterSection
