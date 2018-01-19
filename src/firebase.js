import * as firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './assets/firebaseConfig.json'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export { firebase, firebaseApp }