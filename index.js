const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const catagories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");

app.use(cors());

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/catagories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
    return;
  }
  const categoryNews = news?.filter((n) => n.category_id === id);
  res.send(categoryNews);
});

// News
app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;

  const activeNews = news?.find((n) => n._id == id);
  res.send(activeNews);
});

// app.get("/catagories/0", (req, res) => {
//   res.send(news);
// });

app.listen(port, () => {
  console.log(`API is Running on  ${port}`);
});
