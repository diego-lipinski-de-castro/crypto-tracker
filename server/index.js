const axios = require('axios')

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

    const data = await Promise.all([
      fetchData('https://api.coinmarketcap.com/v1/ticker/?limit=2000')
    ]).then(res => {
      return res
    })
    .catch(error => {
      return error
    })

  } catch(error) {

    return error

  }

}

console.log(getData())

/*
  - percentage - https://coinmarketcap.com/api/
  - raw data - https://www.cryptocompare.com/api/
  - history - https://www.cryptocompare.com/api/
  - marketshare - https://www.cryptonator.com/api
*/

const icons = [
  { id: '', name: 'AquariusCoin' },
  { id: '', name: 'Augur' },
  { id: '', name: 'Bitcoin' },
  { id: '', name: 'BitConnect' },
  { id: '', name: 'BitShares' },
  { id: '', name: 'Bytecoin' },
  { id: '', name: 'Dash' },
  { id: '', name: 'Decred' },
  { id: '', name: 'EOS' },
  { id: '', name: 'Ethereum' },
  { id: '', name: 'Golem' },
  { id: '', name: 'Iconomi' },
  { id: '', name: 'IOTA' },
  { id: '', name: 'LanaCoin' },
  { id: '', name: 'Litecoin' },
  { id: '', name: 'Monero' },
  { id: '', name: 'NEM' },
  { id: '', name: 'Netko-coin' },
  { id: '', name: 'NevaCoin' },
  { id: '', name: 'Ripple' },
  { id: '', name: 'Siacoin' },
  { id: '', name: 'Steem' },
  { id: '', name: 'Stratis' },
  { id: '', name: 'Suncontract' },
  { id: '', name: 'TajCoin' },
  { id: '', name: 'Waves' },
  { id: '', name: 'Xaurum' },
  { id: '', name: 'Zcash' }
]