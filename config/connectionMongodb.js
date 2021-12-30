const mongoose = require('mongoose');

const user = 'dyanmobd';
const password = 'Nl5MJOkFOk7EbPkZ';
const dbname = 'lab16'
const uri = `mongodb+srv://${user}:${password}@cluster0.kh22e.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })

    .then(() => console.log('Base de datos conectada'))
    .then(e => console.log('e'))

