"use strict";
exports.__esModule = true;
function addTwo(num) {
    return 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return '200 Ok';
}
var getHello = function (s) {
    return '';
};
var heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is".concat(hero);
});
heros.map(function (hero) {
    return "hero is".concat(hero);
});
heros.map(function (hero) {
    return "hero is".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
var addVal = addTwo(5);
var upperStr = getUpper('sachin');
