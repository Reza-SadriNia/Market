const { UserAuthController } = require("../../http/controllers/user/auth/auth.controller")

const router = require("express").Router()

router.post("/auth", UserAuthController.login)

module.exports = {
  UserAuthRoutes: router
}