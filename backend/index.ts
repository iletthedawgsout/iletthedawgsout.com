import express from "express";
import path from "path";

const app = express();

const buildDir = path.join("..", "frontend", "build");
const indexPath = path.join(buildDir, "index.html");

app.use(express.static(buildDir));
app.get('/', function(req, res) {
  res.sendFile(indexPath);
});
app.listen(9000);