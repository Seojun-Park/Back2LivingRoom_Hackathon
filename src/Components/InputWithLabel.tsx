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
        /* margin-top: 1rem; */
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color:${props => props.theme.palette.gray};
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    width: 250px;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 18px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    &:focus{
        outline:none;
    }
`;

const Textarea = styled.textarea`
    width: 520px;
    outline: none;
    border-radius: 0px;
    line-height: 1.5rem;
    font-size: 18px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    resize:none;
    &:focus{
        outline:none;
    }
`;


const InputWithLabel: React.FC<IProps> = ({ label, type, ...rest }) => {
    const handleInput = (type: string) => {
        switch (type) {
            case 'text':
                return <Input {...rest} />;
            case 'textarea':
                return <Textarea {...rest} rows={5} />;
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