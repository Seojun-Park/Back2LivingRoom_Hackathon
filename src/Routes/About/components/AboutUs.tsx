import React from 'react';
import Figure from './Figure'
import styled from 'styled-components';
import useScrollClipPath from '../../../hooks/useScrollClipPath'

interface IStyle {
  url: string;
}

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
  `,
  Row: styled.div``,
  We: styled.div`
  margin-top: 70px;
  `,
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
  Subtitle: styled.h3`
  ${props => props.theme.typography.heading};
  font-weight:600;
  margin: 20px 0;
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
  Col: styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `,
  Image: styled.div<IStyle>`
    width: 250px;
    height: 250px;
    background: no-repeat center/cover gray;
    background: no-repeat center/cover url(${props => props.url});
    &:not(:last-child){
        margin-right: 20px;
    }
  `,
  ImageDesc: styled.span`
  ${props => props.theme.typography.description};
  color: ${props => props.theme.palette.gray};
  `
};

const FEAURE_ITEMS = [
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci distinctio nihil. Esse sequi officia velit. Temporibus tempore sequi voluptas beatae saepe blanditiis architecto necessitatibus vero deserunt, expedita, cupiditate nobis.',
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci distinctio nihil. Esse sequi officia velit. Temporibus tempore sequi voluptas beatae saepe blanditiis architecto necessitatibus vero deserunt, expedita, cupiditate nobis.',
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci distinctio nihil. Esse sequi officia velit. Temporibus tempore sequi voluptas beatae saepe blanditiis architecto necessitatibus vero deserunt, expedita, cupiditate nobis.'
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
          <S.Label>About Lorem</S.Label>
          <S.Title>Lorem</S.Title>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem blanditiis non quo dolorum officia culpa ab ex eos laborum inventore reprehenderit minima, molestias libero? Earum voluptates esse eius minus.
          </S.Description>
        </S.TextWrapper>
        <Figure />
      </S.Row>
      <S.Row>
        <S.List>
          {FEAURE_ITEMS.map((item, index) => (
            <S.ListItem key={index}>
              <span>•</span> {item}
            </S.ListItem>
          ))}
        </S.List>
      </S.Row>
      <S.We>
        <S.TextWrapper>
          <S.Subtitle>Hi We are James and Jin</S.Subtitle>
          <S.Description>
            Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.
                </S.Description>
          <S.ImageBox {...animatedImage[0]}>
            <S.Col>
              <S.Image url={"https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/profile.jpeg?alt=media&token=e0ab66cc-4252-4938-90e8-800da11720fa"} />
              <S.ImageDesc>Jinpark</S.ImageDesc>
            </S.Col>
            <S.Col>
              <S.Image url={"https://i2.wp.com/www.un.org/pga/72/wp-content/uploads/sites/51/2017/08/dummy-profile-1.jpg?resize=300%2C300&ssl=1"} />
              <S.ImageDesc>James Chao</S.ImageDesc>
            </S.Col>
          </S.ImageBox>
        </S.TextWrapper>
      </S.We>
    </S.Wrapper>
  );
};

export default Feature;
