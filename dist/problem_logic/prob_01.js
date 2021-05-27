"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prob01 = void 0;
function prob01() {
    let total = 0;
    let t = 1000;
    while (t > 0) {
        t--;
        total += t % 3 === 0 || t % 5 === 0 ? t : 0;
    }
    return total;
}
exports.prob01 = prob01;
//# sourceMappingURL=prob_01.js.map