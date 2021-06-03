const express = require('express'); 
const data = require('./lib/data.json');

const app = express(); 
const port = 5000; 

app.use(express.static('public')); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {data}); 
}); 

app.listen(port, () => console.log('server started.'));