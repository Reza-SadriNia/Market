const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const { AllRoutes } = require("./router/router")

module.exports = class Application {
  constructor(PORT, DB_URL) {
    this.configDatabase(DB_URL)
    this.configApplication()
    this.createServer(PORT)
    this.createRoutes()
    this.errorHandler()
  }
  configDatabase(DB_URL) {
    mongoose.connect(DB_URL, (err) => {
      if (!err) console.log(`Connect To DB...`);
    })
  }
  configApplication() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, "..", "public")))
  }
  createServer(PORT) {
    app.listen(PORT, () => {
      console.log(`Server id Running On http://localhost:${PORT}`);
    })
  }
  createRoutes() {
    app.use(AllRoutes)
  }
  errorHandler() {
    app.use((req, res, next) => {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Route Not Found!"
      })
    })
    app.use((err, req, res, next) => {
      const statusCode = err?.status || 500
      const message = err?.message || "Internal Server Error"
      return res.status(statusCode).json({
        statusCode,
        message
      })
    })
  }
}
