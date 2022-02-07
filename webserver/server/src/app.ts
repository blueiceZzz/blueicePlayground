import express from "express";

console.log("Hello world!");

const app = express();

app.get("/", (req, res) => {
    res.send("Hallo ihr penner")
});

app.listen(3000, () => {
    console.log("server started on localhost:3000");
});
