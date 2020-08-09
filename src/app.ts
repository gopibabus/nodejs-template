// App entry point
const express = require('express');

async function startServer() {
	const app = express();

	app.listen(process.env.PORT, (err: object) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Your server is ready !');
	});
}

startServer();
