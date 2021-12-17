import express from "express";

const app = express();
const PORT = 8000;

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
