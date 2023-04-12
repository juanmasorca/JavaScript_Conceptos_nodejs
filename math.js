const Math = {};
function add(x1, x2) {
    return x1 + x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log("no se puede divider por 0")
    } else {
        return x1 / x2;
    }
}


Math.add = add;
Math.divide = divide;

module.exports = Math;