'use client'
import styled from "styled-components";
import Image from 'next/image';

export const HeaderHeading = styled.h1`
    text-align: left;
`

export const HeaderText = styled.p`
    text-align: left;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 63%;
`
export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 3rem;
    justify-content: space-between;
`

export const SearchWrapper = styled.div`
    display: flex;
    position: relative;
    padding: 1%;
    width: 36%;
    border-radius: 9px;
    height: 40px;
    border: none;
    background: white;
`

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    padding-left: 11%;
    &:focus {
        outline: none;
    }
`

export const SearchIcon = styled(Image)`
    position: absolute;
    left: 0;
    margin-left: 2%;
    align-self: center;
`