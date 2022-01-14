const Router = require('express').Router()
const ItemRouter = require('./ItemRouter')


Router.use('/inventory', ItemRouter)


module.exports = Router 