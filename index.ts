import express from "express";

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});


app.listen(8000, () => {
  console.log(`server started at http://localhost:8000`);
});

export default app;

