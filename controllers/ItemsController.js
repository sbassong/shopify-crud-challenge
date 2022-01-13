const { Items } = require('../models')



const CreateItem = async (req, res) => {
  try {
    const item = await Items.create(req.body)
    res.send(item)
  } catch (error) {
      throw error
  }
}

const GetAllItems = async (req, res) => {
  try {
    const items = await Items.findAll()
    res.send(items)
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
    
    res.send(updatedItem)
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
    res.send({msg: `Item with id ${itemId} has been successfully deleted!`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllItems,
  CreateItem,
  UpdateItem,
  DeleteItem
}