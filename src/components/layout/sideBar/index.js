'use client'
import { MenuIcon, MenuImg, MenuLink, MenuText, MenuWrapper } from './style'
import { MenuData } from '@/data';
import logo from "../../../assets/images/logo.svg"
import Category from './category';
import { usePathname } from 'next/navigation';

export default function SideBar(){
    const pathname = usePathname();     
  return (
    <MenuWrapper>
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
  )
}
