'use client'
import styled from "styled-components";



export const TagWrapper = styled.div`
    display: flex;
    width: 6rem;
    height: 2rem;
    border-radius: 14px;
    align-items: center;
    justify-content: space-evenly;
    padding: 1%;
    background: ${({color}) => color};
`

export const TagDot = styled.div`
    border-radius: 999px;
    height: 6px;
    width: 6px;
    background: ${({colorii}) => colorii};
`

export const TagText = styled.p``