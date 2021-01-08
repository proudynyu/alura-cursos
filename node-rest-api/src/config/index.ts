import { config } from 'dotenv'
import { resolve } from 'path'

config({
  path: resolve(__dirname, '../../.env')
})

export default {
  PORT: process.env.PORT || 3333,
  HOST: process.env.HOST || 'localhost'
}