"use strict";
const userRouter = require("./user");
const app = require("express");
const router = app.Router();
router.get("/", (req, res) => {
    res.send("Hello you are in the API route!");
});
router.use("/user", userRouter);
module.exports = router;
