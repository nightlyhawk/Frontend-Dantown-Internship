'use client'
import styled, {keyframes} from 'styled-components'
import Link from 'next/link'
import Image from 'next/image';


const open = keyframes`
    from {
        opacity: 0;
        position: relative;
        top: -130vh;
    }
    to {
        opacity: 1;
        position: relative;
        top: 0;
    }
`

export const MenuWrapper = styled.div`
    width: 18%;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 2%;
    padding: 3% 0 0 0;
    animation: ${open} 1s ease;
    height: auto;
`

export const MenuLink = styled(Link)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    text-decoration: none;
    color: #8695A0;
    padding: 4% 0% 5% 15%;
    cursor: pointer;

    &.active {
        color: #54BCBD;
        background-image: linear-gradient(to right, #d6f1f1 , white);
    }
    .unclicked {
        color: white;
        background: rgba(17, 115, 171, 1);
    }
`
export const MenuIcon = styled(Image)`
    height: 25px;
    margin-right: 10%;
`

export const MenuText = styled.p`
    align-self: center;
`
export const MenuImg = styled(Image)`
    margin-left: 15%;
`