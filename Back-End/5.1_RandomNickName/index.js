import express from "express";
import bodyParser from "body-parser";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {

  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  }); // big_red_donkey

  const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
    length: 2,
  }); // big-donkey
  res.render("index.ejs", {
    randomName: randomName,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
