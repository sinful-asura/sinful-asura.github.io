const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log('<h1>hello</h1>')
	next();
});

app.get('/', (req,res) => {
	res.send('haahah');
});

app.listen(3000);