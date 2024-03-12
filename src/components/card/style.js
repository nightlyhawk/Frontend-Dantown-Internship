'use client'
import styled from "styled-components";
import Image from 'next/image';


export const CardContainer = styled.div`
    background: #E0F3F3;
    display: flex;
    justify-content: center;
    height: 200px;
    border: none;
    width: 100%;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
`
export const CardImg = styled(Image)`
    height: 200px;
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 31%;
`
export const CardHeading = styled.h3`
    text-align: center;
`

export const CardText = styled.p`
    text-align: center;
`

export const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    width: 100%;
    height: 6rem;
    gap: 1rem;
    justify-content: center;
`