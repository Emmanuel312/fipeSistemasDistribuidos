const routes = require('express').Router()
const listMarcas = require('./controllers/listMarcas')
const modelosMarca = require('./controllers/modelosMarca')

routes.get('/:veiculo', listMarcas.list)
routes.get('/:tipo/:acao/:marca', modelosMarca.list)

module.exports = routes