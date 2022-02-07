import express from "express";

console.log("Hello world!");

const app = express();

app.get("/", (req, res) => {
    res.send("Hallo ihr penner")
});

let port:any = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

app.listen(port, () => {
    console.log("server started on localhost: ", port);
});
