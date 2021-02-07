import React from 'react'
import { AboutUs } from './components'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'

const Wrapper = styled.div`
min-height:70vh;
`

const About = () => {
    return (
        <Wrapper>
            <Header page='About' />
            <Banner page='About' />
            <AboutUs />
            <Footer />
        </Wrapper>
    )
}

export default About