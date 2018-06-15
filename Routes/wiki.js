const middlePage = require (`../public/views/addPage.js`)
const express = require (`express`)
const router = express.Router()

const { Page } = require("../models");
const { addPage } = require("../public/views"); 

router.get(`/`, function (req, res) {
	//res.send('destination here');
	res.send ("Hello world")
	//return req
})

router.post('/', async (req, res, next) => {

	const page = new Page({
		title: req.body.title,
		content: req.body.content
	})

	try {
		await page.save();
		res.redirect('/');	
	} catch (error){
		next(error);
	}

})

router.get (`/add`, function (req, res) {
	res.send(middlePage())
})

module.exports = router