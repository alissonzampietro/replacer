const express = require('express')
const app = express()
const routes = require('./src/routes/')


app.use(routes);

app.listen(8083, () => {
    console.log('Funcionando na porta 8083')
});