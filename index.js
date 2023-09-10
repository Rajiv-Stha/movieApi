const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use("/api", require("./routes/movieRoute"));
app.listen(8000, () => console.log("server listening on port 8000"));
