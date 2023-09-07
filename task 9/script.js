// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


// function multiplyArray(num, length){
//     for(let i=0; i<=length; i++) {
//         let rusult = num*i
//         return rusult
       
//     }
// }
// multiplyArray(7,5)


const arrayOfMultiples = (a , b) => {
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++
      console.log(arr)
      
    }
    return arr;
  };
  arrayOfMultiples(7,5)


