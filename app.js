const morgan = require (`morgan`)
const express = require (`express`)
const models = require (`./models/index.js`)
// const index = require('./public/views/index.js');
const layout = require('./public/views/layout')
const bodyParser = require (`body-parser`)

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
// ...

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})
const PORT = process.env.PORT || 3000;

const app = express();

app.use( bodyParser.urlencoded({urlencoded: false}) );
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);
app.use(morgan(`dev`));
app.use(express.static(`public`))

app.get(`/`, function (req, res) {
	res.redirect(`/wiki`)
})

const init = async () => {
    await models.User.sync();
    await models.Page.sync();
    await models.db.sync();
    app.listen (PORT, () => {
        console.log("running on port " + PORT);
    });
}
init();