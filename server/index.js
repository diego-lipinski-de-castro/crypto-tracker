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

const refs = new Map()

coins.map(coin => {
  refs.set(coin, db.ref(coin))
})

const coinmarketcap_end_point = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'

getData = async (api_url) => {

  try {

    return await axios.get(api_url)

  } catch(error) {
    console.log(error)
  }

}

filterData = (data) => {

  let result = data.filter(coin => coins.includes(coin.symbol.toLowerCase()))

  return result

}

saveData = (api_name, data) => {

  data.map(coin => {

    const coinId = coin.symbol.toLowerCase()
    const coinRef = refs.get(coinId)

    coinRef.child(api_name).set(coin)

  })

  console.log('done')

}

// const end_points_cryptonator = coins.map(coin => {
//   return `https://api.cryptonator.com/api/full/${coin}-usd`
// })

// const end_points = [
//   'https://www.cryptocompare.com/api/'
// ]

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })

coinmarketcap = () => {

  getData(coinmarketcap_end_point)
    .then(res => {

      res = res.data

      saveData('coinmarketcap', filterData(res))

    })
    .catch(error => {
      console.log(error)
    })

}

coinmarketcap()