const {get} = require('axios')

class ListMarcas
{
    async list(req,res)
    {
        const marcas = await get(`http://fipeapi.appspot.com/api/1/${req.params.veiculos}/marcas.json`)
        res.json(marcas.data)
    }
}

module.exports = new ListMarcas