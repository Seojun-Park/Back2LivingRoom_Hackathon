import React from 'react';
import styled from 'styled-components';

const S = {
    Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 780px;
    background: no-repeat center/cover url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  `,
    Cover: styled.div`
  position:absolute;
  top:0;
  width:100%;
  height: 780px;
  background-color:black;
  opacity:0.3;
  z-index: 1;
  `,
    Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    z-index:2;
  `,
    Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
  `,
    Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
    Button: styled.button`
    width: 5rem;
  `
};

const Banner = () => {
    return (
        <S.Background>
            <S.Cover />
            <S.Wrapper>
                <S.Title>
                    Lorem ipsum
          <br />
          Dolor sit amet
        </S.Title>
                <S.Description>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          <br />
          labore et dolore magna aliqua. Nisl tincidunt eget nullam non.
        </S.Description>
                <S.Button>
                    Lorem
        </S.Button>
            </S.Wrapper>
        </S.Background>
    );
};

export default Banner;
