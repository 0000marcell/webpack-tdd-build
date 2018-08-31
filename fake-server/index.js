const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/products", function(req, res) {
  res.send({ id: 1, name: 'testing'});
});

app.listen(3000, function () {
  console.log('listening at 3000');
});
