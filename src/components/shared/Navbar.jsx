import Link from 'next/link';
import React from 'react';
import navLogo from '@/assets/user.png'
import Image from 'next/image';
import { Button } from '@heroui/react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='container mx-auto mt-10 flex justify-between items-center'>
            <div></div>

            <ul className='flex justify-center items-center gap-5'>
                <li>
                    <NavLink href={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>Career</NavLink>
                </li>
            </ul>

            <div className='flex gap-4 items-center'>
                <Image src={navLogo} alt='navbar logo user icon' width={40} height={40} />
                <Link href={'/login'}>
                    <Button className={'bg-[#403f3f]'}>Login</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;