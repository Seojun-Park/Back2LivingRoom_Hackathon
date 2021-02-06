import React from 'react'
import styled from 'styled-components'
import InputWithLabel from '../../../Components/InputWithLabel';
import useInput from '../../../hooks/useInput'

const S = {
    Wrapper: styled.div`
    margin-top: 270px;
    width: 100%;
    min-height:70vh;
    `,
    Container: styled.div`
    width:80%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;

    `,
    Form: styled.form`
    width:90%;
    max-width:800px;
    min-height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    border: 1px solid #333;
    padding:30px 50px;
    `,
    FormRow: styled.div`
    margin:15px;
    display:flex;
    flex-direction: row;
    align-items:center;
    `,
    Input: styled(InputWithLabel)`
    width: 200px;
    border:none;
    border-bottom: 1px solid #333;
    `
}



const ContactForm = () => {
    const [email, onChangeEmail, setEmail] = useInput("")
    const [name, onChangeName, setName] = useInput("")
    const [content, onChangeContent, setContent] = useInput("")

    return (
        <S.Wrapper>
            <S.Container>
                <S.Form>
                    <S.FormRow>Contact us</S.FormRow>
                    <S.FormRow>
                        <S.Input type="text" label={'your name'} value={name} onChange={onChangeName} placeholder={'Enter your name'} />
                        <S.Input type="text" label="your email address" value={email} onChange={onChangeEmail} placeholder={"Enter your email"} />
                    </S.FormRow>
                    <S.FormRow>
                        <S.Input type="textarea" label={"content"} placeholder="contact" value={content} onChange={onChangeContent} />
                    </S.FormRow>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    )
}

export default ContactForm