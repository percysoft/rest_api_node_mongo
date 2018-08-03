require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req,res) => {
    res.json('get usuarios');
});

app.post('/usuario', (req,res) => {

    let body = req.body;

    body.nombre === undefined ? res.status(400).json({
        ok:false,
        mensaje: 'Error el nombre es necesario',
    }) : res.json({
        body
    });

});


app.put('/usuario/:id', (req,res) => {
    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req,res) => {
    res.json('delete usuarios');
});

app.listen(process.env.PORT, ()=>{
    console.log('Se esta escuchando en el puerto 3000');
});