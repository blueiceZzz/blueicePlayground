"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log("Hello world!");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => {
    console.log("server started on localhost: ", port);
});
const publicPath = path_1.default.join(__dirname, "..", "client", "build");
console.log(__dirname, "\n", publicPath);
console.log(path_1.default.join(__dirname, "server"));
app.use(express_1.default.static(publicPath));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(publicPath, "index.html"));
});
//# sourceMappingURL=app.js.map