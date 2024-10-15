const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/backend';

mongoose.connect(dbURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err.message);
})