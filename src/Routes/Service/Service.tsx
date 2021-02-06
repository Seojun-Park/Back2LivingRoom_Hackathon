import React from 'react'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import { RouteComponentProps } from 'react-router-dom'
import { Chart } from './components'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div``

const Service: React.FC<IProps> = ({ match }) => {
    const { params } = match
    if (!params) {
        return <>loading...</>
    }
    return (
        <Wrapper>
            <Header page="Service" />
            <Banner page="Service" />
            <Chart params={params} />
            <Footer />
        </Wrapper>
    )
}

export default Service