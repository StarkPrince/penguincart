export {};

const app = require("express");
const router = app.Router();

const { user } = require("../utils");

router.post("/create", async (req: any, res: any) => {
  try {
    const newUser = await user.createUser(req.body);
    res.status(201).send(newUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.get("/get/:uid", async (req: any, res: any) => {
  try {
    const userFound = await user.getUser(req.params.uid);
    res.status(200).send(userFound);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
