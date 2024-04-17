'use client'
import styled from "styled-components";
import Image from 'next/image';


export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: white;
    margin-top: 4rem;
    padding: 2%;
`
export const TableHeading = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 3%;
`
export const TableExtraHead = styled.h1``

export const TableIcon = styled(Image)``

export const TableProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 999px;
    background: ${({bg}) => bg};
`

export const TableContainer = styled.table`
`
export const TableHead = styled.thead`
`


export const TableBody = styled.tbody`
`

export const TableHeader = styled.th`
    text-align: ${({position}) => position? position : 'left'};
    color: #8695A0;
`

export const TableRow = styled.tr``

export const TableData = styled.td`
    border-bottom: ${({none}) => none === "none"? "" :"1px solid #ddd"};
    font-weight: 500;
    text-align: ${({none}) => none === "none"? "center" :"left"};
    padding: ${({none}) => none === "none"? "" :"2% 0"};
`
export const TableText = styled.p`
    margin: 0 7%;
`

export const TableInfo = styled.div`
    display: flex;
    align-items: center;
`

export const FirstShape = styled.div`
    height: 30px;
    width: 30px;
    border: none;
    align-content: center;
    margin: auto;
    background-color: #54BCBD;
    border-radius: 6px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`
export const PolygonText = styled.p`
    color: white;
    font-weight: 700;
`