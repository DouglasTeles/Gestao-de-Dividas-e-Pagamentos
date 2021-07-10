const Credit = require("../models/credit");

module.exports = {
  async createCredit(req, res) {
    const {user_id} = req.params
    const {description, valor} = req.body

    const createCredit = await Credit.create({description, valor})

    return res.status(200).json({message:"Credit create for user", createCredit})
  }
}
