const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    phone: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String },
    address: { type: String },
    state: { type: String },
    status: { type: String, default: "pending" },
    gstIN: { type: String, default: "" },
    companyName: { type: String, default: "" },
},{
    timestamps:true
})

const RequestModel = mongoose.model("Request", RequestSchema);

module.exports = RequestModel;