import { useState } from 'react'
import './style.css'
import bgviego from "../../assets/images/viegocard.webp"

function Pay() {


    return (
        <>
            <header className='relative text-center p-2 bg-gradient-to-r from-teal-400 to-sky-500 border-b-5 border-[#59d8ff] overflow-hidden'>
                <div className='absolute inset-0 animate-pulse z-0 bg-[rgba(0,141,207,1)]'></div>
                <h1 className='relative font-black text-[18px] z-10'>🔥 20% OFF em todos os serviços</h1>
            </header>
            <div className='relative'>
                <div className='flex flex-col items-center mt-15'>
                    <h1 className='text-[50px] leading-none font-bold'>ESCOLHA UM DE MEUS</h1>
                    <h1 className='text-[100px] leading-none font-bold text-cyan-400'>SERVIÇOS</h1>
                    
                    <div className='grid grid-cols-2 gap-10 mb-20'>
                    <div className='bg-gradient-to-t from-cyan-800 to-cyan-600 '>
                    <img src={bgviego} alt='bgviegoo' id='viego'></img>
                    <h3>COACH</h3>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                </div>



            </div>
        </>
    )
}

export default Pay