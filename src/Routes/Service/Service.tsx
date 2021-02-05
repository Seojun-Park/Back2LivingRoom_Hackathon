import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div`
min-height:70vh;
`

const Service: React.FC<IProps> = () => {
    return (
        <Wrapper>
            <Header page="Service" />
            about
            <Footer />
        </Wrapper>
    )
}

export default Service