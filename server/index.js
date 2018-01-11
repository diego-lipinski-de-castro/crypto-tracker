const admin = require('firebase-admin')
const axios = require('axios')
const schedule = require('node-schedule')

const serviceAccount = require('./key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://crypto-tracker-dc.firebaseio.com'
})

// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// })

// admin.initializeApp(functions.config().firebase)

const db = admin.database()

const coins = require('./coins.json')

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })

/*
  - https://coinmarketcap.com/api/
  - https://www.cryptocompare.com/api/
  - https://www.cryptonator.com/api
*/