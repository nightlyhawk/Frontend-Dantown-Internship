'use client'
import styled from "styled-components";
import Image from 'next/image';


export const TopWrap = styled.div`
    display: flex;
    gap: 3%;
    padding-bottom: 1rem;
`
export const ChatHeading = styled.h1``

export const ChatCount = styled.div`
    display: flex;
    width: 30px;
    align-items: center;
    justify-content: center;
    background: #E0F3F3;
    border-radius: 8px;
`
export const ChatText = styled.p`
    color: #54BCBD;
`
export const ChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`
export const ChatIcon = styled(Image)`
    
`
export const ChatBtn = styled.button`
    transform: translate(-2rem, -8rem);
    position: fixed;
    right: 0;
    bottom: 0;
    background: transparent;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
`