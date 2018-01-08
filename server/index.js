const admin = require('firebase-admin')
const axios = require('axios')
const schedule = require('node-schedule')

const serviceAccount = require('./key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://crypto-tracker-dc.firebaseio.com'
})

const db = admin.database()

const percentage_ref = db.ref('percentage')

const fetchData = async (api_url) => {

  try {

    const res = await axios.get(api_url)
    const data = res.data    
    return data

  } catch (error) {
    return error
  }

}

const getData = async () => {

  try {

    let data = await Promise.all([
      fetchData('https://api.coinmarketcap.com/v1/ticker/?limit=9999')
    ]).then(res => {
      saveData(res)
    })
    .catch(error => {
      console.log(error)
    })

    return data

  } catch(error) {
    return error
  }

}

const saveData = (data) => {
  percentage_ref.set(data[0])
}

schedule.scheduleJob('*/5 * * * *', () => {
  getData()
})

/*
  - percentage - https://coinmarketcap.com/api/
  - raw data - https://www.cryptocompare.com/api/
  - history - https://www.cryptocompare.com/api/
  - marketshare - https://www.cryptonator.com/api
*/