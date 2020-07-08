let { PORT } = require('./config');
const app = require('express')();

app.get('/', a => {
    console.log('sdfsd')
})

app.listen(PORT, err => {
	if (err) console.log('error start');
	else console.log('start port = '+ PORT);
});