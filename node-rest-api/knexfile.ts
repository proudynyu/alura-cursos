import { resolve } from 'path'

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'src', 'data', 'database.sqlite')
  },
  migrations: {
    directory: resolve(__dirname, 'src', 'data', 'migrations')   
  },
  seeds: {
    directory: resolve(__dirname, 'src', 'data', 'seeds')
  },
  useNullAsDefault: true
}