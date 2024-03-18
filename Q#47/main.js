// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
var multiple_laptops = [
    { make: "HP", model: "XPS 12", year: "2019" },
    { make: "Dell", model: "XPM 22", year: "2020" },
    { make: "Lenovo", model: "XPM 33", year: "2022" }
];
var firstlaptop = multiple_laptops[0], secondlaptop = multiple_laptops[1], thirdlaptop = multiple_laptops[2];
console.log(firstlaptop);
console.log(secondlaptop);
console.log(thirdlaptop);
