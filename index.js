// Disc: main server

// --------------- INITIALIZATION --------------- //

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));



// --------------- MAIN --------------- //

app.get('/', (req, res) => {
  res.render('home');
});


app.get('*', (req, res) => {
  res.redirect('/');
});



// --------------- LISTENER --------------- //

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});