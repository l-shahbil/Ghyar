import dotenv from 'dotenv'
import app from './app.js'
import logger from './lib/logger.js'
// import prisma from './lib/prisma.js'

dotenv.config()

const PORT = process.env.PORT || 5050

async function startServer() {
  try {
    await prisma.$connect()
    logger.info('Connected to the database')

    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`)
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    logger.error('Failed to connect to the database:', error)
    process.exit(1)
  }
}

function handleShutdown() {
  process.on('SIGINT', async () => {
    logger.info('Shutting down server...')
    await prisma.$disconnect()
    process.exit(0)
  })

  process.on('SIGTERM', async () => {
    logger.info('Shutting down server...')
    await prisma.$disconnect()
    process.exit(0)
  })
}

startServer()
handleShutdown()
