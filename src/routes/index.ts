const userRouter = require("./user");

const app = require("express");
const router = app.Router();

router.get("/", (req: any, res: any) => {
  res.send("Hello you are in the API route!");
});

router.use("/user", userRouter);

module.exports = router;
