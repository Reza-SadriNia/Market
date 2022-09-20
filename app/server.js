const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const createErrors = require("http-errors")

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
    // mongoose.connection.on("connected", () => {
    //   console.log("mongoose connected to DB ...");
    // })
    mongoose.connection.on("disconnected", () => {
      console.log("disconnect from MongoDB ");
    })
    process.on("SIGINT", async () => {
      await mongoose.connection.close()
      console.log("DB connection close");
      process.exit(0)
    })
  }
  configApplication() {
    app.use(morgan("dev"))
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
      next(createErrors.NotFound("Route Not Found!"))
    })
    app.use((err, req, res, next) => {
      const servererror = createErrors.InternalServerError()
      const statusCode = err?.status || servererror.status
      const message = err?.message || servererror.message
      return res.status(statusCode).json({
        statusCode,
        message
      })
    })
  }
}
