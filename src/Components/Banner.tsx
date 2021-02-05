import React from 'react'
import styled from 'styled-components'

interface IProps {
    page: string;
}

const S = {
    Wrapper: styled.div`
    height: 250px;
    width:100%;
    background-color:gray;
    position:absolute;
    top:0;
    z-index:1;
    
    `,
    Box: styled.div`
    position:absolute;
    width:100%;
    height:250px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    z-index:2;
    `,
    Title: styled.h3`
    ${props => props.theme.typography.title};
    color:white;
    `
}

const Banner: React.FC<IProps> = ({ page }) => {
    return (
        <S.Wrapper>
            <S.Box>
                <S.Title>{page}</S.Title>
            </S.Box>
        </S.Wrapper>
    )
}

export default Banner