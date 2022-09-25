const homeController = require("../../http/controllers/api/home.controller")
const router = require("express").Router()

/**
 * @swagger
 * tags:
 *  name : Index Page
 *  description : index Page route ans data
 */

/**
 * @swagger
 * tags:
 *  name : Auth User
 *  description : Auth User Login
 */

/**
 * @swagger
 * /:
 *  get:
 *    summary : index of Routes
 *    tags : [Index Page]
 *    description : Get all data
 *    responses:
 *      200: 
 *        description : success
 *      404:
 *        description : Failed
 * /user/auth:
 *  post:
 *    summary : User Login
 *    tags : [Auth User]
 *    description : Post method and login to web App
 *    responses : 
 *      200 :
 *        description : login Success
 *      400 : 
 *        description : Login Failed
 */
router.get("/", homeController.indexPage)

module.exports = {
  HomeRoutes: router
}