const express = require('express');
const morgan = require('morgan'); // Used for debugging in terminal
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'client/build')));

//Production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname = 'client', 'build', 'index.html'));
  })
}

//Build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`))
