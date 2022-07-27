const express = require("express");
const app = express();

app.use(authProviderMiddleware);

app.get("/", (req, res) => {
  res.send("hello");
});

//middleware for authorization
function authProviderMiddleware(req, res, next) {
  console.log("checking the auth token");
  if (!req.headers.authorization) {
    throw Error(`couldn't get token`);
  }
  const token =
    req.headers.authorization.split(" ")[1];

  // next();
}

app.listen(3000);
