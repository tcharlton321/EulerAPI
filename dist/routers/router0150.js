"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const prob_02_1 = require("../problem_logic/prob_02");
const prob_01_1 = require("../problem_logic/prob_01");
const router = express_1.default.Router();
router.get('/01', (req, res) => {
    const num = prob_01_1.prob01();
    res.send('' + num);
});
router.get('/02', (req, res) => {
    const num = prob_02_1.prob02();
    res.send('' + num);
});
module.exports = router;
//# sourceMappingURL=router0150.js.map