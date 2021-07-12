const Credit = require("../models/credit");
const User = require("../models/user");

module.exports = {
  async createCredit(req, res) {
    const { user_id } = req.params;
    const { description, valor } = req.body;

    if (user_id.length === 24) {//verifica se os ids passados estão correto

    const hasUser = await User.findById(user_id);
    if (!hasUser || hasUser == undefined || hasUser == null) {       //verifica se o user existe
      return res.status(400).json({ message: "User not found" });
    }
    const createCredit = await Credit.create({user_id, description, valor });

    return res.status(200).json({ message: "Credit create for user", createCredit });
    }

  },

  async listCredit(req, res) {
    const { user_id } = req.params;

    if (user_id.length === 24) {//verifica se os ids passados estão correto

      const hasUser = await User.findById(user_id);
      if (!hasUser || hasUser == undefined || hasUser == null) {    //verifica se o user existe
        return res.status(400).json({ message: "User not found" });
      }

    const credits = await Credit.find({user_id})
    if(credits.length<1){
      return res.status(404).json({ message: "User has no credits"})
    }
    return res.status(200).json(credits)
  }
  return res.status(400).json({ message: "Invalid Parameters" });
}
};
