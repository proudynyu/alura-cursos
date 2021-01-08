import app from './server'
import config from './config'

app.listen(config.PORT, () => {
  console.log(`Server on ${config.HOST}:${config.PORT}`)
})