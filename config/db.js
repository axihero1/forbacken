const mongoose = require("mongoose");
// const urlDB = "mongodb://localhost:27017/auth";
const urlDB =
  "mongodb+srv://axihero:axihero11@cluster0.jnad3qy.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    const connectDB = await mongoose.connect(urlDB, {
      useNewUrlParser: true,
    });
    console.log("Mongodb connect", connectDB.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
