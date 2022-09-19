const { default: mongoose, Schema } = require("mongoose")

const ProductSchema = new Schema({
  title: { type: String, requird: true },
  short_desc: { type: String, requird: true },
  total_desc: { type: String, requird: true },
  images: { type: [String], requird: true },
  tags: { type: [String], requird: true },
  category: { type: mongoose.Types.ObjectId, requird: true },
  comments: { type: [], default: [] },
  like: { type: mongoose.Types.ObjectId, default: [] },
  dislike: { type: mongoose.Types.ObjectId, default: [] },
  bookmark: { type: mongoose.Types.ObjectId, default: [] },
  price: { type: Number, default: 0, requird: true },
  discount: { type: Number, default: 0 },
  count: { type: Number, r },
  type: { type: String, requird: true },
  time: { type: String, },
  format: { type: String, },
  teacher: { type: String, requird: true },
  feture: {
    type: Object, default: {
      length: "",
      height: "",
      width: "",
      weight: "",
      color: "",
      model: [],
      madein: ""
    }
  },
})

module.exports = {
  ProductModel: mongoose.model("product", ProductSchema)
}