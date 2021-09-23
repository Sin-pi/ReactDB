const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const mysql = require('mysql2')

const db = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: 'uuddlrlrbastart1969@@@@@',
	database: 'movies'
});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));


app.post("/api/insert", (req, res)=> {
	const movieName = req.body.movieName
	const MovieReview = req.body.MovieReview


	const sqlInsert = "INSERT INTO movie_reviews (moviName, movieReview) VALUES (?,?)"
	db.query(sqlInsert,[movieName, MovieReview], (err, result) => {
		console.log(result)
	})
});


app.listen(3001,() => {
	console.log('running on port 3001')
})