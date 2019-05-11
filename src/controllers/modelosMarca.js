// 
const {get} = require('axios')

class ModelosMarca
{
    async list(req,res)
    {
        const marcas = await get(`http://fipeapi.appspot.com/api/1/${req.params.tipo}/${req.params.acao}/${req.params.marca}.json`)
        res.json(marcas.data)
    }
}

module.exports = new ModelosMarca
