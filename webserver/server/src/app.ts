import express from "express";

console.log("Hello world!");

import path from "path";

// create app
const app = express();

let port:any = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => {
    console.log("server started on localhost: ", port);
});

// serve the whole client/public folder
// __dirname: points to /server/dist cause of typescript compiling
const publicPath = path.join(__dirname, "..", "client", "build");

// console.log(__dirname, "\n", publicPath)
// console.log(path.join(__dirname, "server"))

app.use(express.static(publicPath)); // allows nodejs to serve everything in public folder
// app.use(express.static(publicPath));

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
