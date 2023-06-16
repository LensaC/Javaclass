let name = "Ilya";
console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); //hello name
console.log(`hello ${name}`); //hello Ilya

// Undefined Conversion 

let x = undefined
let n = 123
let bg = 9893893898398398393n
let b = true
let s = "Lensa"
let sy = Symbol
let N = null

// X value Conversion 

console.log(typeof(x)) // undefined
console.log(Boolean(x)) // false
console.log(Number(x)) //NaN
console.log(String(x)) // undefined


// n value Conversion 

console.log(typeof(n)) // number
console.log(Boolean(n)) // true
console.log(String(n)) // 123


// bg value Conversion  

console.log(typeof(bg)) // bigint
console.log(Boolean(bg)) // true
console.log(Number(bg)) // 9893893898398398000
console.log(String(bg)) // 9893893898398398393


// b value Conversion 

console.log(typeof(b)) // boolean
console.log(Number(b)) // 1
console.log(String(b)) // true


// s value Conversion 

console.log(typeof(s)) // String
console.log(Boolean(s)) // true
console.log(Number(s)) // NaN



// sy value Conversion 

console.log(typeof(sy)) // function 
console.log(Boolean(sy)) // true
console.log(Number(sy)) // NaN
console.log(String(sy)) // function Symbol() { [native code] } 


// N value Conversion 

console.log(typeof(N)) // object
console.log(Boolean(N)) // false
console.log(Number(N)) // 0
console.log(String(N)) // null






