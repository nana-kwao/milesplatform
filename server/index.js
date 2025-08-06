const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const signupRouter = require("./routes/signupRoute");
const loginRouter = require("./routes/loginRounte");
const testRouter = require("./routes/testRoute");
const app = express();
dotenv.config();
const PORT = parseInt(process.env.PORT) || 5000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log("Server running on Port", PORT));

app.get("/", (req, res, next) => {
  res.send("Serving Running");
  next();
});
app.post("/", (req, res, next) => {
  res.send("Server Running");
  next();
});

//POST /signup
app.use("/api", signupRouter);

//POST /login
app.use("/api", loginRouter);

//POST /test
app.use('/api', testRouter) 

app.use((err, req, res, next) => {
  res.status(500).json({ Error: err.message });
});
