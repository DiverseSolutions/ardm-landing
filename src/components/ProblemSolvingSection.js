import React, { useState } from 'react'
import HomeTwoSrc from '../assets/home-2.png'
import MobileTab from './MobileTab';

const tabs = [
    {
        tabName: 'DAO',
        title: 'АрдМааний нь эзэмшигчдээр бүрэн захирагдана.',
        text: 'АрдМааний нь засаглалын токен буюу DAO протоколд суурилсан. DAO нь эзэмшигчдэд хөрөнгийн санд эзлэх өөрийн эзэмшлийн хувиар аливаа шинэ төсөл, дүрэм, урамшуулал, ашиг хуваарилах зэрэг токентой холбоотой асуудлыг дэвшүүлэх, санал хураалт явуулах, санал өгөх боломжийг олгодог. Ингэснээр токены засаглалыг эзэмшигчдэд эрх тэгш хуваарилж, аливаа шийдвэр гадны оролцоо, механик алдаа, хөгжүүлэгчдийн нөлөөнөөс ангид байх баталгааг өгч буй юм. АрдМааний үйл ажиллагаатай холбоотой дэвшүүлсэн санал нь олонхын саналаар хэрэгжинэ. Өөрөөр хэлбэл, АрдМааний-тай холбоотой чухал шийдвэр гаргалтад түүний эзэмшигчид шууд оролцон засаглах тухай ойлголт юм.'
    },
    {
        tabName: 'DEFI',
        title: 'Крипто хөрөнгөө хадгалах, зээл авах боломж.',
        text: 'DEFI буюу төвлөрсөн бус санхүү нь хэрэглэгчдэд төвлөрсөн санхүүгийн үйлчилгээ үзүүлэгчийн оронд блокчэйн дээр орших ухаалаг гэрээгээр баталгаажин ажилладаг. АрдМааний протоколыг ашиглан, хэрэглэгчид өөрийн хөрөнгөө өндөр хүүтэйгээр хадгалах, бага хүүтэй зээл авах боломжтой. Мөн блокчэйн дээр хийгдэж буй гүйлгээ бүрийг хянаж, магадлан итгэмжлэх бүрэн боломжийг олгодгоороо төвлөрсөн бус санхүү нь хамгийн найдвартай байх болно.'
    },
    {
        tabName: 'DEX',
        title: 'Таны бирж таны гарт байх болно.',
        text: 'DEX буюу төвлөрсөн бус бирж нь автоматжуулсан ухаалаг гэрээнд тулгуурлан дундын зуучлагчгүйгээр арилжаа хийх боломжийг олгоно. Энгийнээр хэлбэл, DEX дээр хэрэглэгчид брокерын шаардлагагүйгээр криптовалют арилжаалах боломжтой. Хэрэглэгчид ердөө л MetaMask, Phantom, Sollet эсвэл Trezor гэх мэт крипто түрийвчээ DEX-тэй холбож, Bitcoin, Solana болонEthereum-ийн хоорондох крипто-крипто арилжааны хослолыг сонгох, үнийн дүнг оруулах, солих товчийг ашиглах ба арилжаа нь ухаалаг гэрээгээр баталгаажиж, хэрэгждэг. Энэхүү биржийн ирээдүйн хөгжилт, сайжруулалтыг АрдМааний эзэмшигчид бүрэн шийдэх юм.'
    },
 ]

export default function ProblemSolvingSection() {
    let [activeIndex, setActiveIndex] = useState(0);

    function chooseWhatToRender () {
        switch(activeIndex) {
            case 0:
                return (
                    <>
                        <h2 className='py-10 font-light text-4xl'>{tabs[0].title}</h2>
                        <p className='font-thin pr-10 leading-7'>{tabs[0].text}</p>
                    </>
                )
            case 1:
                return (
                    <>
                        <h2 className='py-10 font-light text-4xl'>{tabs[1].title}</h2>
                        <p className='font-thin pr-10 leading-7'>{tabs[1].text}</p>
                    </>
                )
            case 2:
                return (
                    <>
                        <h2 className='py-10 font-light text-4xl'>{tabs[2].title}</h2>
                        <p className='font-thin pr-10 leading-7'>{tabs[2].text}</p>
                    </>
                )
        }
    }

    return (
        <div id='dao' className='w-screen bg-ardmMainOne pt-7 lg:pt-20 lg:pb-36 lg:px-0'>
            <div className='lg:container mx-auto'>
                <h2 className='text-left lg:text-center pl-5 lg:pl-0 font-semibold text-xl lg:text-6xl'>DAO гэж юу вэ?</h2>
                <div className='lg:hidden mt-5'>
                    <MobileTab
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        tabs={tabs}
                    />
                </div>
                <div className='hidden lg:flex w-full items-start mt-10'>
                    <div className='w-1/2 flex flex-col'>
                        <div className='flex'>
                            <div onClick={() => setActiveIndex(0)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-4 ${activeIndex == 0 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>{tabs[0].tabName}</div>
                            <div onClick={() => setActiveIndex(1)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-4 ${activeIndex == 1 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>{tabs[1].tabName}</div>
                            <div onClick={() => setActiveIndex(2)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-4 ${activeIndex == 2 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>{tabs[2].tabName}</div>
                        </div>
                        {
                            chooseWhatToRender()
                        }
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <img src={HomeTwoSrc} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
