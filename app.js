'use strict'

const io = require('@pm2/io')
const express = require('express')
const app = express()

io.init({
  standalone: true,
  publicKey: process.env.PM2_PUBLIC_KEY,
  secretKey: process.env.PM2_SECRET_KEY,
  appName: 'express-error-handler'
})

app.get('/', (req, res) => {
  throw new Error('PM2 <3')
  res.send('PM2 <3')
})

app.use(io.expressErrorHandler())

app.listen(3000, () => {
  console.log('Started at :3000')
})

