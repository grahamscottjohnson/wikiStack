const middlePage = require (`../public/views/addPage.js`)
const express = require (`express`)

const router = express.Router()

router.get(`/:page`, function (req, res) {
	res.send('destination here');
	//return req
})


router.get (`/add`, function (req, res) {
	res.send(middlePage())
})

module.exports = router