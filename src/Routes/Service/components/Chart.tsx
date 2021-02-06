import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Table } from 'reactstrap'
import { HOSPITAL_LIST } from '../../../Components/HospitalList'
import { ArrowDown, ArrowUp } from '../../../Components/Icon'

interface IProps {
    params: any;
}

interface IData {
    name: string;
    nameRow: string;
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

interface IStyle {
    color: string;
}

const S = {
    Wrapper: styled.div`
    margin-top: 270px;
    width: 100%;
    min-height:70vh;
    `,
    Title: styled.h3`
    ${props => props.theme.typography.subtitle};
    margin-bottom: 25px;
    `,
    Price: styled.p<IStyle>`
    color:${props => props.color};
    `
}



const Chart: React.FC<IProps> = ({ params }) => {
    const [data, setData] = useState<IData>();
    const [others, setOthers] = useState<IData[]>([])
    useEffect(() => {
        const main = HOSPITAL_LIST.find((item) => {
            if (item.name === params.name) {
                return true;
            }
            return false;
        })
        if (main) {
            setData(main)
        }
    }, [setData, params])

    useEffect(() => {
        if (data) {
            const arr = HOSPITAL_LIST.filter(elem => {
                if (elem.name !== data.name) {
                    return true
                }
                return false
            }
            )
            setOthers(arr)
        }
    }, [data, setOthers])

    if (!data || !others) {
        return <>loading...</>
    }
    return (
        <S.Wrapper>
            <Container>
                <S.Title>{data.name}</S.Title>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Colonoscopy</th>
                            <th>MRI</th>
                            <th>X-Ray</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: `30%` }}>$ {data.price.Colonoscopy}</td>
                            <td style={{ width: `30%` }}>$ {data.price.MRI}</td>
                            <td style={{ width: `30%` }}>$ {data.price.XRay}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Hospital name</th>
                            <th>Colonoscopy</th>
                            <th>MRI</th>
                            <th>X-Ray</th>
                        </tr>
                    </thead>
                    <tbody>
                        {others && others.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td style={{ width: `25%` }}>{item.name}</td>
                                    <td style={{ width: `25%` }}>
                                        <S.Price color={`${item.price.Colonoscopy > data.price.Colonoscopy ? 'red' : 'green'}`}>
                                            $ {item.price.Colonoscopy} {item.price.Colonoscopy > data.price.Colonoscopy ? <ArrowUp /> : <ArrowDown />}
                                        </S.Price>
                                    </td>
                                    <td style={{ width: `25%` }}>
                                        <S.Price color={`${item.price.MRI > data.price.MRI ? 'red' : 'green'}`}>
                                            $ {item.price.MRI} {item.price.MRI > data.price.MRI ? <ArrowUp /> : <ArrowDown />}
                                        </S.Price>
                                    </td>
                                    <td style={{ width: `25%` }}>
                                        <S.Price color={`${item.price.XRay > data.price.XRay ? 'red' : 'green'}`}>
                                            $ {item.price.XRay} {item.price.XRay > data.price.XRay ? <ArrowUp /> : <ArrowDown />}
                                        </S.Price>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </S.Wrapper>
    )
}

export default Chart