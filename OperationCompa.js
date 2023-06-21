// Mathimatical Operation 
let a = 1, b = 1;
let c = ++a;
let d = b++; 
console.log(c) // 2
console.log(d) // 1
console.log(a) // 2
console.log(b) //2

let l = 2
let y = 1 + (l*= 2);
console.log(l) //4
console.log(y) //5

let x = "" + 1 + 0 // 10
let u = "" - 1 + 0 // -1
let F = true + false // 1
let e = 6 / "3" // 2
let G = "2" * "3" // 6
let H = 4 + 5 + "px" // 9px
let k = "$" + 4 + 5 // $45
let v = "4" - 2 // 2
let j = "4px" - 2 // NaN
let z = "  -9  " + 5  // " -9 5 " 
let A = "  -9  " - 5  // -14
let B = null + 1 // 1
let un = undefined + 1 // NaN
let tn = " \t \n" - 2 // -2

console.log(x) 
console.log(u) 
console.log(f) 
console.log(e) 
console.log(g) 
console.log(h) 
console.log(k) 
console.log(v) 
console.log(j) 
console.log(z) 
console.log(A) 
console.log(B)
console.log(un) 
console.log(tn) 

// Comparison 

let au = 5 > 4 // true
let bu = "apple" > "pineapple" // false
let cu = "2" > "12" // true
let du = undefined == null // true
let f = undefined === null // false
let g = null == "\n0\n" // false
let h = null === +"\n0\n" // false

console.log(au) 
console.log(bu) 
console.log(cu) 
console.log(du) 
console.log(f) 
console.log(g)
console.log(h)  