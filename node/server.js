const http = require('http');

const server = http.createServer((request, response) => {
	// console.log('headers:', request.headers);
	// console.log('method:', request.method);
	// console.log('url:', request.url);

	const user={
		name: 'Kristijan',
		id: '0',
		'card-number': '2246-4435-1296-5031'
	}

	response.setHeader('Content-Type', 'application/json; charset=utf8');
	response.end(JSON.stringify(user));
})

server.listen(3000);