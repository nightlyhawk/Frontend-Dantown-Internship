'use client'
import styled from "styled-components"
import Image from 'next/image';


export const FloatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 262px;
    width: 21%;
    position: fixed;
    bottom: 0;
    transform: translate(-1rem, -5rem);
    z-index: 1;
    background: white;
`
export const FloatTag = styled.div`
    width: 25%;
    height: 21px;
    background: #072E75;
    color: white;
    align-self: center;
    border-radius: 10px;
    margin-bottom: 1rem;
`

export const FloatHeader = styled.div`
    display: flex;
    padding: 5%;
    height: 41px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    align-items: center;
    justify-content: space-between;
    background: #5DC2C4;
    margin-bottom: 8px;
`
export const FloatHeading = styled.h3`
    color: white;
`

export const FloatIcon = styled(Image)`
    cursor: pointer;
`

export const FloatChat = styled.div`
    display: flex;
    height: 168px;
    flex-direction: column;
    background: white;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 2px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555;       
    }
`

export const FloatBubble = styled.div`
    width: max-content;
    background: ${({bg}) => bg};
    color: ${({bg}) => bg !== "#E0F3F3"? "white": "#5DC2C4"};
    display: flex;
    padding: 2%;
    width: max-content;
    height: 40px;
    border-radius: 10px;
    align-items: center;
`
export const FloatText = styled.p`
    text-align: center;
`

export const FloatBubbleWrap = styled.div`
    display: flex;
    padding: 0 3%;
    gap: 2%;
    justify-content: ${({position}) => position};
    align-items: flex-end;
    margin-bottom: 1rem;
`
export const FloatBubbleWrapMe = styled(FloatBubbleWrap)`
    align-self: right;
`
export const FloatInput = styled.input`
    border: none;
    width: 80%;
    &:focus {
        outline: none;
    }
`
export const FloatInputContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid grey;
    border-radius: 16px;
    height: 35px;
    padding: 1%;
    width: 74%;
`
export const FloatSendBtn = styled.button`
    position: ${({pos}) => pos? "absolute":""};
    right: 0;
    background: transparent;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
export const FloatBtn = styled.button`
    position: ${({pos}) => pos? "absolute":""};
    right: 0;
    background: transparent;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const FloatInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const FloatEmoji = styled.div`
    margin-left: -40rem;
    margin-bottom: 19rem;
`