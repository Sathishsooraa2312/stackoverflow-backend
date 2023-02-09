const mongoose = require("mongoose");

const url =
"mongodb+srv://sathishkumar:Sathish123@cluster0.ass1yz7.mongodb.net";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
