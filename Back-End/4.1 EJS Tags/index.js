import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
<%= %>  => değer alma, html kodlarını gösterir <em>İtalic</em> => <em>İtalic</em> 
<% %>  => tüm javascript komutları için
<%- %>  => değer alma, html kodlarını gizler <em>İtalic</em> => "`italic` metin"
<%% %%>  => ekrana <% ve %> yazdırmakta kullanılır. yorum satırı gibi algılaması için
<%# %>  => yorum satırı yapar
<%- include("<file name>") %>  => başka bir dosyayı views klasöründen çağırır.
*/