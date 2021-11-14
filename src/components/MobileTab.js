import React from 'react'

export default function MobileTab({ activeIndex, setActiveIndex, tabs }) {
    return (
        <div className='w-full lg:hidden h-24 border-t-2 border-l-2 border-ardmMobileMain rounded-tl-2xl mt-8 relative left-2'>
            <div className='w-full flex relative bottom-4 justify-evenly '>
                {
                    tabs.map((tab, index) => (
                        <div key={index} onClick={() => setActiveIndex(index)} style={{width: '28%'}}
                         className={`text-sm ${activeIndex == index ? 'text-ardmYellow' : ''} text-center py-1 bg-ardmMobileMain rounded-full`}>
                            {tab.tabName}
                        </div>
                    ))
                }
            </div>
            <div  className='relative p-5 left-4 rounded-l-xl' style={{
                width: '95%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.25)'
            }}>
                <h2 className='text-ardmYellow text-lg font-medium'>{tabs[activeIndex].title}</h2>
                <p className='mt-4 text-sm font-light leading-6'>{tabs[activeIndex].text}</p>
            </div>
        </div>
    )
}
