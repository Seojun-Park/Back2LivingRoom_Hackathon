import React from 'react'
import styled from 'styled-components'
import { ArrowRight } from '../../../Components/Icon';
import InputWithLabel from '../../../Components/InputWithLabel';
import useInput from '../../../hooks/useInput'

const S = {
    Wrapper: styled.div`
    position:absolute;
    /* margin-top: 150px; */
    height:100vh;
    top:0;
    width: 100%;
    background:no-repeat center/cover url("https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/googlemap.jpg?alt=media&token=77a47013-abcc-4620-b7d9-38415a5f0549");
    z-index:0;
    display:flex;
    justify-content:center;
    align-items:center;
    `,
    Cover: styled.div`
    position:absolute;
    background-color:black;
    height:100%;
    width:100%;
    opacity:0.5;
    z-index:1;
    `,
    Container: styled.div`
    width:80%;
    margin:0 auto;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    z-index:3;
    `,
    Form: styled.form`
    width:90%;
    background-color:white;
    max-width:800px;
    min-width:600px;
    min-height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:10px;
    border-radius:10px;
    border: 1px solid #333;
    `,
    Title: styled.h3`
    font-size: 2rem;
    font-weight:600;
    margin:30px 15px;
    `,
    FormRow: styled.div`
    margin:15px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    `,
    Input: styled(InputWithLabel)`
    border:none;
    border-bottom: 1.5px solid ${props => props.theme.palette.gray};
    margin-right: 20px;
    ::-webkit-input-placeholder{
        font-size:18px;
        color: ${props => props.theme.palette.darkgray};
    }
    ::-moz-placeholder{
        font-size:18px;
        color: ${props => props.theme.palette.darkgray};
    }
    :-ms-input-placeholder{
        font-size:18px;
        color: ${props => props.theme.palette.darkgray};
    }
    :-moz-placeholder{
        font-size:18px;
        color: ${props => props.theme.palette.darkgray};
    }
    `,
    Button: styled.button`
    background-color: ${props => props.theme.palette.primary};
    color:white;
    ${props => props.theme.typography.description};
    /* text-align:center; */
    border-radius:10rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    margin:15px;
    padding: 12px;
    width:120px;
    height: 40px;
    -webkit-box-shadow: 0px 10px 24px 1px rgba(0,99,255,0.38); 
box-shadow: 0px 10px 24px 1px rgba(0,99,255,0.38);
&:hover{
    background-color:#333;
    transition:0.2s linear;
    -webkit-box-shadow: 4px 10px 18px 1px rgba(51,51,51,0.8); 
box-shadow: 4px 8px 18px 1px rgba(51,51,51,0.8);
}
    `
}



const ContactForm = () => {
    const [email, onChangeEmail] = useInput("")
    const [name, onChangeName] = useInput("")
    const [content, onChangeContent] = useInput("")

    return (
        <S.Wrapper>
            <S.Cover />
            <S.Container>
                <S.Form>
                    <S.Title>Contact us</S.Title>
                    <S.FormRow>
                        <S.Input type="text" label={'Your name'} value={name} onChange={onChangeName} placeholder={'Enter your name'} />
                        <S.Input type="text" label={"Your email address"} value={email} onChange={onChangeEmail} placeholder={"Enter your email"} />
                    </S.FormRow>
                    <S.FormRow>
                        <S.Input type="textarea" label={"Message"} placeholder="Your message here..." value={content} onChange={onChangeContent} />
                    </S.FormRow>
                    <S.FormRow>
                        <S.Button>Send<ArrowRight /></S.Button>
                    </S.FormRow>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    )
}

export default ContactForm