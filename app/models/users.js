const { default: mongoose, Schema } = require("mongoose")

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  otp: {
    type: Object, default: {
      code: 0,
      expires: new Date().getDate() + 120
    }
  },
  bills: { type: [], default: [] },
  discount: { type: Number, default: 0 },
  birthday: { type: String }
})

module.exports = {
  UserModel: mongoose.model("user", SliderSchema)
}