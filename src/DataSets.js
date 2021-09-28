import React from 'react'
import styled, { css } from 'styled-components'
import Heading from './Heading'
import OutterSection from './styled/OutterSection';
import {useQuery} from '@apollo/client';
import {DaasQuery} from './App';

function DataSets() {

    const {data} = useQuery(DaasQuery);

    const datasets = data.page.datasets;

    return (
        <OutterSection >
            <DataText>
                <Heading>{datasets.heading}</Heading>
                <DataLeftHead>{datasets.dataLeftHeadTop}</DataLeftHead>
                <DataLeftHead>{datasets.dataLeftHeadBottom}</DataLeftHead>
                <DataLeftBottom>{datasets.dataLeftBottom}</DataLeftBottom>
            </DataText>
            <DataCards>
                <DataCardsInner moveleft>
                    <DataCardNum>{datasets.dataCardNumOne}</DataCardNum>
                    <DataCardP>{datasets.dataCardpOne}</DataCardP>
                </DataCardsInner>
                <DataCardsInner move moveright>
                    <DataCardNum>{datasets.dataCardNumTwo}</DataCardNum>
                    <DataCardP>{datasets.dataCardpTwo}</DataCardP>
                </DataCardsInner>
                <DataCardsInner moveleft>
                    <DataCardNum>{datasets.dataCardNumThree}</DataCardNum>
                    <DataCardP>{datasets.dataCardpHtree}</DataCardP>
                </DataCardsInner>
                <DataCardsInner move moveright>
                    <DataCardNum>{datasets.dataCardNumFour}</DataCardNum>
                    <DataCardP>{datasets.dataCardpFour}</DataCardP>
                </DataCardsInner>
            </DataCards>
        </OutterSection>
    )
}


const DataText = styled.div`
   margin:50px 0;
    @media(min-width:992px){
        width:50%;
        margin:0;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
`;

const DataCards = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    margin:50px 0;
    @media(min-width:992px){
        margin:100px 0;
        width:50%;
        
    }
`;

const DataLeftHead = styled.h3`
    font-family:${props => props.theme.fam.avenir};
    font-size:24px;
    margin:0;
    color:${props => props.theme.color.grey};
    line-height:30px;
`;

const DataLeftBottom = styled.p`
    font-size:${props => props.theme.size.small};
    font-family:${props => props.theme.fam.mregular};
    line-height:27px;
    @media(min-width:768px){
        width:80%;
    }
    @media(min-width:992px){
        padding-right:50px;
        width:100%;
    }
`;

const DataCardsInner = styled.div`
    margin-bottom:30px;
    width:38%;
    min-width:200px;
    padding:20px;
    max-width:220px;
    ${({moveleft}) => 
        moveleft && css`
            margin-right:auto;
        `}
        ${({moveright}) => 
        moveright && css`
            margin-left:auto;
        `}
        @media(min-width:768px){
            ${({moveleft}) => 
        moveleft && css`
            margin-right:unset;
        `}
        ${({moveright}) => 
        moveright && css`
            margin-left:unset;
        `}
        }
        @media(min-width:992px){
        min-width:140px;
        max-width:170px;
        ${({move}) => 
        move && css`
            transform:translateY(30px);
        `}
        
    }
    
`;

const DataCardNum = styled.h5`
    font-size:60px;
    line-height:106px;
    margin:0;
    opacity:25%;
    color:#707070;
`;

const DataCardP = styled.p`
    font-size:10px;
    letter-spacing:1.3px;
    font-family:${props => props.theme.fam.avenirD};
`;

export default DataSets
