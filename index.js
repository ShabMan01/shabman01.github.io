// // Disc: main server

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



// --------------- proj: CoolCalcs --------------- //

const coolcalcsApp = express();
coolcalcsApp.set('view engine', 'ejs');
coolcalcsApp.set('views', path.join(__dirname, 'projects', 'CoolCalcs', 'views'));
coolcalcsApp.use(express.static(path.join(__dirname, 'projects', 'CoolCalcs', 'static')));
coolcalcsApp.use(express.json());
coolcalcsApp.use(express.urlencoded({ extended: true }));

require('./projects/CoolCalcs/index')(coolcalcsApp);

app.use('/projects/coolcalcs', coolcalcsApp);



// --------------- MAIN --------------- //

app.get('*', (req, res) => {
  res.render('error');
});



// --------------- LISTENER --------------- //

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Portfolio server running on port ${PORT}`);
});