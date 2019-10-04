const request = require('request')

class Address {

    async getCitys(req, res) {

        const options = {
            url: `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${req.query.id}/municipios`,
            method: 'GET', // Método de conexão HTTP
        }

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            body = JSON.parse(body)
            body.sort(function(a, b) {
                return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
            });
            res.json(body)
        });


    }

    async getAddress(req, res) {

        const options = {
            url: `http://viacep.com.br/ws/${req.query.cep}/json/`,
            method: 'GET', // Método de conexão HTTP
        }

        request(options, function(error, response, body) {
            if (error) throw new Error(error);

            body = JSON.parse(body)
            res.json(body)
        });


    }
}

module.exports = new Address();