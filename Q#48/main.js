// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop1 = [25000, 35000, 65000];
var laptop2 = [93000, 80000, 20000, 42000];
var combine_price = __spreadArray(__spreadArray([], laptop1, true), laptop2, true).sort(function (a, b) { return a - b; });
console.log(combine_price);
