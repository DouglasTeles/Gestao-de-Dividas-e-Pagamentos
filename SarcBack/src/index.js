const express = require('express')
const app = express()
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')
app.use (express.json())
app.use(cors())


//mongoose
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
    },
    console.log('Conected Database!'))


//Routes
const routes = require('./routes')
app.use(routes)

app.listen(process.env.PORT || 2424, ()=> {
    console.log("Server running!")
})