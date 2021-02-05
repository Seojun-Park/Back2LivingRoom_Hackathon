import React from 'react'
import styled from 'styled-components'
import Header from '../../Components/Header'
import { Banner } from './components'

const Wrapper = styled.div`
min-height:70vh;
`

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Banner />
        </Wrapper>
    )
}

export default Home