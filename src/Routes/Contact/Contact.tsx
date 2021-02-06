import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../Components/Header'
import ContactForm from './components/ContactForm'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div`
min-height:70vh;
`

const Contact: React.FC<IProps> = () => {
    return (
        <Wrapper>
            <Header page="Contact" />
            <ContactForm />
        </Wrapper>
    )
}

export default Contact