const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'smart-brain-db'
  }
});

const app = express();

//----------------------MIDDLEWARE----------------------

	app.use(bodyParser.json());
	app.use(cors());

//------------------MIDDLEWARE END----------------------

const database = {
	users: [
	{
		id: '0',
		name: 'kur',
		email: 'kur@moj.tvoj',
		password: 'mayne',
		entries: 0,
		joined: new Date()
	},
		{
		id: '1',
		name: 'pal',
		email: 'pal@moj.tvoj',
		password: 'tvayne',
		entries: 0,
		joined: new Date()
	}
	],
	login: [
		{
			id: '987',
			hash: '',
			email: 'john@gmail.com'
		}
	]
}

app.get('/', (req,res) => {
	res.json(database.users);
});


app.post('/sign-in', (req,res) => {
	const { email , password } = req.body;
	knex.select('email', 'hash').from('login')
		.where('email', '=', email)
		.then(data => {
			const isValid = bcrypt.compareSync(password, data[0].hash);
			if (isValid){
				return knex.select('*').from('users')
				.where('email', '=', email)
				.then(user => {
					res.json(user[0])
				})
				.catch(err => res.status(400).json('unable to get user'))
			}
			else{
				res.status(400).json('wrong credentials')
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
});

app.post('/register', (req,res) => {
	const { name, email, password} = req.body;
	const hash = bcrypt.hashSync(password);
	knex.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail =>{
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date()
			})
			.then(user => {
				res.json(user[0]);
			})
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})
	.catch(error => res.status(666).json('CRITICAL: Unable to register!!!'))
});


app.get('/profile/:id', (req, res) => {
	const {id} = req.params;
	knex.select('*').from('users').where({ id })
	.then(user => {
		if(user.length){
			res.json(user[0])
		} else{
			res.status(400).json('Not found!')
		}
	})
	.catch(err => res.status(400).json('Error getting user!'))
});

app.put('/image', (req, res) => {
	const {id} = req.body;
	knex('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('Unable to get entries'))
});

app.listen(3000, () => {
	console.log('app is running on port 3000');
});