import React, {useState} from 'react'

export default function Roadmap() {
    let [activeIndex, setActiveIndex] = useState(0);

    function chooseWhatToRender() {
        switch(activeIndex) {
            case 0:
                return(
                    <>
                        <h3 className='text-4xl text-ardmYellow font-light'>Эхний үе шат</h3>
                        <div className='leading-7 font-thin mt-5'>
                            <ul className='list-disc'>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                                <li>Хугацаагүй своп</li>
                                <li>Binance Smart Chain, Ethereum, Solana сүлжээн дэх бүрэн нэвтрэлт, нэмэлт хөрөнгө босголт</li>
                                <li>Сүлжээ дээрх хэтэвчний экосистем</li>
                            </ul>
                        </div>
                    </>
                )
            case 1:
                return(
                    <>
                        <h3 className='text-4xl text-ardmYellow font-light'>Хоёр дахь үе шат</h3>
                        <div className='leading-7 font-thin mt-5'>
                            <ul className='list-disc'>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                                <li>Хугацаагүй своп</li>
                                <li>Binance Smart Chain, Ethereum, Solana сүлжээн дэх бүрэн нэвтрэлт, нэмэлт хөрөнгө босголт</li>
                                <li>Сүлжээ дээрх хэтэвчний экосистем</li>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                            </ul>
                        </div>
                    </>
                )
            case 2:
                return(
                    <>
                        <h3 className='text-4xl text-ardmYellow font-light'>Гурав дахь үе шат</h3>
                        <div className='leading-7 font-thin mt-5'>
                            <ul className='list-disc'>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                                <li>Нийлүүлэлт бууруулах механизм</li>
                                <li>Блокчэйн сүлжээ хоорондын интеграци (Wormhole)</li>
                                <li>Хугацаагүй своп</li>
                                <li>Binance Smart Chain, Ethereum, Solana сүлжээн дэх бүрэн нэвтрэлт, нэмэлт хөрөнгө босголт</li>
                                <li>Сүлжээ дээрх хэтэвчний экосистем</li>
                            </ul>
                        </div>
                    </>
                )
        }
    }

    return (
        <div className='bg-ardmMainOne w-screen'>
            <div className='container mx-auto flex relative '>
                <div className='flex flex-col w-1/2'>
                    <div className='h-80 w-14 border-l-4 border-b-4 rounded-bl-full border-ardmYellow '></div>
                    <div className='w-16 h-1 bg-ardmYellow relative bottom-1 left-14 '></div>
                    <div style={{ height: 600 }} className='relative flex justify-end bottom-2 left-28  w-14 border-r-4 border-t-4 rounded-tr-full border-ardmYellow '>
                        <div className='absolute top-4 text-xl font-light h-96 flex flex-col justify-evenly' style={{ left: 46 }}>
                            <div onClick={() => setActiveIndex(0)} className='flex items-center cursor-pointer py-3'>
                                <div className={`w-4 h-4 flex-shrink-0 rounded-full  cursor-pointer flex justify-center items-center ${activeIndex == 0 ? 'bg-white' : 'bg-gray-500'}`}><div className={`w-2 h-2 ${activeIndex == 0 ? 'bg-ardmYellow' : 'bg-white'}  rounded-full`}></div></div>
                                <div className={`w-44 ml-5 ${activeIndex == 0 ? 'text-ardmYellow' : 'text-gray-500'}`}>Эхний үе шат</div>
                            </div>
                            <div onClick={() => setActiveIndex(1)} className='flex items-center cursor-pointer py-3'>
                                <div className={`w-4 h-4 flex-shrink-0 rounded-full  cursor-pointer flex justify-center items-center ${activeIndex == 1 ? 'bg-white' : 'bg-gray-500'}`}><div className={`w-2 h-2 ${activeIndex == 1 ? 'bg-ardmYellow' : 'bg-white'}  rounded-full`}></div></div>
                                <div className={`w-44 ml-5 ${activeIndex == 1 ? 'text-ardmYellow' : 'text-gray-500'}`}>Хоёр дахь үе шат</div>
                            </div>
                            <div onClick={() => setActiveIndex(2)} className='flex items-center cursor-pointer py-3'>
                                <div className={`w-4 h-4 flex-shrink-0 rounded-full  cursor-pointer flex justify-center items-center ${activeIndex == 2 ? 'bg-white' : 'bg-gray-500'}`}><div className={`w-2 h-2 ${activeIndex == 2 ? 'bg-ardmYellow' : 'bg-white'}  rounded-full`}></div></div>
                                <div className={`w-44 ml-5 ${activeIndex == 2 ? 'text-ardmYellow' : 'text-gray-500'}`}>Гурав дахь үе шат</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center absolute py-20'>
                    <h2 className='font-semibold text-6xl'>АрдМааний төлөвлөгөө</h2>
                </div>
                <div className='w-1/2 absolute top-1/3 right-0 flex justify-center'>
                    <div className='p-14' style={{
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.25)',
                        borderRadius: 33,
                        width: 550
                    }}>
                        {
                            chooseWhatToRender()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
