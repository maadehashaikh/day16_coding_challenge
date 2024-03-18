// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

let laptop1:number[] = [25000 , 35000 , 65000];
let laptop2:number[] = [93000,80000,20000,42000]; 
let combine_price = [...laptop1 , ...laptop2].sort((a,b)=> a-b );
console.log(combine_price);