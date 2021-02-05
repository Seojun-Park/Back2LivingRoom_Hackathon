import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useScrollClipPath from '../../../hooks/useScrollClipPath'

const S = {
    Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    margin-top: 680px;
  `,
    Row: styled.div``,
    TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  `,
    Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
    Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
    Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
    List: styled.ul`
    width: fit-content;
    margin-bottom: 2rem;
  `,
    ListItem: styled.p`
    ${props => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${props => props.theme.palette.lightgray};
    span {
      color: ${props => props.theme.palette.secondary};
    }
  `,
    TextButton: styled.button`
    width: fit-content;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
    ImageBox: styled.div`
    display:flex;
    justify-content:center;
    flex-direction:row;
    margin:10px auto;
    `,
    Image: styled.div`
    width: 250px;
    height: 250px;
    background: no-repeat center/cover gray;
    /* background: no-repeat center/cover url('https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa'); */
    &:not(:last-child){
        margin-right: 20px;
    }
  `
};

const FEAURE_ITEMS = [
    'item1',
    'item2',
    'item3',
];

const Feature = () => {
    const animatedImage = {
        0: useScrollClipPath('down'),
        1: useScrollClipPath('down')
    }

    return (
        <S.Wrapper>
            <S.Row>
                <S.TextWrapper>
                    <S.Label>About Us</S.Label>
                    <S.Title>Hi We are James and Jin</S.Title>
                    <S.Description>
                        Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.
                </S.Description>
                    <S.ImageBox {...animatedImage[0]}>
                        <S.Image />
                        <S.Image />
                    </S.ImageBox>
                </S.TextWrapper>
            </S.Row>
            <S.Row>
                <S.List>
                    {FEAURE_ITEMS.map((item, index) => (
                        <S.ListItem key={item}>
                            <span>•</span> {item}
                        </S.ListItem>
                    ))}
                </S.List>
                <Link to='/About'>
                    <S.TextButton>Read more about us</S.TextButton>
                </Link>
            </S.Row>
        </S.Wrapper>
    );
};

export default Feature;
