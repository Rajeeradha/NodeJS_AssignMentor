const mongoose = require("mongoose");
//MongoDB connection
const connection = () => {
    mongoose.connect("mongodb+srv://radhanov12:radhanov12@cluster0.fqriqtv.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error('Failed to connect to MongoDB', err));
}
module.exports = connection