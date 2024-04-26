const initAPIRoute = require("./routes/api");
const express = require("express");
const app = express();
const connectDB = require("../Database");
const CORSMiddleware = require("./middleware/CORS");
const cors = require("cors");
connectDB();
app.use(cors(CORSMiddleware));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
//init web route
initAPIRoute(app);
console.log(`Server is running on port ${portNumber} `);
