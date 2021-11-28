import React, {useState} from 'react'


let videos = [
    {
        url: 'https://www.youtube.com/embed/0HMA_y4V_Qo',
        title: 'Dao болон Defi гэж юу вэ?',
        thumbnail: '/video-thumbnail-1.jpg'
    },
    {
        url: 'https://www.youtube.com/embed/3HESogLqS2Q',
        title: 'Dex гэж юу вэ?',
        thumbnail: '/video-thumbnail-2.jpg'
    },
    {
        url: 'https://www.youtube.com/embed/Wfc6AJVA8O4',
        title: 'АрдМааний гэж юу вэ?',
        thumbnail: '/video-thumbnail-3.webp'
    },
]

export default function IntroVideos() {
    let[activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='bg-ardmMainOne py-10'>
            <div className='fle flex-col lg:hidden'>
                <h2 className='pl-3 font-medium text-xl'>АрдМааний суурь ойлголтууд</h2>
                <div className='w-full h-64 sm:h-96 mt-3'>
                    <iframe className='w-full h-full' src={videos[activeIndex].url} frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className='flex w-screen  scrollable-container mt-5'>
                    {
                        videos.map((video, index) => (
                            <div key={index} onClick={() => setActiveIndex(index)} className='w-3/4 relative flex-shrink-0 mx-3'>
                                <p className='truncate'>{video.title}</p>
                                <img className={`w-full mt-2  ${activeIndex === index ? 'opacity-100' : 'opacity-70'}`} src={video.thumbnail} alt="" />
                                {
                                    activeIndex !== index ? (
                                        <img className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-e-1/2 w-8 h-8' src='/iconPlay.png' alt="" />
                                    ) : (<></>)
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='container hidden lg:flex mx-auto items-center'>
                <div className='w-1/2'>
                    <h2 className='font-semibold text-4xl'>
                        АрдМааний суурь ойлголтууд
                    </h2>
                    <div className='flex flex-col items-stretch cursor-pointer font-medium mt-5'>
                        {
                            videos.map((video, index) => (
                                <div key={index} className={`py-4 pl-10 mt-5 w-96 rounded-lg ${activeIndex === index ? 'text-ardmYellow' : 'hover:text-ardmYellow'}`}
                                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 2px rgba(255, 255, 255, 0.25)' }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {video.title}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/2 h-96'
                    style={{
                        boxShadow: '#2AD5FC 0px 10px 30px -10px'
                    }}
                >
                    <iframe className='w-full h-full' src={videos[activeIndex].url} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
