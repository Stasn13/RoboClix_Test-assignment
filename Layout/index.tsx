import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Input} from "@material-ui/core";
import dynamic from "next/dynamic";

interface Layout {
    children?: any;
}

const Header = styled.div`
    background: #000;
    min-height: 64px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px 0;
    color: #fff;
    cursor: pointer;
    transition: 0.1s;
`;

const Button = styled.div`
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px 0;
    font-size: 14px;
    text-transform: capitalize;
    color: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
    font-weight: 300;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 8px;
    border: 1px solid #fff;
    text-align: center;
    white-space: pre;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
`;

const CustomInput = styled(Input)`
    margin-right: 20px;
    
    .MuiInputBase-input {
        color: #fff;
        &::placeholder {
            color: #fff
        }
    }
   
    &:after {
            border-bottom: 2px solid #fff !important;
    }
`;

const SmallButton = styled(Button)`
    border: none;
    &:hover{
        filter: brightness(1.2)
    }
`;

const Controls = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    height: 100vh;
`;

const Name = styled.div`
    color: #fff;
    margin: auto 5px;
    display: flex;
`;

const Layout = (props: Layout) => {
    const [name, setName] = useState(localStorageName);
    let storedName = typeof window !== "undefined" && window.localStorage.getItem('userName');
    const setUserName = () => {
        setName(nameInput.current.children[0].value);
        typeof window !== "undefined" && window.localStorage.setItem('userName', nameInput.current.children[0].value);
    };

    const nameInput = useRef(null);

    /*useEffect(() => {
        storedName = name;
    }, [name]);*/

    return (
        <Wrapper>
            <Header>
                <Link href="/">
                    <Logo>Blog App</Logo>
                </Link>

                <Controls>
                    {!storedName ?
                    <Name>
                        <CustomInput
                            placeholder={'Enter your name'}
                            ref={nameInput}
                        />
                        <SmallButton onClick={setUserName}>Save Name</SmallButton>
                    </Name>
                        :
                    <Name>Hi, {name}!(<a onClick={() => {
                        setName(undefined);
                        typeof window !== "undefined" && window.localStorage.removeItem('userName')}}>edit</a>)
                    </Name>
                    }
                    <Link href="/posts/new">
                        <Button>+ Add New Post</Button>
                    </Link>
                </Controls>
            </Header>
            {props.children}
        </Wrapper>
    );
};

export default Layout;

const localStorageName = typeof window !== "undefined" && window.localStorage.getItem('userName');