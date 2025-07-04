const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
console.log('MONGO_URL:', process.env.mongo_url);
console.log('JWT_SECRET:', process.env.jwt_secret);
mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connetion Successfull');
})

connection.on('error', (err) => {
    console.log('Mongo DB Connetion Failed');
})