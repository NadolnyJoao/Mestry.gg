import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/auth/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    })

    const data = await res.json()

    if (res.ok) {
      navigate('/') 
    } else {
      setErro(data.erro) 
    }
  }

  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='border-5 rounded-xl py-10 px-10'>
          <h1 className='text-center font-bold text-[30px] mb-15'>CADASTRO</h1>
          {erro && <p className='text-red-500 text-center mb-4'>{erro}</p>}
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-10'>
              <input value={nome} onChange={e => setNome(e.target.value)}
                className='text-center border-2 py-3 rounded-xl tracking-widest' type="text" placeholder="USUARIO" />
              <input value={email} onChange={e => setEmail(e.target.value)}
                className='text-center border-2 py-3 rounded-xl tracking-widest' type="email" placeholder="EMAIL" />
              <input value={senha} onChange={e => setSenha(e.target.value)}
                className='text-center border-2 py-3 rounded-xl tracking-widest' type="password" placeholder="SENHA" />
              <button type="submit" className='transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110
                rounded-lg bg-gradient-to-r from-stone-900 to-sky-900 hover:bg-gradient-to-br
                font-medium text-xl px-20 py-5 text-center leading-5 tracking-widest mt-10'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login