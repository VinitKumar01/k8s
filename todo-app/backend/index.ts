import express from "express";

const app = express();
app.use(express.json());

const port = process.env.PORT!;
const database_url = process.env.DATABASE_URL!;

app.get("/", (_, res) => {
  res.json({
    message: "Hello world",
    port: port,
    database_url: database_url,
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

