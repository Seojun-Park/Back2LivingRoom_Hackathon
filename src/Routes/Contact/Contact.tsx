import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div`
min-height:70vh;
`

const Contact: React.FC<IProps> = () => {
    return (
        <Wrapper>
            <Header page="Contact" />
            Contact
            <Footer />
        </Wrapper>
    )
}

export default Contact