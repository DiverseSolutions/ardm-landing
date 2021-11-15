import React from 'react'

export default function MobileTab({ activeIndex, setActiveIndex, tabs }) {
    return (
        <>
            <div className='w-full h-24 border-t-2 border-l-2 border-ardmMobileMain rounded-tl-2xl relative left-2'>
                <div className='w-full flex relative bottom-3 justify-evenly '>
                    {
                        tabs.map((tab, index) => (
                            <div key={index} onClick={() => setActiveIndex(index)} style={{ minWidth: '28%' }}
                                className={`text-xs ${activeIndex == index ? 'text-ardmYellow' : ''} text-center py-1 bg-ardmMobileMain px-1 rounded-full`}>
                                {tab.tabName}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='relative p-5 pb-10 left-8 bottom-16 rounded-l-xl' style={{
                width: '95%',
                minHeight: 400,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.25)'
            }}>
                <h2 className='text-ardmYellow text-lg font-medium'>{tabs[activeIndex].title}</h2>
                {
                    tabs[activeIndex].list?.length ? (
                        <ul className='list-disc text-sm font-light leading-6 px-4 mt-5'>
                            {
                                tabs[activeIndex].list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))
                            }
                        </ul>
                    ) : (
                        <p className='mt-5 text-sm font-light leading-6'>{tabs[activeIndex].text}</p>
                    )
                }
            </div>
        </>
    )
}
