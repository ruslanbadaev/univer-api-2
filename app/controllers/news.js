const model = require('../models/news')
const userModel = require('../models/user')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const firebase = require('../middleware/firebase')

/*********************
 * Private functions *
 *********************/

/**
 * Gets all items from database
 */
const getAllItemsFromDB = async () => {
  return new Promise((resolve, reject) => {
    model.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          name: 1
        }
      },
      (err, items) => {
        if (err) {
          reject(utils.buildErrObject(422, err.message))
        }
        resolve(items)
      }
    )
  })
}

/********************
 * Public functions *
 ********************/

/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getAllItems = async (req, res) => {
  try {
    const result = await getAllItemsFromDB()
    for (ad of result) {
      if (ad.date.toString().length !== 13) ad.date = `${ad.date}000`
    }
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItems = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const result = await db.getItems(req, model, query)
    for (ad of result.docs) {
      if (ad.date.toString().length !== 13) ad.date = `${ad.date}000`
    }
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const result = await db.getItem(id, model)
    if(!!result.date && result.date.toString().length !== 13) result.date = `${result.date}000`
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res) => {
  try {
    const files = []
    req.files.forEach((element) => {
      files.push({
        filename: element.filename,
        path: element.path,
        size: element.size
      })
    })
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    req.files = files
    const result = await db.updateItem(id, model, req)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
  try {
    const files = []
    req.files.forEach((element) => {
      files.push({
        filename: `${element.filename}`,
        path: `${element.path}`,
        size: element.size
      })
    })
    req = matchedData(req)
    req.views = 0
    req.images = files
    const result = await db.createItem(req, model)

    const usersForMessaging = await db.getItemByParams({ notificationToken: { $ne: null } }, userModel)
    usersForMessaging.forEach((user) => {
      firebase.sendMessage('Новая запись', req.title, user.notificationToken)
    })

    res.status(201).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const result = await db.deleteItem(id, model)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}
