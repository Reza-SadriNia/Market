const { default: mongoose, Schema } = require("mongoose")

const SliderSchema = new Schema({
  title: { type: String },
  text: { type: String },
  image: { type: String, required: true },
  type: { type: String, default: "main" }
})

module.exports = {
  SliderModel: mongoose.model("slider", SliderSchema)
}