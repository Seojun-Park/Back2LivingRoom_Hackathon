import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


interface IProps {
    step: number;
    setItem: any;
}

const S = {
    Wrapper: styled.div`
    width:100%;

    `,
    Container: styled.div`
    display:flex;
    justify-content:center;
    border:1px solid #333;
    `
}



const DropdownComponent: React.FC<IProps> = ({ step, setItem }) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [menu, setMenu] = useState<[]>([])

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dropMenu = (step: number, setMenu: React.SetStateAction<any>) => {
        switch (step) {
            case 0:
                return setMenu(["Coloscopy", "MRI", "X-Ray"]);
            case 1:
                return setMenu(["California", "New york", "San Fransisco"]);
            case 3:
                return;
            default:
                return;
        }
    }

    useEffect(() => {
        dropMenu(step, setMenu)
    }, [step, setMenu])

    return (
        <S.Wrapper>
            <S.Container style={{ width: '0 auto' }}>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} size='lg'>
                    <DropdownToggle caret>
                        Choose service you want
                    </DropdownToggle>
                    <DropdownMenu right>
                        {menu && menu.map((item, idx) => {
                            return (
                                <DropdownItem key={idx} onClick={() => setItem(item)}>{item}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </S.Container>
        </S.Wrapper>
    )
}

export default DropdownComponent