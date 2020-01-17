const expess = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = expess();

// mongoose.connect('mongodb+srv://luan:luan1627@cluster0-bwgh9.mongodb.net/banco?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/teste_node', {useNewUrlParser: true});

app.use(cors());

app.use(expess.json());

app.use(routes);

app.listen(3333);

