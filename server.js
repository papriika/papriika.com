const express = require('express');
const morgan = require('morgan'); // Used for testing in terminal
const path = require('path');
const app = express();

//Static file declaration
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

//Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`))
