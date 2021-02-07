import React, { useState } from 'react'
import styled from 'styled-components'
import useInput from '../../../hooks/useInput'
import { Collapse, CardBody, Card } from 'reactstrap'
import { HOSPITAL_LIST } from '../../../Components/HospitalList'
import { Link } from 'react-router-dom'

interface IData {
    name: string;
    nameRow: string
    address: string;
    zipcode: string;
    phone: string;
    web: string;
    logo: string;
    price: {
        Colonoscopy: number;
        MRI: number;
        XRay: number;
    };
}

const S = {
    Wrapper: styled.section`
    width: 100%;
    /* height:100vh; */
    max-width: 1180px;
    margin: 0 auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    margin-top: 500px;
  `,
    Row: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:90%;
    margin:0 auto;
    `,
    Title: styled.span`
    ${props => props.theme.typography.title};
    `,
    SearchForm: styled.form`
    width: 100%;
    display:flex;
    margin:15px auto;
    `,
    Input: styled.input`
    width:80%;
    padding: 8px 12px;
    margin-right: 15px;
    /* border-radius:4px; */
    border: none;
    border-bottom:2px solid ${props => props.theme.palette.darkgray};
    &:focus{
        outline:none;
    }
    `,
    SubmitButton: styled.input`
    width: 120px;
    background-color:${props => props.theme.palette.primary};
    border:none;
    color:white;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:6px;
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
    const [data, setData] = useState<IData[]>([])

    const handleSearch = () => {
        const arr = HOSPITAL_LIST.filter(item => {
            if (item.zipcode.includes(term)) {
                return true;
            }
            else if (item.nameRow.includes(term)) {
                return true;
            }
            return false;
        })
        setTerm("")
        setData(arr)
    }

    return (
        <S.Wrapper>
            <S.Row>
                <S.Title>
                    Find a hospital
                </S.Title>
                <S.SearchForm onSubmit={handleSearch}>
                    <S.Input placeholder={"Enter your zipcode or hospital name"} value={term} onChange={onChangeTerm} type="text" />
                    <S.SubmitButton type="submit" value="Find" />
                </S.SearchForm>
            </S.Row>
            <S.Row>
                {data && data.map((item, index) => {
                    return (
                        <Link to={`/Service/${item.name}`} style={{ textDecoration: 'none' }} key={index}>
                            <S.Card>
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
            </S.Row>
        </S.Wrapper>
    )
}

export default Search