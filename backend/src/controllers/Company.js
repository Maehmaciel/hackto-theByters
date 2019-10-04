const CompanyModel = require('../models/company')

class Company {
    async registerCompany(req, res) {
        try {
            console.log(req.body)
            await ActivityModel.create(req.body)
            res.send('Registrado')
        } catch (err) {
            console.log(err)
            return res.status(400).send(err)
        }
    }


    async getCompany(req, res) {
        const company = await CompanyModel.findOne({ _id: req.companyId })

        return res.json(company)
    }

}

module.exports = new Company();