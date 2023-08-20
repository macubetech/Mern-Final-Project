const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://marish:banoqabil-mern@cluster0.7c8l2fb.mongodb.net/banoqabil-mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
