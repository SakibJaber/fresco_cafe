const { app, server, io } = require("./app");

const mongoose = require("mongoose");

const dbUri = process.env.DB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  console.log("user connected" , socket.id);
  socket.on("disconnect", function () {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT || 5000, (req, res) => {
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});

// TODO: Integrate Order Portion
// TODO: Integrate Chat
// TODO: Integrate Mail
// TODO: Integrate Notification
