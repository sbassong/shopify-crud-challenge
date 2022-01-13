const Router = require('express').Router()
const controller = require('../controllers/ItemsController')

Router.post('/item/create', controller)
Router.put('/update/:item_id', controller)
Router.get('/items', controller)
Router.delete('/delete/:item_id', controller)

module.exports = Router 