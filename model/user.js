const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: {
    type: String,
    unique: true,
    required:true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password:{type:String, minLength:6, required:true},
  token:{type:String}
});
exports.User = mongoose.model('User',userSchema)