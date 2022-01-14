const Router = require('express').Router()
const controller = require('../controllers/ItemController')

//POST
Router.post('/item/create', controller.CreateItem)

//PUT
Router.put('/update/:item_id', controller.UpdateItem)

//GET
Router.get('/items', controller.GetAllItems)
Router.get('/items/filter/:query', controller.FilterBasedOnQuery)

//DELETE
Router.delete('/delete/:item_id', controller.DeleteItem)

module.exports = Router 