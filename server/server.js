const { reduceRight } = require('./controllers/arrayCtrl');

require('dotenv').config();

const path = require('path')
const express = require('express'),
      massive = require('massive'),
      Ctrl = require('./controllers/ctrlr'),
      session = require('express-session'),
      cardCtrl = require('./controllers/cardCtrl'),

      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});


//game endpoints
app.get('/api/open-cards', cardCtrl.getOpenTroopers);

app.post('/api/my-troopers', Ctrl.recruitTroopers);
app.put('/api/my-troopers/:id', Ctrl.editName);
app.delete('/api/my-troopers/:id', Ctrl.KIATroopers);

//auth endpoints
app.post('/api/register', Ctrl.register);
app.post('/api/login', Ctrl.login);
app.post('/api/logout', Ctrl.logout);


//post endpoints


//user endpoints



app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(port, () => console.log(`Server running on port ${port}`));