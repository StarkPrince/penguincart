"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.routes = void 0;
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const checkIfAuthenticated = require("./middleware/auth");
const express = require("express");
dotenv.config();
exports.routes = require("./routes");
exports.app = express();
const PORT = process.env.PORT || 3000;
exports.app.use(cors());
exports.app.use(bodyParser.json());
exports.app.get("/", (req, res) => {
    res.send("Hello from Express server with TypeScript!");
});
exports.app.use("/api", checkIfAuthenticated, exports.routes);
exports.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
