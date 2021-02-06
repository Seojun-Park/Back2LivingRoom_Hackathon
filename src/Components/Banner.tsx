import React from 'react'
import styled from 'styled-components'

interface IProps {
    page: string;
}

interface IStyle {
    url: string
}

const S = {
    Wrapper: styled.div<IStyle>`
    height: 250px;
    width:100%;
    background: no-repeat center/cover url(${props => props.url});
    position:absolute;
    top:0;
    z-index:0;
    `,
    Cover: styled.div`
    position:absolute;
    top:0;
    width:100%;
    height: 250px;
    background-color:black;
    opacity:0.3;
    z-index: 1;
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
text-shadow: 3px 5px 2px #474747;
    `
}

const bannerIMG = [
    {
        name: "Service",
        url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        name: 'Contact',
        url: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
        name: 'About',
        url: "https://images.unsplash.com/photo-1571103547549-82a4afcb783f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    }
]

const Banner: React.FC<IProps> = ({ page }) => {
    const bg = bannerIMG.find((item) => item.name === page);

    if (!bg) {
        return <>loading...</>
    }
    return (
        <S.Wrapper url={bg.url}>
            <S.Cover />
            <S.Box>
                <S.Title>{page}</S.Title>
            </S.Box>
        </S.Wrapper>
    )
}

export default Banner