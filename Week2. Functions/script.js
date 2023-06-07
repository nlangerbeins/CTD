function add7(num) {
    return num += 7;
}

console.log(add7(5))

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3))

function capitalize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase()
}
console.log(capitalize('TEST'))

function lastletter(s) {
    return s.substr(-1)
}

console.log(lastletter('abcd'))