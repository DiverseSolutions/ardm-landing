import React from 'react';
import Logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className='bg-ardmBlack text-white py-5 fixed w-screen z-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex px-5 items-center'>
                    <img src={Logo} alt="logo" />
                    <p className='font-medium text-2xl ml-2'>ArdMoney</p>
                </div>
                <div>
                    Whitepaper
                </div>
            </div>
        </div>
    )
}
