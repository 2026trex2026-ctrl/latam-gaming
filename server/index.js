require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const cors = require('cors')
const { AccessToken } = require('livekit-server-sdk')

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = 'APIWmZZiojN5kxo'
const API_SECRET = 'Wm9h2HvYKRTfONewIPWlcFRyWy4xfoNbWeu61gJKCdsB'

app.post('/token', async (req, res) => {
  const { room, username } = req.body

  if (!room || !username) {
    return res.status(400).json({ error: 'room y username son requeridos' })
  }

  const token = new AccessToken(API_KEY, API_SECRET, {
    identity: username,
  })

  token.addGrant({
    roomJoin: true,
    room: room,
    canPublish: true,
    canSubscribe: true,
  })

  const jwt = await token.toJwt()
  res.json({ token: jwt })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})