"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router0150_1 = __importDefault(require("./routers/router0150"));
const app = express_1.default();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use('/0150', router0150_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map