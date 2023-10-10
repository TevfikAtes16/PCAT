const express = require('express');
const path = require('path');
const ejs = require('ejs');

const port = 3000;
const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, './temp/index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portundan başlatildi.`);
});
