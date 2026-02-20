/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient({
  adapter: {
    url: process.env.DATABASE_URL
  },
})
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
