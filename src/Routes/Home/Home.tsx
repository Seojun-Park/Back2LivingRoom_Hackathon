import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { Banner, Search, Stepper } from './components'

interface IProps extends RouteComponentProps { }

const Wrapper = styled.div`
min-height:70vh;
`

const Home: React.FC<IProps> = () => {
    return (
        <Wrapper>
            <Header page="Home" />
            <Banner />
            {/* <Stepper /> */}
            <Search />
            <Footer />
        </Wrapper>
    )
}

export default Home