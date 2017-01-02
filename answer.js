// 01
// let num1 = Math.floor(Math.random()*100);
// let num2 = Math.floor(Math.random()*100);
//
// let mean = (num1 + num2)/2;
//
// console.log(num1);
// console.log(num2);
// console.log(mean);

// 02
// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random()*100));
// }
//
// let total = arr.reduce((pre, crr) => {
//   return pre + crr;
// });
//
// let mean = total/2;
//
// console.log(arr);
// console.log(total);
// console.log(mean);

// 03
// function pickNum(num) {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(Math.floor(Math.random()*100));
//   }
//   arr.sort();
//   console.log(arr);
//   console.log(arr[0]);
//   console.log(arr[num-1]);
// }
//
// pickNum(20);

// 04
// function evenNum() {
//   let result = [];
//   let num = Math.floor(Math.random()*100);
//   for (let i = 0; i < num; i++) {
//     if (i%2 === 0) {
//       result.push(i);
//     }
//   }
//   console.log(num);
//   console.log(result);
// }
//
// evenNum();

// 05
// function oddNum() {
//   let result = [];
//   let num = Math.floor(Math.random()*100);
//   if (num < 40) {
//     for (let i = 0; i < 40; i++) {
//       if (i%2 !== 0) {
//         result.push(i);
//       }
//     }
//   } else {
//     for (let i = 40; i < num; i++) {
//       if (i%2 !== 0) {
//         result.push(i);
//       }
//     }
//   }
//   console.log(num);
//   console.log(result);
// }
//
// oddNum();

// 06
// function oddNum2() {
//   let result = [];
//   let num = Math.floor(Math.random()*100);
//   if (num < 40) {
//     for (let i = num; i > 0; i--) {
//       if (i%2 !== 0) {
//         result.push(i);
//       }
//     }
//   } else {
//     for (let i = num; i > 40; i--) {
//       if (i%2 !== 0) {
//         result.push(i);
//       }
//     }
//   }
//   console.log(num);
//   console.log(result);
// }
//
// oddNum2();

// 07
// function discount(amount, persentage) {
//   if (persentage <= 0 || persentage >= 100) {
//     console.log('warning... not right.');
//   } else {
//     console.log(Math.floor(amount * (persentage/100)));
//   }
// }
//
// discount(106, 17);

//09
// function arr(num) {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(Math.floor(Math.random()*100));
//   }
//   arr.sort(sortNumber);
//   console.log(arr);
// }
//
// function sortNumber(a, b) {
//     return a - b;
// }
//
// arr(10);

//10
// function num() {
//   let sum = 0;
//   let temp = Math.floor((Math.random() * 9999) + 1000);
//   console.log(temp);
//   while (temp) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }
//   console.log(sum);
// }
//
// num();

//11
// function num() {
//   let result = [];
//   let num = Math.floor((Math.random() * 9999) + 1000);
//   console.log(num);
//   let arr = num.toString().split('').map(Number);
//   while(arr.length > 0) {
//     let temp = arr.reduce((a, b) => {
//       return a + b;
//     });
//     result.push(temp);
//     arr.shift();
//   }
//   console.log(result);
// }
//
// num();

//12
// function num() {
//   let randomNum = [];
//   for (let i = 0; i < 2; i++) {
//     randomNum.push(Math.floor(Math.random() * 100));
//   }
//   randomNum.sort(sortNumber);
//   console.log(randomNum);
//   let arr = numbers(randomNum[0]);
//   let result = check(arr, randomNum[1]);
//   if (randomNum[0] === 0 || randomNum[0] === 1 || randomNum[0] === randomNum[1] || result[0] === undefined) {
//     console.log('false');
//   } else {
//     console.log(result[0]);
//   }
// }
//
// function sortNumber(a, b) {
//     return a - b;
// }
//
// function numbers(temp) {
//   let tempArr = [];
//   for (let i = 2; i <= temp; i++) {
//     if (temp % i === 0)
//     {
//       tempArr.push(i);
//     }
//   }
//   return tempArr;
// }
//
// function check(arr, num) {
//   let result = [];
//   arr.forEach((ele) => {
//     if (num % ele === 0) {
//       result.push(ele);
//     }
//   });
//   return result;
// }
//
// num();

//13
function sameNum() {
  let randomArr = randomNum();
  randomArr.sort(sortNum);
  console.log('Random Numbers', randomArr);
  let divideArr = possibleNum(randomArr[0]);
  let result = check(divideArr, randomArr[1]);
  if (randomArr[0] === 0) {
    console.log('false');
  } else if ( randomArr[0] === 1 || randomArr[0] === randomArr[1]) {
    console.log(randomArr[1]);
  }
  else if (result[0] === undefined) {
    console.log(randomArr[0] * randomArr[1]);
  } else {
    let newResult = newNum(randomArr[0], result);
    console.log('Divider', newResult);
    let multiply = mult(newResult);
    let result2 = multiply * (randomArr[0] / multiply) * (randomArr[1] / multiply);
    console.log(result2);
  }
}

function randomNum() {
  let result = [];
  for (let i = 0; i < 2; i++) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
}

function sortNum(a, b) {
    return a - b;
}

function possibleNum(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0)
    {
      result.push(i);
    }
  }
  return result;
}

function check(arr, num) {
  let result = [];
  arr.forEach((ele) => {
    if (num % ele === 0) {
      result.push(ele);
    }
  });
  return result;
}

function newNum(num, arr) {
  let result = [];
  let temp = num;
  arr.forEach((ele) => {
    if (temp / ele % 1 === 0) {
      temp = temp / ele;
      result.push(ele);
    }
  });
  return result;
}

function mult(arr) {
  let result = 1;
  arr.forEach((ele) => {
    result = result * ele;
  });
  return result;
}

sameNum();
