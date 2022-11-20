const app = require("./app");

const mongoose = require("mongoose");

const dbUri = process.env.DB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.listen(PORT || 5000, (req, res) => {
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});



//save form data

//  