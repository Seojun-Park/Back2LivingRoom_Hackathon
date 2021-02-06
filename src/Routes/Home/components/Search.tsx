import React, { useState } from 'react'
import styled from 'styled-components'
import useInput from '../../../hooks/useInput'
import { Collapse, CardBody, Card } from 'reactstrap'
import { HOSPITAL_LIST } from '../../../Components/HospitalList'
import { Link } from 'react-router-dom'

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
    margin-top: 400px;
  `,
    Row: styled.div`
    /* display:flex; */
    margin:0 auto;
    `,
    Title: styled.span`
    ${props => props.theme.typography.title};
    `,
    SearchForm: styled.form`
    display:flex;
    margin:15px auto;
    `,
    Input: styled.input`
    width:600px;
    padding: 8px 12px;
    margin-right: 15px;
    border-radius:4px;
    `,
    Button: styled.button`
    width: 80px;
    background-color:${props => props.theme.palette.primary};
    border:none;
    color:white;
    border-radius:4px;
    &:hover{
        transition:0.2s linear;
        opacity:0.5;
    }
    `,
    Collapse: styled(Collapse)`
    margin:15px auto;
    `,
    Card: styled(Card)`
    margin:10px auto;
    display:flex;
    flex-direction:row;
    padding:15px;
    cursor: pointer;
    &:not(:last-child){
        margin-bottom:15px;
    }
    &:hover{
        transition:0.2s linear;
        background-color: ${props => props.theme.palette.lightgray};
    }
    `,
    Thumbnail: styled.img`
    width: 250px;
    height:120px;
    object-fit:contain;
    `,
    CardTitle: styled.p`
    ${props => props.theme.typography.heading};
    color:black;
    `,
    CardSubtitle: styled.p`
    margin-top:8px;
    ${props => props.theme.typography.caption};
    color:${props => props.theme.palette.gray};
    `
}

const Search = () => {
    const [term, onChangeTerm, setTerm] = useInput("")
    const [collapse, setCollapse] = useState<boolean>(true);
    const [status, setStatus] = useState<string>('')

    const onEntering = () => setStatus('opening');
    const onEntered = () => setStatus('opened');

    const toggle = () => {
        setStatus('loading');
        if (collapse) {
            setCollapse(!collapse)
        } else {

            setTimeout(() => {
                setCollapse(!collapse)
            }, 500);
        }
        setTerm("")
    }

    return (
        <S.Wrapper>
            <S.Row>
                <S.Title>
                    Find a hospital
                </S.Title>
                <S.SearchForm>
                    <S.Input placeholder={"Enter your zipcode"} value={term} onChange={onChangeTerm} type="text" />
                    <S.Button onClick={() => toggle()}>
                        Find
                    </S.Button>
                </S.SearchForm>
            </S.Row>
            {status === 'loading' && <>searching...</>}
            <S.Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
            >
                {HOSPITAL_LIST.map((item, index) => {
                    return (
                        <Link to={`/Service/${item.name}`} style={{ textDecoration: 'none' }}>
                            <S.Card key={index}>
                                <S.Thumbnail src={item.logo} alt="logo" />
                                <CardBody>
                                    <S.CardTitle>{item.name}</S.CardTitle>
                                    <S.CardSubtitle>Phone : {item.phone}</S.CardSubtitle>
                                    <S.CardSubtitle>{item.address}</S.CardSubtitle>
                                    <S.CardSubtitle>Description?</S.CardSubtitle>
                                </CardBody>
                            </S.Card>
                        </Link>
                    )
                })}
            </S.Collapse>
        </S.Wrapper>
    )
}

export default Search