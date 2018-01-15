const admin = require('firebase-admin')
const axios = require('axios')
const schedule = require('node-schedule')

const serviceAccount = require('./key.json')

// 

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

// references
const refs = new Map()

coins.map(coin => {
  refs.set(coin, db.ref(coin))
})

// 

getData = async (api_url, params) => {

  try {

    return await axios.get(api_url, {params:params})

  } catch(error) {
    console.log(error)
  }

}

// 

saveData = (data, key, convert, api_name) => {

  const result = data.filter(coin => coins.includes(coin[key].toLowerCase()))

  result.map(coin => {

    const coinId = coin[key].toLowerCase()
    const coinRef = refs.get(coinId)

    coinRef.child(convert).child(api_name).set(coin)

  })

}

// 

coinmarketcap = () => {

  const coinmarketcap_api = [
    { url: 'https://api.coinmarketcap.com/v1/ticker/', name: 'coinmarketcap', key: 'symbol', convert: 'USD'},
    { url: 'https://api.coinmarketcap.com/v1/ticker/', name: 'coinmarketcap', key: 'symbol', convert: 'BRL'}
  ]

  coinmarketcap_api.map(point => {

    getData(point.url, {
      limit: 9999,
      convert: point.convert
    })
    .then(res => {
      
      res = res.data

      saveData(data, point.key, point.convert, point.name)

    })
    .catch(error => {
      console.log(error)
    })

  })

}

cryptonator = () => {

  

}

// const end_points_cryptonator = coins.map(coin => {
//   return `https://api.cryptonator.com/api/full/${coin}-${market_coin}`
// })

// const end_points = [
//   'https://www.cryptocompare.com/api/'
// ]

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })
