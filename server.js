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



// TODO: Add Reservation Section in Dashboard
// TODO: Complete Review Section => Dashboard>Review
// TODO: Add Authentication & Authorization
// TODO: Complete Contact Section
// TODO: Integrate Order Portion
// TODO: Integrate Chat
// TODO: Integrate Mail
// TODO: Integrate Notification
// TODO: Integrate File Upload
// TODO: 


