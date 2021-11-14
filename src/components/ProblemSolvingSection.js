import React, { useState } from 'react'
import HomeTwoSrc from '../assets/home-2.png'
import MobileTab from './MobileTab';

const tabs = [
    {
        tabName: 'DAO',
        title: 'АрдМааний нь эзэмшигчдээр бүрэн захирагдана.',
        text: 'АрдМааний нь засаглалын токен буюу DAO протоколд суурилсан. DAO нь эзэмшигчдэд хөрөнгийн санд эзлэх өөрийн эзэмшлийн хувиар аливаа шинэ төсөл, дүрэм, урамшуулал, ашиг хуваарилах зэрэг токентой холбоотой асуудлыг дэвшүүлэх, санал хураалт явуулах, санал өгөх боломжийг олгодог. Ингэснээр токены засаглалыг эзэмшигчдэд эрх тэгш хуваарилж, аливаа шийдвэр гадны оролцоо, механик алдаа, хөгжүүлэгчдийн нөлөөнөөс ангид байх баталгааг өгч буй юм. АрдМааний үйл ажиллагаатай холбоотой дэвшүүлсэн санал нь олонхын саналаар хэрэгжинэ. Өөрөөр хэлбэл, АрдМааний нь АрдМааний эзэмшигчдээр бүрэн захирагдах юм.'
    },
    {
        tabName: 'DEFI',
        title: 'Монгол койнуудын дэлхийд гарах тавцан.',
        text: 'Блокчэйны үндсэн зарчим нь ил тод болон өөрчилшгүй байдал юм. Мэдээллийг хадгалж буй хайрцаг буюу ‘блок’ бүр нь хоорондоо дараалсан гинжин хэлхээс ‘чэйн’-ээр холбогддог. Гүйлгээ бүр нь дарааллын дагуу дахин давтагдашгүйгээр кодлогдсон байдаг тул нэгэнт блокт орсон мэдээллийг өөрчлөх боломжгүй ба блокчэйн дээр хийгдэж буй гүйлгээ бүрийг хянаж, магадлан итгэмжлэх бүрэн боломжийг олгодгоороо хамгийн найдвартай юм.'
    },
    {
        tabName: 'DEX',
        title: 'Таны бирж байх болно.',
        text: 'DEX буюу төвлөрсөн бус бирж нь автоматжуулсан ухаалаг гэрээнд тулгуурлан зуучлагчгүйгээр арилжаа хийх боломжийг олгодог. Бүх DEX ижил суурь дэд бүтцийг ашигладаггүй ба захиалгын самбар буюу энгийн арилжааны загварыг ашигладаг DEX байдаг бол зарим нь AMM буюу хэрэглэгчдийн үүсгэсэн нийлүүлэлтийн сангаар арилжаа хийх протоколыг ашигладаг. Энгийнээр хэлбэл, DEX дээр хэрэглэгчид брокерын шаардлагагүйгээр криптовалют арилжаалах боломжтой.'
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
        <div className='w-screen bg-ardmMainOne pt-7 lg:pt-20 pb-36 px-1 lg:px-0'>
            <div className='container mx-auto'>
                <h2 className='text-left pl-5 font-semibold text-xl lg:text-6xl'>Resolving DEX Issues</h2>
                <MobileTab
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    tabs={tabs}
                 />
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
