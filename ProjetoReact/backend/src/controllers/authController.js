import pool from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

async function cadastrar(req, res) {
  const { nome, email, senha } = req.body
  const senhaHash = await bcrypt.hash(senha, 10)

  const result = await pool.query(
    'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email',
    [nome, email, senhaHash]
  )

  res.json(result.rows[0])
}

async function login(req, res) {
  const { email, senha } = req.body

  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email])
  const usuario = result.rows[0]

  if (!usuario) return res.status(401).json({ erro: 'Usuário não encontrado' })

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
  if (!senhaCorreta) return res.status(401).json({ erro: 'Senha incorreta' })

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

  res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } })
}

export { cadastrar, login }