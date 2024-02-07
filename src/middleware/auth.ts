const admin = require("firebase-admin");
const serviceAccount = require("../../penguinshop.firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const getAuthToken = (req: any, res: any, next: any) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

const checkIfAuthenticated = (req: any, res: any, next: any) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res
        .status(403)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

module.exports = checkIfAuthenticated;
