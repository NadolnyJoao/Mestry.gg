import { useState } from 'react'
import './style.css'
import bgviego2 from "../../assets/images/viegowallpaper.png"
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

  return (
    <>

      <header className='relative text-center p-2 bg-gradient-to-r from-teal-400 to-sky-500 border-b-5 border-[#59d8ff] overflow-hidden'>
        <div className='absolute inset-0 animate-pulse z-0 bg-[rgba(0,141,207,1)]'></div>
        <h1 className='relative font-black text-[18px] z-10'>🔥 20% OFF em todos os serviços</h1>
      </header>

      <div className='relative w-full'>
        <img src={bgviego2} alt='bgviegoo'></img>

        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-[80px] font-bold leading-none'>JOGUE COMO UM</h1>
          <span className='text-[200px] font-black bg-gradient-to-r from-cyan-600 to-cyan-300 bg-clip-text text-transparent leading-none'>BOOSTER</span>
        </div>

        <div className='absolute bottom-60 left-1/2 -translate-x-1/2'>
          <button onClick={() => navigate('/pagamento')} className="transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110
           rounded-lg bg-gradient-to-r from-stone-900 to-sky-900 hover:bg-gradient-to-br
            font-medium rounded-base text-xl px-10 py-5 text-center leading-5 
            animate-bounce
            ">Saiba mais</button>
        </div>

      </div>





      <div className="flex justify-around items-center py-6 bg-[#0a0a0a] border-y border-cyan-900">

        <div className="text-center">
          <p className="text-cyan-400 text-3xl font-black">1.000+</p>
          <p className="text-white text-xs tracking-widest mt-1">SERVIÇOS ENTREGUES</p>
        </div>

        <div className="w-px h-10 bg-cyan-900"></div>{/* divisória */}

        <div className="text-center">
          <p className="text-cyan-400 text-3xl font-black">5</p>
          <p className="text-white text-xs tracking-widest mt-1">ANOS DE EXPERIÊNCIA</p>
        </div>

        <div className="w-px h-10 bg-cyan-900"></div>

        <div className="text-center">
          <p className="text-cyan-400 text-3xl font-black">3</p>
          <p className="text-white text-xs tracking-widest mt-1">SERVIDORES ATENDIDOS</p>
        </div>

        <div className="w-px h-10 bg-cyan-900"></div>

        <div className="text-center">
          <p className="text-cyan-400 text-3xl font-black">100%</p>
          <p className="text-white text-xs tracking-widest mt-1">TRANSPARÊNCIA EM LIVE</p>
        </div>

      </div>

      <div className='pt-20 pb-10'>
        <div className='flex flex-col items-start pl-60'>
          <h1 className='text-[50px] leading-none pl-1 font-bold'>NÃO EXISTE</h1>
          <span className='text-[150px] leading-none font-bold text-cyan-400'>CONTA</span>
          <span className='text-[150px] leading-none font-bold text-cyan-400'>ZIKADA</span>
          <div className='w-60 h-1 bg-cyan-900 rounded-[30]'></div>
          <p className='text-[20px] mt-4 max-w-3xl leading-relaxed'>Seu time pode ser ruim — é verdade. Mas isso não te impede de subir de liga. O que te trava são ilusões, jargões repetidos e desculpas que só servem para justificar estagnação.</p>
          <p className='text-[20px] mt-4 max-w-3xl leading-relaxed'>Se um Jungle Challenger jogasse na sua conta, o climb aconteceria sem dificuldade. Isso não é teoria — é prática comprovada em mais de 1.000 serviços entregues em 5 anos, nos servidores BR, NA, EUW e LAS.</p>
          <p className='text-[20px] mt-4 max-w-3xl leading-relaxed'>O que ofereço não é promessa vazia: é o mesmo conhecimento que uso para carregar partidas, mostrado com transparência em lives durante e após as aulas.</p>
          <p className='text-[20px] mt-4 max-w-3xl leading-relaxed font-bold border-l-4 border-cyan-900 px-3'>Se você quer parar de depender do time e subir por mérito — é por aqui que começa.</p>
        </div>
      </div>

      <div className='pt-20 bg-[#041920]'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[50px] leading-none font-bold'>O QUE EU</h1>
          <h1 className='text-[100px] leading-none font-bold text-cyan-400'>OFEREÇO</h1>
          <div className='w-60 h-1 bg-cyan-900 rounded-[30] mt-7 mb-10'></div>

          <div className='grid grid-cols-3 gap-10 mb-20'>
            <div className='group bg-gradient-to-t from-cyan-800 to-cyan-600 rounded-xl p-6 flex-col overflow-hidden w-130 border-3 border-[#006185] transition-transform duration-300 ease-in-out hover:scale-105'>
              <h3 className='text-center font-extrabold text-[30px] group-hover:text-[#00f7ff] transition-colors duration-300'>Contratação e Segurança</h3>
              <p className='mt-2 flex-1 line-clamp-4 text-[20px]'>Pagamento único e seguro. Confirmou? Você já cai direto no WhatsApp do Fatal com tudo pronto (plano e valor) para começar. Sem burocracia, só resultado!</p>
            </div>
            <div className='group bg-gradient-to-t from-cyan-800 to-cyan-600 rounded-xl p-6 flex-col overflow-hidden w-130 border-3 border-[#006185] transition-transform duration-300 ease-in-out hover:scale-105'>
              <h3 className='text-center font-extrabold text-[30px] group-hover:text-[#00f7ff] transition-colors duration-300'>Contratação e Segurança</h3>
              <p className='mt-2 flex-1 line-clamp-4 text-[20px]'>Pagamento único e seguro. Confirmou? Você já cai direto no WhatsApp do Fatal com tudo pronto (plano e valor) para começar. Sem burocracia, só resultado!</p>
            </div>
            <div className='group bg-gradient-to-t from-cyan-800 to-cyan-600 rounded-xl p-6 flex-col overflow-hidden w-130 border-3 border-[#006185] transition-transform duration-300 ease-in-out hover:scale-105'>
              <h3 className='text-center font-extrabold text-[30px] group-hover:text-[#00f7ff] transition-colors duration-300'>Contratação e Segurança</h3>
              <p className='mt-2 line-clamp-4 text-[20px]'>Pagamento único e seguro. Confirmou? Você já cai direto no WhatsApp do Fatal com tudo pronto (plano e valor) para começar. Sem burocracia, só resultado!</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-20 pb-20'>
        <h1 className='text-[70px] leading-none font-bold'>PRONTO PARA</h1>
        <h1 className='text-[200px] font-bold text-cyan-400'>SUBIR?</h1>
        <p className='text-[25px]'>Não espere mais uma temporada. Comece agora.</p>
                  <button type="button" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110
           rounded-lg bg-gradient-to-r from-stone-900 to-sky-900 hover:bg-gradient-to-br
            font-medium rounded-base text-xl px-20 py-5 text-center leading-5 tracking-widest mt-10
            ">👑 Adquirir Agora</button>
      </div>

    </>
  )
}

export default Home
