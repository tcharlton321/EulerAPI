"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prob02 = void 0;
function prob02() {
    let total = 0;
    const fib = Array(50).fill(0);
    fib[0] = 1;
    fib[1] = 1;
    let index = 1;
    while (fib[index - 1] < 4000000) {
        console.log(fib[index - 1] + ' ' + fib[index] + ' ' + total);
        fib[index + 1] = fib[index - 1] + fib[index];
        total += fib[index - 1] % 2 === 0 ? fib[index - 1] : 0;
        index++;
    }
    return total;
}
exports.prob02 = prob02;
//# sourceMappingURL=prob_02.js.map