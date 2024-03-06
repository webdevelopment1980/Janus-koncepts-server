const mongoose = require("mongoose");

const queryForm = mongoose.Schema(
    {
        fname: {
            type: String
        },
        lname: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        },
        message: {
            type: String
        },
    }, { timestamps: true }
)
const contact = mongoose.model("query", queryForm);
module.exports = contact