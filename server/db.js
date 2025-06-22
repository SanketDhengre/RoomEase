const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "YOUR_MONGODB_URL"
    )
}
