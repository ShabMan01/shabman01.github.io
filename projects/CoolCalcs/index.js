// // Disc: main server

// // --------------- INITIALIZATION --------------- //
// const express = require('express');
// const app = express();

// const static_files_router = express.static('static');
// app.use( static_files_router );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');



// // --------------- MAIN --------------- //

// app.get('/', (req, res) => {
//     res.render('home');
// });


// app.get('/bf-level', (req, res) => {
//     res.render('calc_bf-level');
// });

// app.get('/bf-mastery', (req, res) => {
//     res.render('calc_bf-mastery');
// });


// app.get('/*', (req, res) => {
//     res.render('error');
// });


// // --------------- LISTENER --------------- //
// var listener = app.listen(
//     process.env.PORT || 8080, 
//     process.env.HOST || "0.0.0.0", 
//     function() {
//         console.log("Express server started");
//     }
// );














// projects/coolcalcs/index.js
module.exports = function(app) {
    app.use((req, res, next) => {
        res.locals.baseURL = '/projects/coolcalcs';
        next();
    });

    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/bf-level', (req, res) => {
        res.render('calc_bf-level');
    });

    app.get('/bf-mastery', (req, res) => {
        res.render('calc_bf-mastery');
    });

    app.use((req, res) => {
        res.status(404).render('error');
    });
};