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

const refs = coins.map(coin => {
  return {
    [coin]: db.ref(coin)
  }
})

const coinmarketcap_end_point = 'https://api.coinmarketcap.com/v1/ticker/?limit=9999'

getData = async (api_url) => {

  try {

    return await axios.get(api_url)

  } catch(error) {
    console.log(error)
  }

}

getData(coinmarketcap_end_point)
.then(res => {
  console.log(res)

})
.catch(error => {
  console.log(error)
})

// const end_points_cryptonator = coins.map(coin => {
//   return `https://api.cryptonator.com/api/full/${coin}-usd`
// })

// const end_points = [
//   'https://www.cryptocompare.com/api/'
// ]

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })