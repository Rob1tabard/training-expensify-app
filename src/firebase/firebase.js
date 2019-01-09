import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }

  firebase.initializeApp(config)


  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export { firebase, googleAuthProvider, database as default}














































 

//   database.ref().set({
//       name: 'Robin Tabard',
//       stressLevel: 6,
//       job: {
//           title: 'software developer',
//           company: 'spotify'
//       },
//       age: 25,
//       location: {
//           city: 'Joensuu',
//           country: 'Finland'
//       },
//       isSingle: false
//   })

// database.ref('isSingle').remove().then(()=> {
//     console.log('isSingle removed')}).catch((e) => {
//         console.log('an error occur', e)})

// database.ref().update({
//     stressLevel: 9,
//     'job/title': 'Manager',
//     'location/city': 'Helsinki'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data= snapshot.val()
//     console.log(data)
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//     console.log('error when fetching data', e)
// })

// database.ref().update({
//     'job/title': 'Senior Developper',
//     'location/city': 'Tampere'
// })

// database.ref('expenses').push({
//     description: 'electricity bill',
//     note: 'payement og the bill sooner this month',
//     amount: 12340,
//     createdAt: 163886639963
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'First month in my new appartement',
//     amount: 12760,
//     createdAt: 16388663996323
// })

// database.ref('expenses').push({
//     description: 'gym fee',
//     note: 'Gym fee at the venice beach gold gym',
//     amount: 3900,
//     createdAt: 163889963
// })

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnap) => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             })
//         })
//         console.log(expenses)
// })

// database.ref("expenses").on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
