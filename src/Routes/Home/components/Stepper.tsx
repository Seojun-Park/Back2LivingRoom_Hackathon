import React, { useState } from 'react'
import styled from 'styled-components'
import DropdownComponent from './Dropdown'

interface IStyle {
    color?: string
}

const S = {
    Wrapper: styled.section`
    width: 100%;
    /* height:100vh; */
    max-width: 1180px;
    margin: 0 auto;
    padding: 120px 0;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    margin-top: 500px;
  `,
    Row: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:90%;
    margin:0 auto;
    `,
    Title: styled.span`
    ${props => props.theme.typography.title};
    `,
    SearchForm: styled.form`
    width: 100%;
    display:flex;
    margin:15px auto;
    `,
    Input: styled.input`
    width:80%;
    padding: 8px 12px;
    margin-right: 15px;
    /* border-radius:4px; */
    border: none;
    border-bottom:2px solid ${props => props.theme.palette.darkgray};
    &:focus{
        outline:none;
    }
    `,
    SubmitButton: styled.input`
    width: 120px;
    background-color:${props => props.theme.palette.primary};
    border:none;
    color:white;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:6px;
    &:hover{
        transition:0.2s linear;
        opacity:0.5;
    }
    `,
    Stepper: styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    margin-top: 20px;
    `,
    StepLabel: styled.div`
    height: 100px;
    
    `,
    LabelCol: styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `,
    LabelNum: styled.p`
    width:50px;
    height: 50px;
    background-color:${props => props.theme.palette.primary};
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    padding-top: 7px;
    color:white;
    font-weight:500;
    border-radius:10rem;
    `,
    LabelText: styled.p`
    margin-top: 15px;
    `,
    ButtonGroup: styled.div`
    margin-top: 20px;
    `,
    MoveButton: styled.button<IStyle>`
    width: 80px;
    height: 40px;
    border:none;
    border-radius:4px;
    color:white;
    background-color:${props => props.color};
    margin-right: 10px;
    text-transform: uppercase;
    &:hover{
        opacity:0.5;
        transition:0.2s linear;
    }
    `
}

const steps = ['Select', 'Select your location', 'done']



const Stepper = () => {
    const [step, setStep] = useState<number>(0)
    const [skipped, setSkipped] = useState(new Set<number>())
    const [item, setItem] = useState<[]>([])

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <DropdownComponent step={step} setItem={setItem} />;
            case 1:
                return <DropdownComponent step={step} setItem={setItem} />;
            case 2:
                return 'step2';
            default:
                return 'none';
        }
    }
    const isStepOptional = (step: number) => {
        return step === 1;
    }

    const isSkipped = (step: number) => {
        return skipped.has(step);
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if (isSkipped(step)) {
            newSkipped = new Set(newSkipped)
            newSkipped.delete(step);
        }
        setStep((prev) => prev + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => {
        setStep(prev => prev - 1)
    }

    const handleSkip = () => {
        if (!isStepOptional(step)) {
            throw new Error("You can't skip")
        }
        setStep(prev => prev + 1)
        setSkipped(prev => {
            const newSkip = new Set(prev.values());
            newSkip.add(step)
            return newSkip
        })
    }

    const handleReset = () => {
        setStep(0)
    }

    return (
        <S.Wrapper>
            <S.Row>
                <S.Title>I'm looking for...</S.Title>
            </S.Row>
            <S.Row>
                <S.Stepper>
                    {steps.map((label, idx) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {}
                        if (isStepOptional(idx)) {
                            labelProps.optional = <span>Optional</span>
                        }
                        if (isSkipped(idx)) {
                            stepProps.completed = false;
                        }
                        return (
                            <S.StepLabel key={label} {...stepProps}>
                                <S.LabelCol>
                                    <S.LabelNum>{idx}</S.LabelNum>
                                    <S.LabelText {...labelProps}>{label}</S.LabelText>
                                </S.LabelCol>
                            </S.StepLabel>
                        )
                    })}
                </S.Stepper>
                <S.ButtonGroup>
                    {step === steps.length ? (
                        <div style={{ marginTop: '15px' }}>
                            <span>All step done</span>
                            <S.MoveButton onClick={handleReset} color={'gray'} >reset</S.MoveButton>
                        </div>
                    ) :
                        <div style={{ marginTop: '15px' }}>
                            <S.Row>{getStepContent(step)}</S.Row>
                            <div style={{ marginTop: '15px' }}>
                                <S.MoveButton disabled={step === 0} onClick={handleBack} color={'red'} >back</S.MoveButton>
                                {isStepOptional(step) && (
                                    <S.MoveButton onClick={handleSkip} color={'green'} >Skip</S.MoveButton>
                                )}
                                <S.MoveButton onClick={handleNext} color={'blue'}>
                                    {step === steps.length - 1 ? 'finish' : 'next'}
                                </S.MoveButton>
                            </div>
                        </div>
                    }
                </S.ButtonGroup>
            </S.Row>
        </S.Wrapper>
    )
}

export default Stepper;