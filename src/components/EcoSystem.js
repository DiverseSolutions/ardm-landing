import React, {useState} from 'react'
import LayerSrc from '../assets/layer.png'
import MobileTab from './MobileTab';

const tabs = [
    {
        tabName: 'LAYER 1',
        title: 'LAYER 1',
        list: [
            'DAX.mn дээр урьдчилсан худалдаа.',
            'SPL, ERC20, BEP20 хувилбарын хөгжүүлэлт, нэвтрүүлэлт.',
        ]
    },
    {
        tabName: 'LAYER 2',
        title: 'LAYER 2',
        list: [
            'DEX протокол хөгжүүлэлтийг эхлүүлэх.',
            'AMM Liquidity Pools протоколын хөгжүүлэлт.',
            'Платформыг нэвтрүүлэх.',
        ]
    },
    {
        tabName: 'LAYER 3',
        title: 'LAYER 3',
        list: [
            'Governance протоколыг ашиглан хэрэглэгчид шинэчлэлүүдэд бүрэн саналын эрхтэй оролцох.',
            'BSC, Ethereum, Polygon, Terra, Solana блокчэйн сүлжээ хоорондын интеграци хийх.',
        ]
    },
]

export default function EcoSystem() {
    let [activeIndex, setActiveIndex] = useState(0);

    function chooseWhatToRender () {
        switch(activeIndex) {
            case 0:
                return (
                    <>
                        <ul className='list-disc'>
                            {
                                tabs[0].list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))
                            }
                        </ul>
                    </>
                )
            case 1:
                return (
                    <>
                        <ul className='list-disc'>
                            {
                                tabs[1].list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))
                            }
                        </ul>
                    </>
                )
            case 2:
                return (
                    <>
                        <ul className='list-disc '>
                            {
                                tabs[2].list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))
                            }
                        </ul>
                    </>
                )
        }
    }

    function isSafari() {
        let is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
        return is_safari;
      }

    return (
        <div id='ecoSystem' className='bg-ardmMainTwo lg:py-44'>
            <h2 className='text-2xl font-semibold pl-4 lg:hidden'>Экосистем</h2>
            <div className='lg:hidden mt-5'>
                <MobileTab
                    tabs={tabs}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
            <div className='flex md:w-10/12 mx-auto lg:hidden justify-center'>
                <img src={LayerSrc} alt="layerPic" />
            </div>
            <div className='container mx-auto hidden lg:flex items-start '>
                <div className='w-2/5 md:w-1/2 flex justify-center items-start'>
                    <img className={'w-10/12 rotate-0 object-contain'} src={LayerSrc} alt="layerPic" />
                </div>
                <div className='w-3/5 md:w-1/2 flex justify-end'>
                    <div className='md:w-9/12 mt-10'>
                        <h2 className='text-5xl font-semibold'>Экосистем</h2>
                        <div className='flex flex-col my-10'>
                            <div className='flex '>
                                <div onClick={() => setActiveIndex(0)} className={`cursor-pointer mr-5 xl:mr-16  border-b-2 text-xl py-2 pr-6 ${activeIndex == 0 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 1</div>
                                <div onClick={() => setActiveIndex(1)} className={`cursor-pointer mr-5 xl:mr-16  border-b-2 text-xl py-2 pr-6 ${activeIndex == 1 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 2</div>
                                <div onClick={() => setActiveIndex(2)} className={`cursor-pointer mr-5  xl:mr-16 border-b-2 text-xl py-2 pr-6 ${activeIndex == 2 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 3</div>
                            </div>
                        </div>
                        <div className='leading-10 font-thin'>
                            {
                                chooseWhatToRender()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
