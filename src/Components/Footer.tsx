import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Wrapper: styled.footer`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 60px 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top:1px solid ${props => props.theme.palette.gray};
  `,
  Info: styled.div`
  padding-left: 30px;
  `,
  Logo: styled.span`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.gray};
    display: inline-block;
    font-weight: 400;
    font-size: 1rem;;
    margin-bottom: 2rem;
  `,
  Menu: styled.ul`
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled.h4`
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.secondary};
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled.div`
    ${props => props.theme.typography.body};
    color: ${props => props.theme.palette.gray};
    display: inline-block;
    margin-bottom: 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  Bottom: styled.div`
    width: 100%;
    color: ${props => props.theme.palette.gray};
    margin-top: 40px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${props => props.theme.palette.lightgray};
    span {
      ${props => props.theme.typography.caption};
    }
  `,
  Row: styled.div`
  
  `
};

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.MenuTitle>Creators</S.MenuTitle>
      <S.Row>
        <S.Logo>James Chao : 42@42.student.fr</S.Logo>
      </S.Row>
      <S.Row>
        <S.Logo>Jin Park : 42@42.student.fr</S.Logo>
      </S.Row>
    </S.Info>
    <S.Menu>
      <S.MenuTitle>Quick Links</S.MenuTitle>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <S.MenuItem>Home</S.MenuItem>
      </Link>
      <Link to="/About" style={{ textDecoration: 'none' }}>
        <S.MenuItem>About Us</S.MenuItem>
      </Link>
      <Link to="/Contact" style={{ textDecoration: 'none' }}>
        <S.MenuItem>Contact Us</S.MenuItem>
      </Link>
    </S.Menu>
    <S.Bottom>
      <span>Jame | Jin Park © 2021</span>
    </S.Bottom>
  </S.Wrapper>
);

export default Footer;
