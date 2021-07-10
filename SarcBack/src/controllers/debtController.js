const Debt = require("../models/debito");
const User = require("../models/user");
const Cont = require("../models/cont");
const dividaTotal = require("../models/total");

module.exports = {
  async createDbt(req, res) {
    const { user_id, cont_id } = req.params;
    const { valor, observation } = req.body;

    try {
      if (user_id.length === 24 || cont_id === 24) {//verifica se os ids passados estão correto

           const hasUser = await User.findById(user_id);           
        if (!hasUser || hasUser == undefined || hasUser == null) {//verifica se o user existe
          return res.status(400).json({ message: "User not found" });
        }

        const hasCont = await Cont.findById(cont_id);
        if (!hasCont || hasCont == undefined || hasCont == null) {//verifica se a conta existe
          return res.status(400).json({ message: "Cont not found" });
        }
        
        //cria o debito
        const createDebt = await Debt.create({
          user_id,
          cont_id,
          valor,
          observation,
        });
        return res
          .status(200)
          .json({ message: "Debit registered", createDebt });
      }
      return res.status(400).json({ message: "Invalid Parameters" });
      
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async listDebtUser(req, res) {
    const { user_id } = req.params;
    try {
      //procura se existe o user
      const hasUser = await User.findById(user_id);
      if (!hasUser || hasUser == undefined || hasUser == null) {
        return res.status(400).json({ message: "User not found" });
      }

      const listDebt = await Debt.find({ user_id });

      const Total = await Debt.find();
      const debtos = Total.map((Total) => Total.valor);

      totalDebts = debtos.reduce((va, debto) => va + debto);
      return res.status(200).json({ listDebt, totalDebts });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async updateDebtUser(req, res) {
    const { debt_id } = req.params;
    const { valor } = req.body;

    try {

      const hasDebt = await Debt.findById(debt_id);
        if (!hasDebt || hasDebt == undefined || hasDebt == null) {//verifica se a conta existe
          return res.status(400).json({ message: "Debt not found" });
        }
      
      const updateDebt = await Debt.findOneAndUpdate(
        debt_id,
        { valor },
        { new: true }
      );
      return res.status(200).json(updateDebt);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async deleteDebtUser(req, res) {
    const { debt_id } = req.params;

    try {
      const hasDebt = await Debt.findById(debt_id);

      if (!hasDebt) {
        return res.status(200).json({ message: "Debt not found" });
      } else {
        const dellDebtUser = await Debt.findByIdAndRemove(debt_id);
        return res.status(200).json({ message: "Debit Deleted", dellDebtUser });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async deleteAllDebt(req, res) {
    try {
      const deleteAllDebt = await Debt.deleteMany();
      return res.status(400).json({ message: "All debts has been deleted" });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
