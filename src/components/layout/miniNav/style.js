'use client'
import styled from "styled-components";
import Image from 'next/image';


export const NavWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 2rem;
    list-style: none;
`

export const NavIcons = styled(Image)``

export const NavItems = styled.li``

export const MiniWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    @media screen and (max-width){
        width: 59%;
    }
`
export const MiniText = styled.p`
    font-weight: 700;
`
export const NavImage = styled(Image)`
    border-radius: 999px;
`
