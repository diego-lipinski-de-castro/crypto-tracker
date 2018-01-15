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

const supportedCurr = ['usd', 'brl']

// 

getData = async (api_url, params) => {

  try {

    return await axios.get(api_url, {params:params})

  } catch(error) {
    // console.log(error)
  }

}

// 

filterData = (data, key) => {

  const result = data.filter(item => coins.includes(item[key].toLowerCase()))

  return result

}

// 

saveData = (data, key, currency, api_name) => {

  data.map(coin => {

    const coinId = coin[key].toLowerCase()
    const coinRef = refs.get(coinId)

    coinRef.child(currency).child(api_name).set(coin)

  })

}

// 

coinmarketcap = () => {

  supportedCurr.map(curr => {

    getData('https://api.coinmarketcap.com/v1/ticker/', {
      limit: 9999,
      convert: curr
    })
    .then(res => {

      res = res.data

      res = filterData(res, 'symbol')
      
      saveData(res, 'symbol', curr, 'coinmarketcap')

    })
    .catch(error => {
      console.log(error)
    })
 
  })

}

cryptonator = () => {

  getData('https://www.cryptonator.com/api/currencies')
  .then(res => {
    
    let coinList = res.data.rows

    coinList = filterData(coinList, 'code')

    supportedCurr.map(curr => {

      let currData = []

      currData.push(coinList.map(coin => {

        const coinId = coin['code'].toLowerCase()

        return getData(`https://api.cryptonator.com/api/full/${coinId}-${curr}`, {})
        .then(res => {
          return res.data.ticker
        })
        .catch(error => {
          // console.log(error)
          return null
        })

      }))

      // saveData(currData, 'base', curr, 'cryptonator')

      console.log(currData)

    })
    // end mapping

    console.log('done')

  })
  .catch(error => {
    console.log(error)
  })

  // console.log(coinList)

}

cryptonator()

// const end_points = [
//   'https://www.cryptocompare.com/api/'
// ]

// schedule.scheduleJob('*/5 * * * *', () => {
//   getData()
// })
