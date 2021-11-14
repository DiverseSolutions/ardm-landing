import React, {useRef, useEffect} from 'react'
import HomeOneSrc from '../assets/home-1.jpg'
import EcoSystem from '../components/EcoSystem'
import ProblemSolvingSection from '../components/ProblemSolvingSection'
import Roadmap from '../components/Roadmap'
import ProfileOne from '../assets/profile-1.webp';
import VisionOneImgSrc from '../assets/vision-1.png'
import VisionTwoImgSrc from '../assets/vision-2.png'
import VisionThreeImgSrc from '../assets/vision-3.png'
import VisionFourImgSrc from '../assets/vision-4.png'
import PieChart from '../assets/pie-chart.png'
import IconFb from '../assets/icon-fb.png'
import IconIg from '../assets/icon-ig.png'
import IconTelegram from '../assets/icon-telegram.png'
import IconTwitter from '../assets/icon-twitter.png'

export default function Home() {
    let videoRef = useRef(null);

    useEffect(() => {
        let interval = setInterval(() => {
            if (videoRef.current) {
                videoRef.current.play()
            }
        }, 2000)

        return () => clearInterval(interval)
    },[])

    return (
        <div className='text-white pt-22'>
            <div className=''>
                <img src={HomeOneSrc} className='w-screen h-screen object-cover lg:hidden' style={{ objectPosition: '73% top' }} alt="" />
                <img src={HomeOneSrc} className='w-screen hidden lg:block'alt="" />
                <div className='container lg:hidden flex h-screen flex-col justify-center absolute top-0 left-1/2 transform -translate-x-1/2 '>
                    <h2 className='px-5 font-medium text-3xl'>Монголын анхны DAO төсөл</h2>
                    <p className='px-5 my-6 mb-10 text-xl font-thin'>Таны төвлөрсөн бус бие даасан санхүүгийн оролцооны гарц</p>
                    <div className='bg-white py-3 text-center text-ardmBlack font-bold cursor-pointer text-lg absolute bottom-0 w-screen'>Whitepaper</div>
                </div>
                <div style={{height: 'calc(100vw * 0.46)'}} className='container hidden lg:flex  flex-col justify-center absolute top-0 left-1/2 transform -translate-x-1/2 '>
                    <h2 className='font-medium text-6xl'>Монголын анхны DAO төсөл</h2>
                    <p className='my-6 mb-10 text-xl font-thin'>Таны төвлөрсөн бус бие даасан санхүүгийн оролцооны гарц</p>
                    <div className='bg-white rounded-lg py-2 px-5 text-ardmBlack font-semibold cursor-pointer text-lg self-start'>Whitepaper</div>
                </div>
            </div>
            <ProblemSolvingSection />
            <div className='py-20 w-screen bg-ardmMainTwo'>
                <div className='container mx-auto flex items-center'>
                    <div className='w-1/2 flex justify-center flex-wrap'>
                        <video ref={videoRef} className='rounded-full'
                            style={{
                                boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
                                height: 600,
                                width: 600,
                            }}
                         >
                            <source className='' src='/home-video.mp4' type="video/mp4" />
                        </video>
                    </div>
                    <div className='w-1/2 pl-20'>
                        <h2 className='font-light text-4xl mb-10'>AрдМааний гэж юу вэ?</h2>
                        <p className='font-thin leading-7'>АрдМааний нь эзэмшигчдэдээ дундын зуучлагчгүйгээр зээл, хадгаламж, ашиг олборлолт зэрэг санхүүгийн үйлчилгээг авах боломжийг олгодог DAO () протокол юм. Та Ардмааний протокол дээр хөрөнгөө хадгалан, өгөөж хүртэх боломжтойгоос гадна түргэн шуурхай арилжаа хийх боломжтой байх болно.</p>
                    </div>
                </div>
            </div>
            <Roadmap />
            <EcoSystem />
            <div className='bg-ardmMainOne w-screen py-10'>
                <div className='container mx-auto'>
                    <h2 className='text-5xl font-light'>Work team</h2>
                    <div className='flex flex-wrap'>
                        {
                            teamMembers.map((member, index) => (
                                <div key={index} className='w-1/5 flex flex-col justify-center items-center py-14'>
                                    <div className='w-40 h-40 rounded-full bg-red-500' style={{ boxShadow: '5px 3px 2px 0px #F9B74B' }}>
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
            <div className='py-10 bg-ardmMainTwo w-screen'>
                <div className='container mx-auto'>
                    <h2 className='text-center font-semibold text-6xl'>Our Vision</h2>
                    <div className='flex py-20'>
                        {
                            ourVision.map((vision, index) => (
                                <div key={index} className='w-1/4 flex flex-col items-center'>
                                    <img src={vision.src} alt='vision image' />
                                    <p className='py-5 font-medium text-2xl'>{vision.title}</p>
                                    <p className='font-thin text-sm leading-7 px-5 text-center'>{vision.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bg-ardmMainOne py-10'>
                <div className='container mx-auto flex flex-col justify-center items-center'>
                    <h2 className='text-center font-semibold text-6xl'>SOLDonomics</h2>
                    <img className='py-10' src={PieChart} alt="" />
                </div>
            </div>
            <div className='w-screen bg-ardmMainTwo py-10'>
                <div className='container mx-auto'>
                    <h2 className='text-center font-semibold text-4xl'>Frequently Asked questions</h2>
                    <div className='flex flex-col mt-10'>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>АрдМааний төсөл хэзээ бэлэн болох вэ?</p>
                            <p  style={{width:700}}className='text-gray-400 text-sm font-thin mt-4'>Бид эхний үе шатаа 3-6 сарын дотор бүрэн төгөлдөр хэрэглээнд оруулахаар ажиллаж байна.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>АрдМааний төвлөрсөн бус санхүү аль сүлжээн дээр үйл ажиллагаагаа явуулах бэ?</p>
                            <p  style={{width:700}}className='text-gray-400 text-sm font-thin mt-4'>АрдМааний нь wormhole технологийг ашиглан, этереум, солана, байнанс смарт чэйн, терра болон полигон сүлжээнүүд дээр үйл ажиллагаагаа явуулахаар ажиллаж байна.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>АрдМааний нь аль байгууллагын төсөл бэ?</p>
                            <p  style={{width:700}}className='text-gray-400 text-sm font-thin mt-4'>АрдМааний DAO буюу төвлөрсөн эзэнгүй, АрдМааний эзэмшигчдийн төсөл байх болно. Өөрөөр хэлбэл, АрдМааний нь энэхүү төслийн засаглалын токенээр ашиглагдах юм.</p>
                        </div>
                        <div className='text-center mt-10 flex flex-col items-center'>
                            <p className='text-xl font-light'>Засаглалын токен гэж юу вэ?</p>
                            <p style={{width:700}} className='text-gray-400 text-sm font-thin mt-4'>Засаглалын токен нь төвлөрсөн бус системийн ноён нуруу бөгөөд ил тод, тэгш оролцоог хангасан засаглалыг хэвшүүлж, эзэмшигчид өөрсдөө блокчэйн төслийн ирээдүйг тодорхойлох боломжийг олгодог. Засаглалын токен нь төслийн шинэ санаачилга, шийдвэр гаргалт бүр дээр эзэмшигчдээс санал хураах, түүнийг хэрэгжүүлэх асуудлыг хариуцах үүрэгтэй төвлөрсөн бус бие даасан байгууллагатай (DAO) байдаг.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-14 bg-ardmMainOne'>
                <h2 className='text-center font-semibold text-4xl'>Socials</h2>
                <div className='flex justify-center mt-10'>
                    {
                        socials.map((social, index) => (
                            <div key={index} className='w-14 mx-8 rounded-full h-14 p-3 flex justify-center items-center cursor-pointer bg-ardmYellow'>
                                <img className='' src={social.src} alt="social" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bg-ardmBlack py-10 w-screen'>
                <div className='container mx-auto'>
                    <p className='text-lg font-medium'>
                        © Diverse Solutions all Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

const teamMembers = [
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
    {
        name: 'Anhaa ah',
        src: ProfileOne,
        rolePosition: 'Co-Founder & Ceo'
    },
]

const ourVision = [
    {
        src: VisionOneImgSrc,
        title: 'Хамгийн хурдан',
        text: 'Солана сүлжээ нь 1 секундэд 50.000 гүйлгээ батлах чадвартай. Энэ нь АрдМааний протокол хамгийн хурдан санхүүгийн үйлчилгээг үзүүлнэ гэсэн үг юм.'
    },
    {
        src: VisionTwoImgSrc,
        title: 'Wormhole',
        text: 'АрдМааний нь Солана, Этереум, Байнанас Смарт Чэйн, Терра болон Полигон сүлжээнүүдэд зэрэг оршиж, сүлжээ хооронд шилжих боломжтой.'
    },
    {
        src: VisionThreeImgSrc,
        title: 'DEX',
        text: 'Монгол койнуудыг дэлхийн тавцанд гаргах DEX байх болно. Гадаад орны хөрөнгө оруулагчид Монгол блокчэйн төслүүдэд хөрөнгө оруулах хамгийн хурдан, хялбар зам байх болно.'
    },
    {
        src: VisionFourImgSrc,
        title: 'DEFI',
        text: 'АрдМааний эзэмшигчид бүх шинэчлэлт, сайжруулалтанд саналаа өгч оролцох боломжтой.'
    },
]

const socials = [
    {
        src: IconFb,
        url: '#'
    },
    {
        src: IconIg,
        url: '#'
    },
    {
        src: IconTelegram,
        url: '#'
    },
    {
        src: IconTwitter,
        url: '#'
    },
]
