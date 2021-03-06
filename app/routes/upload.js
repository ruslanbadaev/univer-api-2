const controller = require('../controllers/uploads')
// const validate = require('../controllers/news.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')
const multer = require('multer')

router.post(
  '/',
  requireAuth,
  AuthController.checkAccess(4, 'news'),
  trimRequest.all,
  //validate.createItem,
  controller.createItem
)
module.exports = router
