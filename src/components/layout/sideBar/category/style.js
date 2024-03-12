'use client'
import styled from "styled-components";
import Image from 'next/image';

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    padding-left: 15%;
`
export const CategoryHeading = styled.h2`
    padding-bottom: 1rem;
`

export const CategoryContainer = styled.ul`
    display: flex;
    flex-direction: column;
`

export const CategoryItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* margin-bottom: 1rem; */
    padding-bottom: 5%;
`

export const CategoryText = styled.p``

export const CategoryIcon = styled(Image)`
    margin-right: 8%;
`