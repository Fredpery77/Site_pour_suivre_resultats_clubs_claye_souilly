const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://fredpery77410:<M@rtin77>@cluster0.x2i6f.mongodb.net/Sports",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)