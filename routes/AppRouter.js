const Router = require('express').Router()
const ItemsRouter = require('./ItemsRouter')


Router.use('/inventory', ItemsRouter)


module.exports = Router 