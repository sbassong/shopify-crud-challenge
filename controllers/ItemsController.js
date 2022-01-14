const { Items } = require('../models')
const { Op } = require('sequelize')



const CreateItem = async (req, res) => {
  try {
    const item = await Items.create(req.body)
    res.status(201).send(item)
  } catch (error) {
      throw error
  }
}

const GetAllItems = async (req, res) => {
  try {
    const items = await Items.findAll()
    res.status(200).send(items)
  } catch (error) {
    throw error
  }
}

const UpdateItem = async (req, res) => {
  try {
    let itemId = parseInt(req.params.item_id)
    let updatedItem = await Items.update(req.body, {
      where: {id: itemId},
      returning: true
    })
    
    res.status(200).send(updatedItem)
  } catch (error) {
    throw error
  }
}

const DeleteItem = async (req, res) => {
  try {
    let itemId = parseInt(req.params.item_id)
    await Items.destroy({
      where: {id: itemId}
    })
    res.status(200).send({msg: `Item with id ${itemId} has been successfully deleted!`})
  } catch (error) {
    throw error
  }
}

const FilterBasedOnAttribute = async (req, res) => {
  try {
    let filterValue = req.params.filter_value.toLowerCase()

    const items = await Items.findAll()

    let filteredItems = items.filter(item => {
      let nameMatch = item.name.toLowerCase().includes(filterValue)
      let categoryMactch = item.category.toLowerCase().includes(filterValue)
      let parsedValue = parseInt(filterValue)

      if (item.price === parsedValue) {
        return item
      }
      else if ( nameMatch || categoryMactch) {
        return item
      } 
      return
    })
    
    filteredItems.length > 0
    ? res.status(200).send(filteredItems)
    : res.status(404).send({msg: `No item matching '${filterValue}' in inventory`})
  } catch (error) {
    
  }
}

module.exports = {
  GetAllItems,
  CreateItem,
  UpdateItem,
  DeleteItem,
  FilterBasedOnAttribute
}