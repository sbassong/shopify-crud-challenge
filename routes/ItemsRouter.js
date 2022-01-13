const Router = require('express').Router()
const controller = require('../controllers/ItemsController')

Router.post('/item/create', controller.CreateItem)
Router.put('/update/:item_id', controller.UpdateItem)
Router.get('/items', controller.GetAllItems)
Router.delete('/delete/:item_id', controller.DeleteItem)

module.exports = Router 