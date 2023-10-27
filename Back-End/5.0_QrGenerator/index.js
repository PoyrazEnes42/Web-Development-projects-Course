import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/submit", (req, res) => {
  const address = req.body["linkAddress"];
  var qr_svg = qr.image(address);
  qr_svg.pipe(fs.createWriteStream("qr_img.png")); // QR kodu oluşturduğu ad
  var inStr = fs.createReadStream("qr_img.png"); // QR kodun olduğu konum
  var outStr = fs.createWriteStream("public/img/qr_img.png"); // QR kodun olması gereken konum
  inStr.pipe(outStr);
  res.render("index.ejs", { link: address });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
