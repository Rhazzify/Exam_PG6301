const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express()

app.get("/api/profile", async (req, res) => {
    const authorization = req.header("Authorization")
  
    if (!authorization) {
      return res.send(401);
    }
  
    return res.json({
        username: "Master user"
    });
  });

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        return res.sendFile(
          path.resolve(__dirname, "..", "..", "dist", "index.html")
        );
      }
      next();
    });

const server = app.listen(3000, () => {
    console.log(`server started on http://localhost:${server.address().port}`);
});