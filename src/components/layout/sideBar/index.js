'use client'
import { useState } from "react";
import { MenuIcon, MenuImg, MenuLink, MenuText, MenuWrapper, Wrapper } from './style'
import { MenuData } from '@/data';
import logo from "../../../assets/images/logo.svg"
import Category from './category';
import { usePathname } from 'next/navigation';
import SideBtn from '@/components/sideBtn';

export default function SideBar(){
    const pathname = usePathname();     
    const [open, setOpen] = useState(false);
    return (
      <Wrapper view={open? '20%' : '1%'}>
        <MenuWrapper view={open? 'flex' : 'none'}>
        <MenuImg src={logo} alt="logo" />
        {MenuData && MenuData.map((item, index) => {
                const isActive = pathname.startsWith(item.href);
                return (
                <MenuLink key={index}
                          href={item.href}
                          className={isActive ? "active": console.log('inactive')}
                >
                    <MenuIcon src={isActive? item.bicon : item.icon} alt={item.text} />
                    <MenuText>{item.text}</MenuText>
                </MenuLink>
            )}
            )
        }
        <Category />
    </MenuWrapper>
    <SideBtn func={() => setOpen(!open)} state={open} />
    </Wrapper>
  )
}
