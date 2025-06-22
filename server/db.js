// const mongoose = require("mongoose");

// module.exports = () => {
//     return mongoose.connect(
//         "YOUR_MONGODB_URL"
//     )
// }

const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://SanketD:Mongo_sanket_13@cluster0.wv8xz.mongodb.net/RoomsBnB?retryWrites=true&w=majority&appName=Cluster0"
    )
}
