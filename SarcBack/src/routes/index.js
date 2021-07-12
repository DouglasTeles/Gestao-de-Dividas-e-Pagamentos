const {Router} = require('express')
const authenticate = require('../middlewares/auth')
const loginController = require('../controllers/loginController')
const routes = Router()


//Users
const userController = require('../controllers/userController')
routes.post('/sarc/user',authenticate.verifyToken, userController.createUser)//Cadastra usuario
routes.get('/sarc/user' ,userController.listUser)//Lista usuarios
routes.delete('/sarc/user/:user_id/delete',authenticate.verifyToken, userController.deleteUser)//Deleta usuario


//Contas
const contController = require('../controllers/contController')
routes.post('/sarc/cont',authenticate.verifyToken, contController.createCont)//Cadastrar conta
routes.get('/sarc/conts', contController.listCont)//Listar todas as contas
routes.delete('/sarc/cont/:cont_id/delete',authenticate.verifyToken, contController.deleteCont)//Deletar Conta especifica


//Debit
const debtController = require('../controllers/debtController')
routes.post('/sarc/debt/:user_id/:cont_id/create',authenticate.verifyToken, debtController.createDbt )//Cadastrar debt para um morador
routes.get('/sarc/debts/:user_id', debtController.listDebtUser)//listar debts de um morador
routes.delete('/sarc/debts/deleteall', debtController.deleteAllDebt)//Deletar todos os debitos
routes.put('/sarc/debt/update/:debt_id',authenticate.verifyToken, debtController.updateDebtUser)//Atualizar debt de um morador
routes.delete('/sarc/debt/delete/:debt_id',authenticate.verifyToken, debtController.deleteDebtUser)//Deletar debt de um morador

//Crédit
const creditController = require('../controllers/creditController')
routes.post('/sarc/credit/:user_id/new',authenticate.verifyToken, creditController.createCredit)//Cadastrar crédito
routes.get('/sarc/credit/:user_id/list', creditController.listCredit)//Listar crédito

//Total
const totoalController = require('../controllers/totalController')
routes.get('/sarc/total/:user_id', totoalController.listTotal )//Lista débitos totais de um morador

//Login
routes.post('/sarc/login', loginController.login)

module.exports = routes