const express = require('express');
const morgan = require('morgan');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Static path
app.use(express.static(path.join(__dirname, 'client/build')));

// Route to client
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello, Guy');
});

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
