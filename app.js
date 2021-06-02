const express = require('express'); 

const app = express(); 
const port = 5000; 

app.use(express.static('public')); 

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index'); 
}); 

app.listen(port, () => console.log('server started'));