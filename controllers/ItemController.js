const { Item } = require('../models')
const { Op } = require('sequelize')



const CreateItem = async (req, res) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).send(item)
  } catch (error) {
      throw error
  }
}

const GetAllItems = async (req, res) => {
  try {
    const items = await Item.findAll()
    res.status(200).send(items)
  } catch (error) {
    throw error
  }
}

const UpdateItem = async (req, res) => {
  try {
    let itemId = parseInt(req.params.item_id)
    let updatedItem = await Item.update(req.body, {
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
    await Item.destroy({
      where: {id: itemId}
    })

    res.status(200).send({msg: `Item with id ${itemId} has been successfully deleted!`})
  } catch (error) {
    throw error
  }
}

const FilterBasedOnQuery = async (req, res) => {
  try {
    let query = req.params.query
    let lowCaseQuery = query.toLowerCase()

    const items = await Item.findAll()

    const filteredItems = items.filter(item => {
      const {price, category, name} = item
      let nameMatch = name.toLowerCase().includes(lowCaseQuery)
      let categoryMatch = category.toLowerCase().includes(lowCaseQuery)
      let parsedValue = parseInt(lowCaseQuery)

      if (price === parsedValue) {
        return item
      }
      else if ( nameMatch || categoryMatch) {
        return item
      } 
      return
    })
    
    filteredItems.length > 0
    ? res.status(200).send(filteredItems)
    : res.status(404).send({msg: `No item matching '${query}' in inventory`})
  } catch (error) {
    
  }
}

module.exports = {
  GetAllItems,
  CreateItem,
  UpdateItem,
  DeleteItem,
  FilterBasedOnQuery
}