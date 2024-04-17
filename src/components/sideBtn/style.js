'use client'
import styled from "styled-components";
import Image from 'next/image';


export const Button = styled.button`
    width: 2rem;
    position: absolute;
    margin: auto;
    border-top-right-radius: 16rem;
    border-bottom-right-radius: 16rem;
    border: none;
    background-color: #54BCBD;
    height: 120px;
`
export const ButtonImg = styled(Image)`
    height: auto;
    width: 100%;
`
export const ButtonWrapper = styled.div`
    display: none;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 7px;
    background-color: #54BCBD;
    @media screen and (max-width: 1148px){
        display: flex;
    }
`