const { default: mongoose, Schema } = require("mongoose")

const CategorySchema = new Schema({
  title: { type: String, requird: true }
})

module.exports = {
  CategoryModel: mongoose.model("category", CategorySchema)
}