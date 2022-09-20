const joi = require("@hapi/joi")
const authSchema = joi.object({
  mobile: joi.string().length(11).pattern(/^09[0-9]{9}$/).error(new Error("شماره موبایل وارد شده صحیح نمیباشد"))
  // password: joi.string().min(6).max(16).trim().required().error(new Error("پسوورد وارد شده باید بین ۶ و ۱۶ کاراکتر باشد"))
})

module.exports = {
  authSchema
}