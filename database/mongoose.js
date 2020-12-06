const mongoose = require('mongoose')

mongoose
.connect(process.env.LOCAL_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connected to database'))
.catch(e => console.log(e))


module.exports = mongoose