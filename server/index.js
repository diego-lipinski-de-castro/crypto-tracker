const admin = require('firebase-admin')
const functions = require('firebase-functions')
const axios = require('axios')
const schedule = require('node-schedule')

const serviceAccount = require('./key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

// admin.initializeApp({
//   credential: admin.credential.applicationDefault()
// })

// admin.initializeApp(functions.config().firebase)

const db = admin.firestore()

const coinsRef = db.collection('coins')

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })

/*
  - https://coinmarketcap.com/api/
  - https://www.cryptocompare.com/api/
  - https://www.cryptonator.com/api
*/