require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
// const cors=require('cors');
const massive = require('massive');
const app = express();
const port = 3005;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/houses', ctrl.getAll)
app.post('/api/house', ctrl.create)
app.delete('/api/house/:id', ctrl.delete)




app.listen(port, () => console.log(`listening on port ${port}`));