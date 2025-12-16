import React from 'react'
import Heading from '../Heading/Heading.jsx'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb';
import { PiFactory, PiPlant } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';

const Process = () => {
    const renderSteps = Steps.map(items => {
        return (
            <div key={items.id} className='max-w-[1300px] mx-auto px-10 py-10 '>
                <span className='flex justify-center items-center w-17 h-17 text-7xl outline-4 outline-offset-6 outline-dotted outline-zinc-800 rounded-full mx-auto bg-zinc-800 text-white'>{items.number}</span>

                <div className='flex items-center gap-5 mt-5'>

                        <span className='flex items-center justify-center bg-gradient-to-b from-green-400 to-green-500 text-white text-3xl p-3 rounded-full '>{items.Icon}</span>

                    <div className='w-70 '>
                        <h3 className='text-zinc-800 text-2xl font-bold'>{items.title}</h3>
                        <p className='text-zinc-600 mt-2 text-sm'> {items.paragraph}</p>
                    </div>
                </div>

            </div>
        )
    })
    return (
        <section>
            <div className='max-w-[1300px] mx-auto px-10 py-10'>
                <Heading highlight="Our" heading="Process" />
            </div>
            <div className='flex items-center justify-center mt- gap-10 flex-wrap'>
                {renderSteps}
            </div>
        </section>
    )
}

export default Process

const Steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        paragraph: "We carefully select fresh produce from trusted local farmers and suppliers to ensure the highest quality.",
        Icon: <PiPlant />,
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        paragraph: "Our state-of-the-art facilities process the produce with utmost care, preserving its freshness and nutritional value.",
        Icon: <PiFactory />,
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        paragraph: "Each batch undergoes rigorous quality checks to meet our stringent standards before packaging.",
        Icon: <SlBadge />,
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        paragraph: "We ensure timely delivery through an efficient logistics network, maintaining the cold chain to keep products fresh.",
        Icon: <BsTruck />,
    },
];


