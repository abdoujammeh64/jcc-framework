const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    /**
     * ,
     */
    status: { type: String, default: "active" },
    name: { type: String },
    userType: { type: String, default: "client" },
    phone: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
