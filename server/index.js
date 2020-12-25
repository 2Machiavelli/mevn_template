const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const server = require('http').createServer(app)

// Connect the .env file
require('dotenv').config()

;(async function() {
  const PORT = process.env.PORT || 5000

  // Middleware
  app.use(express.json())
  app.use(cors())
  app.use(cookieParser()) 

  // Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  await server.listen(PORT, () => console.log(`Server is running in: ${PORT}`))

  // Handle prod
  if (process.env.NODE_ENV === 'production')  {
    // Static
    app.use(express.static(__dirname + '/public/'))

    // SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
  }

}())