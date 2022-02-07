"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log("Hello world!");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hallo ihr penner");
});
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => {
    console.log("server started on localhost: ", port);
});
//# sourceMappingURL=app.js.map