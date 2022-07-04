const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const add_route = require('./routes/victims/victim.route')

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

// secure apps by setting various HTTP headers

// enable CORS - Cross Origin Resource Sharing
app.use(cors())
app.use(express.static('public'))

const mongooseDebug = true
const mongoUri =
  'mongodb+srv://shiftaw:Ict4rd2012@cluster0.jpxr5mv.mongodb.net/data?authSource=admin&replicaSet=atlas-uu3ocy-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
mongoose.connect(mongoUri).then((res) => {
  console.log('connected to db  ', mongoUri)
})

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

// print mongoose logs in dev env
if (mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    //debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc)
  })
}

app.use(function (err, req, res, next) {
  req.local = 'daniel'
  next()
})
// mount all routes on /api path

app.use('/victim', add_route)
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('App started', 4000)
})
