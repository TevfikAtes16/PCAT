const express = require('express');
const path = require('path');

const app = express();

//Middlewares
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './temp/index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portundan başlatildi.`);
});
