import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import ContactForm from './components/ContactForm'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div`
min-height:70vh;
`

const Contact: React.FC<IProps> = () => {
    return (
        <Wrapper>
            <Header page="Contact" />
            <Banner page="Contact" />
            <ContactForm />
            <Footer />
        </Wrapper>
    )
}

export default Contact