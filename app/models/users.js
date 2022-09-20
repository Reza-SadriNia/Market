const { default: mongoose, Schema } = require("mongoose")

const UserSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  username: { type: String, lowercase: true },
  phone: { type: String },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  otp: {
    type: Object, default: {
      code: 0,
      expires: new Date().getDate() + 120
    }
  },
  bills: { type: [], default: [] },
  discount: { type: Number, default: 0 },
  birthday: { type: String },
  roles: { type: String, default: "USER" }
})

module.exports = {
  UserModel: mongoose.model("user", SliderSchema)
}