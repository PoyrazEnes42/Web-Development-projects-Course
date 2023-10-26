import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("2023-10-27");
  const day = today.getDay();
  //   console.log(day);
  let type = "a weekday";
  let adv = "It's time to work hard";
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "It's time to have fun";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// && = And , || = OR
