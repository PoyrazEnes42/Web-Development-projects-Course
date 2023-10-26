import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h2>List Of pages</h2><ul><li><a href='/'>Ana Sayfa</a></li><li><a href='/about'>About</a></li><li><a href='/contact'>Contact</a></li><li><a href='/works'>Works</a></li></ul>"    
  )
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p><ul><li><a href='/'>Ana Sayfa</a></li></ul>");
});

app.get("/works", (req, res) => {
  res.send("<h1>Works</h1><p>Hello, this is my work</p></p><ul><li><a href='/'>Ana Sayfa</a></li></ul>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p><ul><li><a href='/'>Ana Sayfa</a></li></ul>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// sudo npm i -g nodemon
// sudo npm i express
  






























































/*
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/