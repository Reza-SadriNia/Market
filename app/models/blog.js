const { default: mongoose, Schema } = require("mongoose")

const BlogSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, requird: true },
  tags: { type: [String], default: [] },
  category: { type: mongoose.Types.ObjectId, required: true },
  comments: { type: [], default: [] },
  like: { type: mongoose.Types.ObjectId, default: [] },
  dislike: { type: mongoose.Types.ObjectId, default: [] },
  bookmark: { type: mongoose.Types.ObjectId, default: [] },
})

const BlogModel = mongoose.model("blog", BlogSchema)

module.exports = {
  BlogModel
}