import React from 'react';
import styled from 'styled-components';
interface IProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent) => any,
    placeholder: string;
    type: string;
}

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: #999;
    margin-bottom: 0.25rem;
`;

const Input = styled.input`

    width: 100%;
    border: 1px solid #333;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid #333;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel: React.FC<IProps> = ({ label, type, ...rest }) => {
    const handleInput = (type: string) => {
        switch (type) {
            case 'text':
                return <Input {...rest} />;
            case 'textarea':
                return <Textarea {...rest} />;
            default:
                return null;
        }
    }
    return (

        <Wrapper>
            <Label>{label}</Label>
            {handleInput(type)}
        </Wrapper>
    );
}

export default InputWithLabel;