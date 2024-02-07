const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const checkIfAuthenticated = require("./middleware/auth");
const express = require("express");
dotenv.config();

export const routes = require("./routes");
export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello from Express server with TypeScript!");
});

app.use("/api", checkIfAuthenticated, routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
