'use client';
import Image from "next/image"
import commerzbanklogo from "@/public/images/commerzbanklogo.png"
import { CiLock } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import Link from "next/link";

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    return(
<nav className="fixed top-0 left-0 w-full z-50">
    <div className="navbar bg-base-100  w-full">
            <div className="navbar-start">
                <Image
                    src={commerzbanklogo}
                    height={50}
                    width={50}
                    alt="bank-logo"
                />
                <a name='button' className="btn btn-ghost text-xl">Commerzbank</a>
            </div>
                
    <div className="navbar-end">
            <CiLock className="text-2xl"/>
        <button name='button' className="btn btn-ghost btn-circle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        </button>
    <>
      <Space>
        <Button type="primary" onClick={showDrawer} onChange={onChange} value={'right'} className="bg-base-100">
        <GiHamburgerMenu />
        </Button>
      </Space>
      <Drawer
        title=""
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        drawerStyle={{ backgroundColor: "#1f2937", color: "white" }}
      >
        <div className="flex flex-col gap-4 border-t pt-10 text-xl font-bold">
            <Link href='/'>Home</Link>
            <Link href='/about'>About us</Link>
            <Link href='/products'>Our Products</Link>
            <Link href='/teams'>Teams</Link>
        </div>
      </Drawer>
    </>
    </div>
    </div>
</nav>
    )

} 
