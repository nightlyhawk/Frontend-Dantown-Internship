'use client'
import styled from "styled-components";


export const TabContainter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 1px solid #D6DCE0;
    padding-bottom: 4%;
    width: 69%;
`
export const TabTitle = styled.h3``

export const TabText = styled.p`
    color: #8695A0;
`

export const TabImg = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 999px;
    background: ${({color}) => color};
`
export const TabWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 4%;
    margin-bottom: 1rem;
    cursor: pointer;
    @media screen and (max-width: 941px){
        gap: 2%;   
    }
`
export const TabLit = styled.div`
    display: flex;
    border-radius: 999px;
    background: #F4694C;
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: center;
    color: white;
`