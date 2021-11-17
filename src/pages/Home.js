import React from 'react'
import EcoSystem from '../components/EcoSystem'
import ProblemSolvingSection from '../components/ProblemSolvingSection'
import Roadmap from '../components/Roadmap'
import IntroVideos from '../components/IntroVideos'

export default function Home() {

    return (
        <div className='text-white pt-22'>
            <div className=''>
                <img src='/home-1.jpg' className='w-screen h-screen object-cover lg:hidden' style={{ objectPosition: '73% top' }} alt="" />
                <img src='/home-1.jpg' height='200' width='300' className='w-screen bg-ardmMainOne hidden lg:block'alt="" />
                <div className=' lg:hidden flex h-screen flex-col justify-center absolute top-0'>
                    <h2 className='px-5 font-medium text-3xl md:text-4xl'>Монголын анхны DAO төсөл</h2>
                    <p className='px-5 my-6 mb-10 text-xl md:text-2xl font-thin'>Таны төвлөрсөн бус бие даасан санхүүгийн оролцооны гарц</p>
                    <a href='/litepaper.pdf' className='bg-white py-4 text-center text-ardmBlack font-bold flex justify-center items-center cursor-pointer text-lg absolute bottom-0 w-screen'>Урьдчилсан ТТЭЗҮ <div className='w-4 ml-3'><img src='/right-arrow.png' alt="" /></div></a>
                </div>
                <div style={{height: 'calc(100vw * 0.46)'}} className='container hidden lg:flex  flex-col justify-center absolute top-0 left-1/2 transform -translate-x-1/2 '>
                    <h2 className='font-medium text-6xl'>Монголын анхны DAO төсөл</h2>
                    <p className='my-6 mb-10 text-xl font-thin'>Таны төвлөрсөн бус бие даасан санхүүгийн оролцооны гарц</p>
                    <a href='/litepaper.pdf' className='bg-white flex items-center rounded-lg py-2 px-5 text-ardmBlack font-semibold cursor-pointer text-lg self-start'>Урьдчилсан ТТЭЗҮ<div className='w-4 ml-3'><img src='/right-arrow.png' alt="" /></div></a>
                </div>
            </div>
            <ProblemSolvingSection />
            <div id='ardm' className='py-10 lg:py-20 w-screen bg-ardmMainTwo'>
                <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center'>
                    <div className='w-full mt-10 lg:mt-0 lg:w-1/2 flex justify-center'>
                        <img className='' src='/movingPicture.webp' alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 lg:pl-20 px-3'>
                        <h2 className='lg:font-light text-2xl text-center lg:text-left lg:text-4xl'>AрдМааний гэж юу вэ?</h2>
                        <p className='font-thin leading-7 text-center lg:text-left mt-5 lg:mt-10'>АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO (Decentralized Autonomous Organization) протокол юм. Та Ардмааний протокол дээр хөрөнгөө хадгалан, өгөөж хүртэх боломжтойгоос гадна түргэн шуурхай арилжаа хийх боломжтой байх болно.</p>
                    </div>
                </div>
            </div>
            <Roadmap />
            <IntroVideos />
            <EcoSystem />
            <div id='teamMembers' className='bg-ardmMainOne w-screen py-10'>
                <div className='container mx-auto'>
                    <h2 className='lg:text-5xl lg:text-left text-3xl font-semibold text-center'>Менежментийн баг</h2>
                    <div className='flex flex-wrap justify-center mt-5 lg:mt-10'>
                        {
                            teamMembers.map((member, index) => (
                                <div key={index} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col justify-center items-center py-5 lg:py-14'>
                                    <div className='w-2/3 lg:w-3/5 rounded-full ' style={{ boxShadow: '5px 3px 3px 0px #2AD5FC' }}>
                                        <img className='rounded-full' src={member.src} alt="member" />
                                    </div>
                                    <div className='mt-5 text-center'>
                                        <p className='text-2xl font-medium'>{member.name}</p>
                                        <p className='text-gray-400 text-sm font-thin'>{member.rolePosition}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='py-10 lg:py-20 bg-ardmMainTwo w-screen'>
                <div className='container mx-auto'>
                    <h2 className='text-center font-semibold text-4xl lg:text-6xl'>Онцлог</h2>
                    <div className='flex py-5 lg:py-20 flex-wrap'>
                        {
                            ourVision.map((vision, index) => (
                                <div key={index} className='w-full md:w-1/2 xl:w-1/4 px-3 text-center flex mt-5 lg:mt-0 flex-col items-center'>
                                    <img src={vision.src} alt='vision image' />
                                    <p className='py-1 lg:py-5 font-medium text-2xl'>{vision.title}</p>
                                    <p className='font-thin text-sm leading-7 px-3 md:px-5 text-center'>{vision.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bg-ardmMainOne py-5 lg:py-10'>
                <div className='container mx-auto flex flex-col justify-center items-center'>
                    <h2 className='text-center font-semibold text-4xl lg:text-6xl'>АрдМааний Тархалт</h2>
                    <div className='flex flex-col lg:flex-row justify-center py-10 px-3 lg:px-0 lg:py-20'>
                        <img className='py-5 lg:py-10 object-contain w-full lg:w-1/2' src='/pie-chart-1.png' alt="" />
                        <img className='py-5 lg:py-10 object-contain w-full lg:w-1/2' src='/pie-chart-2.png' alt="" />
                    </div>
                </div>
            </div>
            <div id='faq' className='w-screen bg-ardmMainTwo py-10'>
                <div className='container mx-auto'>
                    <h2 className='text-center font-semibold text-2xl lg:text-4xl'>Түгээмэл Асуултууд</h2>
                    <div className='flex flex-col lg:mt-10 px-2'>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-lg font-light'>АрдМааний төсөл хэзээ бэлэн болох вэ?</p>
                            <p  style={{width:700}}className='text-gray-400 text-sm hidden lg:block font-thin mt-4'>3-6 сарын дотор эхний үе шатаа бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
                            <p className='text-gray-400 lg:hidden text-sm font-thin mt-4'>3-6 сарын дотор эхний үе шатаа бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>АрдМааний төвлөрсөн бус санхүү аль сүлжээн дээр үйл ажиллагаагаа явуулах бэ?</p>
                            <p  style={{width:700}}className='text-gray-400 hidden lg:block text-sm font-thin mt-4'>АрдМааний нь Wormhole технологийг ашиглан, Этериум, Солана, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар бүтээгдэж байна.</p>
                            <p className='text-gray-400 lg:hidden text-sm font-thin mt-4'>АрдМааний нь Wormhole технологийг ашиглан, Этериум, Солана, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар бүтээгдэж байна.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>АрдМааний нь аль байгууллагын төсөл бэ?</p>
                            <p  style={{width:700}}className='text-gray-400 hidden lg:block text-sm font-thin mt-4'>АрдМааний нь DAO буюу төвлөрсөн эзэнгүй, токен эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, энэхүү төслийн засаглалын токен нь АрдМааний байх юм.</p>
                            <p className='text-gray-400 lg:hidden text-sm font-thin mt-4'>АрдМааний нь DAO буюу төвлөрсөн эзэнгүй, токен эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, энэхүү төслийн засаглалын токен нь АрдМааний байх юм.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>Засаглалын токен гэж юу вэ?</p>
                            <p style={{width:700}} className='text-gray-400 hidden lg:block text-sm font-thin mt-4'>Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
                            <p className='text-gray-400 lg:hidden  text-sm font-thin mt-4'>Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-14 bg-ardmMainOne'>
                <div className='flex flex-wrap justify-center mt-10'>
                    {
                        socials.map((social, index) => (
                            <a key={index} href={social.url} target='_blank'>
                                <div key={index} className='w-14 mx-2 hover:opacity-90 lg:mx-8 rounded-full h-14 p-3 flex justify-center items-center cursor-pointer bg-ardmYellow'>
                                    <img className='' src={social.src} alt="social" />
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className='bg-ardmBlack py-10 w-screen'>
                <div className='container mx-auto text-center lg:text-left'>
                    <a href='https://www.dsolutions.mn/' target="_blank" className='text-lg font-medium cursor-pointer hover:text-ardmYellow'>
                        © Diverse Solutions
                    </a>
                </div>
            </div>
        </div>
    )
}

const teamMembers = [
    {
        name: 'М. Энх-Амгалан',
        src: '/profile-1.jpg',
        rolePosition: 'Төслийн ерөнхий удирдагч'
    },
    {
        name: 'Г. Мөнх-Од',
        src: '/profile-2.jpg',
        rolePosition: 'Төслийн ахлах хөгжүүлэгч'
    },
    {
        name: 'Д. Анхбаясгалан',
        src: '/profile-3.jpg',
        rolePosition: 'Төслийн инновацийн блокчэйн ахлах'
    },
    {
        name: 'М. Энx-Улирал',
        src: '/profile-4.jpg',
        rolePosition: 'Блокчэйн судалгааны ахлах'
    },
    {
        name: 'А. Ундрал',
        src: '/profile-5.jpg',
        rolePosition: 'Хамтын ажиллагаа'
    },
    {
        name: 'М. Болортоль',
        src: '/profile-6.jpg',
        rolePosition: 'Хөгжүүлэгч'
    },
    {
        name: 'Б. Баттулга',
        src: '/profile-7.jpg',
        rolePosition: 'Хөгжүүлэгч'
    },
    {
        name: 'А. Амартүвшин',
        src: '/profile-8.jpg',
        rolePosition: 'Блокчэйн судалгааны баг'
    },
    {
        name: 'Г. Ууганбат',
        src: '/profile-9.jpg',
        rolePosition: 'Хөгжүүлэгч'
    },
    {
        name: 'Г. Нарангариг ',
        src: '/profile-10.jpg',
        rolePosition: 'Хөгжүүлэгч'
    },
]

const ourVision = [
    {
        src: '/vision-1.png',
        title: 'Гадаслах (Staking)',
        text: 'Гадаслах хөтөлбөрөөр хадгаламжаас илүү өгөөж хүртэх боломжтой. Эзэмшигч нь АрдМааний токены эзэмшлээ гадаслах буюу түгжсэнээр өгөөж хүртэх боломжтой.'
    },
    {
        src: '/vision-4.png',
        title: 'Олон сүлжээт холбоо',
        text: 'АрдМааний нь Солана, Этериум, Байнанс Смарт Чэйн, Терра болон Полигон сүлжээнүүдэд зэрэг оршиж, сүлжээ хооронд шилжих боломжтой.'
    },
    {
        src: '/vision-3.png',
        title: 'DEX: Төвлөрсөн бус бирж',
        text: 'Монгол блокчэйн төслүүдийг дэлхийн тавцанд гаргах DEX байх болно. Гадаад орны хөрөнгө оруулагчид Монгол блокчэйн төслүүдэд хөрөнгө оруулах хамгийн хурдан, хялбар зам байх болно.'
    },
    {
        src: '/vision-2.png',
        title: 'DEFI: Санхүүгийн шинэ эрин',
        text: 'АрдМааний эзэмшигчид бүх шинэчлэлт, сайжруулалтанд саналаа өгч оролцох боломжтой.'
    },
]

const socials = [
    {
        src: '/icon-fb.png',
        url: 'https://www.facebook.com/ardmoney/'
    },
    {
        src: '/icon-ig.png',
        url: 'https://www.instagram.com/ard.money/'
    },
    {
        src: '/icon-telegram.png',
        url: 'https://t.me/ardmoneyofficial'
    },
    {
        src: '/icon-twitter.png',
        url: 'https://twitter.com/ard_money'
    },
    {
        src: '/icon-discord.png',
        url: 'https://discord.com/invite/2K5DDt2B'
    },
]
