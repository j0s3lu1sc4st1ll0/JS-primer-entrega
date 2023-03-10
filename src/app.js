const path = require('path');
const express = require('express');
const app = express();

app.set ('view engine', 'ejs');
app.set('views', path.resolve (__dirname, './views'));
app.use (express.static(path.resolve(__dirname, '../public')));


/*Sistema de Rutas*/ 
const main = require ('./routes/main');
app.use('/',main)
const products = require('./routes/products');
app.use('/products', products);

app.use((req, res)=>{
    res.render('404-page')
})

app.listen(3000,()=> console.log('Servidor corriendo en el puerto 3000'));