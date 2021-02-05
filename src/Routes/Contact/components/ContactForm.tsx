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
    min-height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    border: 1px solid #333;
    padding:30px 50px;
    `,
    FormRow: styled.div`
    margin:15px;
    `,
}

// const Input = styled.input`
//      font-size: 18px;
//   padding: 10px 10px 10px 5px;
//   display: block;
//   width: 300px;
//   border: none;
//   border-bottom: 1px solid #757575;
//     &:not(:nth-child(2)){
//         margin-right:15px;
//     }
//     &:focus {
//         outline:none;
//     }
//     `;

const Textarea = styled.textarea`
    border:none;
    border-bottom:1px solid #333;
  `;

// const Label = styled.label`
// color:#999;
// font-size:18px;
// position:absolute;
// pointer-events:none;
// left:5px;
// top:10px;
// transition: 0.2s ease all;
// ${Input}:focus ~ & {
//     top:-18px;
//     font-size:14px;
//     color:#5264AE
// }
// `;



const ContactForm = () => {
    const [email, onChangeEmail, setEmail] = useInput("")
    const [name, onChangeName, setName] = useInput("")
    const [subject, onChangeSubject, setSubject] = useInput("")
    const [content, onChangeContent, setContent] = useInput("")

    return (
        <S.Wrapper>
            <S.Container>
                <S.Form>
                    <S.FormRow>Contact us</S.FormRow>
                    <S.FormRow>
                        <InputWithLabel label={"your name"} value={name} onChange={onChangeName} placeholder={"Enter your name"} />
                        <InputWithLabel label={"your email address"} value={email} onChange={onChangeEmail} placeholder={"Enter your email address"} />
                    </S.FormRow>
                    <S.FormRow>
                        <InputWithLabel label={"subject"} value={subject} onChange={onChangeSubject} placeholder={"Enter your subject"} />
                    </S.FormRow>
                    <S.FormRow>
                        <Textarea placeholder="Email" value={content} onChange={onChangeContent} />
                    </S.FormRow>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    )
}

export default ContactForm