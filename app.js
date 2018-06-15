const morgan = require (`morgan`)
const express = require (`express`)
const bodyParser = require (`body-parser`)
const { db } = require (`./models/index.js`)

const app = express()
	
const index = require (`./views/index.js`)

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan(`dev`))
app.use(express.static(`public`))

app.get(`/`, function (req, res) {
	res.send(index.main())

})

const PORT = process.env.PORT || 3000

app.listen (PORT)