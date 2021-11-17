import React, {useState} from 'react';

export default function Header() {
    let [isMenuVisible, setIsMenuVisible ] = useState(false);

    return (
        <div className='bg-ardmBlack text-white py-2 lg:py-5 fixed w-screen z-10'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex px-5 items-center'>
                    <img className='w-10 object-contain' src={'/logoMain.png'} alt="logo" />
                    <p className='font-medium hidden lg:block text-2xl ml-2'>ArdMoney</p>
                </div>
                <div onClick={() => setIsMenuVisible(true)} className='w-10 mr-5 lg:hidden'>
                    <img src={'/menu.png'} alt="" />
                </div>
                {
                    isMenuVisible ? (
                        <div className='fixed flex flex-col p-2 px-5 text-center w-screen h-screen left-0 top-0 bg-ardmBlack'>
                            <div className='flex container mx-auto mb-5 justify-between'>
                                <img className='w-10 object-contain' src={'/logoMain.png'} alt="logo" />
                                <img onClick={() => setIsMenuVisible(false)} className='w-10 object-contain' src={'/menu.png'} alt="" />
                            </div>
                            <div onClick={() => setIsMenuVisible(false)} className='flex flex-col'>
                                <a href='#dao' className='p-3  hover:text-ardmYellow cursor-pointer'>DAO</a>
                                <a href='#ardm' className='p-3 hover:text-ardmYellow cursor-pointer'>АрдМааний</a>
                                <a href='#roadmap' className='p-3 hover:text-ardmYellow cursor-pointer'>Төлөвлөгөө</a>
                                <a href='#ecoSystem' className='p-3 hover:text-ardmYellow cursor-pointer'>Экосистем</a>
                                <a href='#teamMembers' className='p-3 hover:text-ardmYellow cursor-pointer'>Баг</a>
                                <a href='#faq' className='p-3 hover:text-ardmYellow cursor-pointer'>FAQ</a>
                                <a href='/litepaper.pdf' className='p-3 hover:text-ardmYellow cursor-pointer'>Litepaper</a>
                            </div>
                        </div>
                    ) : (<></>)
                }
                <div className='lg:flex items-center hidden'>
                    <a href='#dao' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>DAO</a>
                    <a href='#ardm' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>АрдМааний</a>
                    <a href='#roadmap' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>Төлөвлөгөө</a>
                    <a href='#ecoSystem' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>Экосистем</a>
                    <a href='#teamMembers' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>Баг</a>
                    <a href='#faq' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>FAQ</a>
                    <a href='/litepaper.pdf' className='mr-3 p-2 hover:text-ardmYellow cursor-pointer'>Litepaper</a>
                </div>
            </div>
        </div>
    )
}
