import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './src/routes/authRoutes.js'
dotenv.config()

const app = express()


const users = []

app.use(express.json())
app.use(cors())
app.use('/auth', authRoutes)


app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000')
})