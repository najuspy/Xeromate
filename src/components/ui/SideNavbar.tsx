"use client";
import React, { useState } from 'react'
import { Nav } from './nav'
type Props = {}
import {
  ChevronRight,
    Contact,
    LayoutDashboard,
    Settings,
    ShoppingCart,
    User,
    User2,
    UsersRound,
  } from "lucide-react"
  import {
    useWindowWidth,
  } from '@react-hook/window-size'
import { Button } from './button';
export default function SideNavbar({}: Props) {
  const[isCollapsed, setIsCollapsed]= useState(true);

  const onlywidth = useWindowWidth();
  const mobileWidth= onlywidth< 768;
  function toggleSidebar () {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24"> 
{! mobileWidth &&
    <div className='absolute right-[-20px] top-7'>
    <Button onClick={toggleSidebar} variant="secondary" className='rounder-full p-2'>
    <ChevronRight />
    </Button>
    </div>
}
    <Nav
    isCollapsed={mobileWidth? true: isCollapsed}
    links={[
      {
        title: "Dashboard",
        href:"/",
        icon: LayoutDashboard,
        variant: "default",
      },
      {
        title: "Clients",
        href:"/client",
        icon: Contact,
        variant: "ghost",
      },
      {
        title: "Account",
        href: "/account",
        icon: User,
        variant: "ghost",
      },
    ]}
  /></div>
  )
}