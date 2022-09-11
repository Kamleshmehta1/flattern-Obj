// let students = [
//   {
//     name: "Vaishnavi",
//     batch: 8,
//     marks: {
//       science: 80,
//       social: 70,
//       hindi: 80,
//       maths: 100,
//       english: 90,
//     },
//   },
//   {
//     name: "Abhishek",
//     batch: 10,
//     marks: {
//       science: 75,
//       social: 75,
//       hindi: 62,
//       maths: 81,
//       english: 52,
//     },
//   },
//   {
//     name: "Pappu",
//     batch: 10,
//     marks: {
//       science: 70,
//       social: 72,
//       hindi: 75,
//       maths: 95,
//       english: 82,
//     },
//   },
//   {
//     name: "Ram",
//     batch: 7,
//     marks: {
//       science: 35,
//       social: 24,
//       hindi: 22,
//       maths: 95,
//       english: 67,
//     },
//   },
//   {
//     name: "Shyam",
//     batch: 9,
//     marks: {
//       science: 45,
//       social: 87,
//       hindi: 65,
//       maths: 78,
//       english: 99,
//     },
//   },
// ];

// console.log(Object.entries(students[0].marks).length);

// students.forEach((ele) => {
//   console.log(ele.name);
//   console.log(ele.batch);
//   let sum = 0;
//   let count = Object.entries(ele.marks).length;
//   for (let x of Object.values(ele.marks)) {
//     sum += x;
//   }
//   console.log(sum / count);
// });

//  1 2 3
//  4 5 6
//  7 8 9

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;
// let sum1 = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (i == j) {
//       sum += arr[i][j];
//     }
//     if (i + j === arr.length - 1) {
//       sum1 += arr[i][j];
//     }
//   }
// }
// console.log(sum);
// console.log(sum1);

const obj = {
  KeyA: 1,
  KeyB: {
    c: 2,
    d: 3,
    e: {
      f: 7,
      "": 2,
    },
  },
};

const func = (obj, val, length, i) => {
  let temp = obj[val[i]];
  i++;
  if (i == length) return temp;
  return func(temp, val, length, i);
};

const flatternObject = (data) => {
  const val = data.split(".");
  console.log(func(obj, val, val.length, 0));
};

flatternObject("KeyB.e.f");
