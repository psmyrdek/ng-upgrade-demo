const express = require('express')
const {join} = require('path')

const app = express();

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/static', express.static(join(__dirname, '../client-app-next/dist')))
app.use('/', (req, res) => res.render('index'))

module.exports = app