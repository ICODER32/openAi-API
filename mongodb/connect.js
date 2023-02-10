const mongoose = require('mongoose')

const connectDb = (url) => {
    mongoose.set('strictQuery', true)
    mongoose.connect(url).then(() => {
        console.log('Mongodb Connected')
    }).catch(err => {
        console.log('Connection failed:' + err)
    })
}

module.exports = connectDb