const mongose = require("mongoose");
const productSchema = new mongose.Schema({
    id: Number,
    model: String,
    price: String,
});
module.exports = mongose.model("Product", productSchema);