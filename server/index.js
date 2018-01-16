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

const currencies = ['usd', 'brl']

// 

const work = async () => {

  try {

    await Promise.all[
      // coinmarketcap()
      cryptonator()
    ]

  } catch(error) {
    console.log(errro)
  }

}

// 

coinmarketcap = async () => {

    try {

      await Promise.all([

        currencies.map(currency => {
          axios('https://api.coinmarketcap.com/v1/ticker/', {
            limit: 10, 
            convert: currency
          })
          .then(res => {

            res = res.data

            res = res.filter(coin => coins.includes(coin['symbol'].toLowerCase()))

            res.map(coin => {

              const coinId = coin['symbol'].toLowerCase()
              const coinRef = refs.get(coinId)
    
              coinRef.child(currency).child('coinmarketcap').set(coin)
    
            })

          })
          .catch(error => console.log(error))
        })

      ])

    } catch(error) {
      console.log(error)
    }

    console.log('done')

}

cryptonator = async () => {

  try {

    let coinList = await axios('https://www.cryptonator.com/api/currencies')

    coinList = coinList.data.rows

    coinList = coinList.filter(coin => coins.includes(coin['code'].toLowerCase()))

    requestList = [];
      
    currencies.map(currency => {

      coinList.map(coin => {

        const coinId = coin['code'].toLowerCase()
        requestList.push({url: `https://api.cryptonator.com/api/full/${coinId}-${currency}`, currency: currency, id: coinId})

      })

    })

    await Promise.all([
      
      requestList.map(req => {

        axios(req.url)
        .then(res => {

          res = res.data

          res.map(coin => {
            
          })

        })
        .catch(error => {
          // console.log(error)
        })

      })

    ])

  } catch(error) {

  }
  
}

// const end_points = [
//   'https://www.cryptocompare.com/api/'
// ]

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })

work()