import React, {useState} from 'react'
import LayerSrc from '../assets/layer.png'

export default function EcoSystem() {
    let [activeIndex, setActiveIndex] = useState(0);

    function chooseWhatToRender () {
        switch(activeIndex) {
            case 0:
                return (
                    <>
                        <ul className='list-disc'>
                            <li>Private and Public IDO on Solstarter</li>
                            <li>SOLD Token Model Incentive and Research</li>
                            <li>Implementation of Solana Blockchain (PoH)</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>Strategy and Startup Marketing Plan</li>
                        </ul>
                    </>
                )
            case 1:
                return (
                    <>
                        <ul className='list-disc'>
                            <li>Private and Public IDO on Solstarter</li>
                            <li>SOLD Token Model Incentive and Research</li>
                            <li>Implementation of Solana Blockchain (PoH)</li>
                            <li>Implementation of Solana Blockchain (PoH)</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>Implementation of Solana Blockchain (PoH)</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>Strategy and Startup Marketing Plan</li>
                        </ul>
                    </>
                )
            case 2:
                return (
                    <>
                        <ul className='list-disc'>
                            <li>Private and Public IDO on Solstarter</li>
                            <li>SOLD Token Model Incentive and Research</li>
                            <li>Implementation of Solana Blockchain (PoH)</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>Strategy and Startup Marketing Plan</li>
                            <li>SOL Smart Contract implementation on Solidity</li>
                            <li>Strategy and Startup Marketing Plan</li>
                        </ul>
                    </>
                )
        }
    }

    return (
        <div className='bg-ardmMainTwo py-44'>
            <div className='container mx-auto flex items-start '>
                <div className='w-1/2 flex justify-center'>
                    <img src={LayerSrc} alt="layerPic" />
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div>
                        <h2 className='text-5xl font-semibold'>Ecosystem</h2>
                        <div className='flex flex-col my-10'>
                            <div className='flex '>
                                <div onClick={() => setActiveIndex(0)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-6 ${activeIndex == 0 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 1</div>
                                <div onClick={() => setActiveIndex(1)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-6 ${activeIndex == 1 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 2</div>
                                <div onClick={() => setActiveIndex(2)} className={`cursor-pointer mr-20  border-b-2 text-xl py-2 pr-6 ${activeIndex == 2 ? 'border-ardmYellow text-white' : 'text-ardmYellow border-opacity-0'} `}>LAYER 3</div>
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
