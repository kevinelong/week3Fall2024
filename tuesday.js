console.log("TUESDAY");
// single line comment

/* slash-star starts a multiline
wraps a multi line comment
2
3
can have many  many stars instead of just one on both start and end
star-slash ends a multiline comment */

n = 12 // super chill
let x = 123; //more formal

i = 123 //integer (whole numbers)
f = 99.999 //fraction, float (floating point decimal)

num = 1.1 //just numbers

text = "123.45 a words" // 14 bytes? string of characters - data type string
number = parseFloat(text) //2 bytes? for the floating point decimal aka Number
double = number * 2 //now we can do math!
console.log(double) //expecting 246.9

d = new Date() // create a new date/time object (today)
console.log(d)
ms = d.getTime()
console.log(ms) // ms since 1/1/1970 00:00:00
// F5 (fn 5 or fn F5) - RUN/DEBUG/EXECUTE

let counter = 0
counter++ // increment - bump up by one
counter++
console.log(counter) //???
counter-- // decrement - minus one
console.log(counter) //???

let level = 0
level += 5 // increment by five
level += 5
level += 5
console.log(level) // ???
level -= 5 // decrement by five
console.log(level) // ???

console.log(3 + 5) // + (plus) addition
console.log(3 - 5) // - (minus) subtraction
console.log(3 * 5) // * (times) multiplication
console.log(3 / 5) // / (over) divided