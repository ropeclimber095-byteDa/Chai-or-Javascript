// console.log( 2 > 1)
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1 )//true aega kioke 2 bra hai automatically js ne usse convert krdia
console.log ("02" > 1)//true aega kioke 2 bra hai automatically js ne usse convert krdia
/* istrah ke conversion ke time pr comparison predictable result nhi
deta hai to comparison ke time pr datatype 1 krlo
*/
console.log(null > 0)// false kioke empty value hai
console.log(null == 0)// false 
console.log(null >= 0)//true

/* The equality check (==) and comparisons (>, <, >=, <=) work differently.

Comparisons convert null to a number, treating it as 0.

That's why (null >= 0) is true and (null > 0) is false.*/

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

//=== strict check value + datatype
console.log("2 == 2");// ye bolega true kioke pehle conversion krraha hai
console.log("2" === 2)



