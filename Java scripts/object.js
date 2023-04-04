// const data = [
//   { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
//   { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
//   { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
//   { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
//   { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
//   { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
// ];
// const ans = data.reduce((acc,item) => {
//   item.favoriteIceCreams.forEach(elem => {
//     acc[elem] = acc[elem] ? acc[elem] + 1 : 1 
//   })  
//   return acc
// },{})
// console.log(ans)
/*
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
*/

// ------------------------------------------------------------------------------------------

// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];
// const results=wishlist.reduce((acc,cur)=>
// {
//     acc+=cur.price
//     return acc;
// },0);
// console.log(results);
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005

// ------------------------------------------------------------------------------------------

// let prateekMarksData = {
//   name: "Prateek",
//   subject1: "Javascript",
//   subject2: "HTML",
//   subject3: "CSS",
//   subject4: null,
//   subject5: null,
//   marks1: 90, 
//   marks2: 81,
//   marks3: 80,
//   marks4: null,
//   marks5: null,
// }
// let nrupulMarksData = {
//   name: "Nrupul",
//   subject1: "Java",
//   subject2: "Pyton",
//   subject3: null,
//   subject4: null,
//   subject5: null,
//   marks1: 95, 
//   marks2: 85,
//   marks3: null,
//   marks4: null,
//   marks5: null,
// }
// let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
// const results=allStudentsMarksData.map((student) => {
//   let marks = [];
//   for (let i = 1; i <= 5; i++) {
//     if (student[`subject${i}`] && student[`marks${i}`]) {
//       marks.push({
//         subject: student[`subject${i}`],
//         score: student[`marks${i}`]
//       });
//     }
//   }
//   return {
//     name: student.name,
//     marks: marks
//   };
// })
// console.log(results);
//   Expected output from `massagedData`
//   [
//      {
//        name: "Prateek", 
//        marks: [
//          {subject: 'Javascript', score: 90},
//          {subject: 'HTML', score: 81},
//          {subject: 'CSS', score: 80}
//        ]
//      },
//      {
//        name: "Nrupul", 
//        marks: [
//          {subject: 'Java', score: 95},
//          {subject: 'Python', score: 85}
//        ]
//      },
//   ]

// ------------------------------------------------------------------------------------------

// let subjectsHash = {
//   1: 'Javascript',
//   2: 'HTML',
//   3: 'CSS',
//   4: 'Java',
//   5: 'Rust',
// }
// let students = [
//   {id: 1, name: 'Prateek', subjectID: 5},
//   {id: 2, name: 'Yogesh', subjectID: 2},
//   {id: 3, name: 'Nrupul', subjectID: 4},
//   {id: 4, name: 'Prateek', subjectID: 1},
// ]
// const results=students.reduce((acc,cur)=>
// {
//     acc[cur.name]=acc[cur.name] ? [...acc[cur.name],subjectsHash[cur.subjectID]] : [subjectsHash[cur.subjectID]];
//     return acc
// },{});
// console.log(results);
// Expected Output of `newObj`: 
// {
//   Prateek: ["Rust", "Javascript"],
//   Yogesh: ["HTML"],
//   Nrupul: ["Java"],
// }
// */

// ------------------------------------------------------------------------------------------

// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`
// }
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersGreetings = users.map(user => getGreeting(user.name,user.surname))
// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]

// ------------------------------------------------------------------------------------------

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// const usersMapped=users.map((e)=>
// {
//     return {
//         fullName:e.name + " "+ e.surname,
//         id:e.id
//     }
// })
// console.log(usersMapped);
// end result/sample output: 
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// console.log(usersMapped);    
// console.log(usersMapped[0].id) // 1
// console.log(usersMapped[0].fullName) // John Smith

// ------------------------------------------------------------------------------------------

// let data = [
//   { name: "John", subject: "Javascript" },
//   { name: "John", subject: "HTML" },
//   { name: "John", subject: "CSS" },
//   { name: "Pete", subject: "Java" },
//   { name: "Pete", subject: "English" },
//   { name: "Pete", subject: "Maths" },
//   { name: "Mary", subject: "Rust" },
//   { name: "Mary", subject: "Elm" },
// ]

// let subjectHash = data.reduce((acc, item) => {
//   acc[item.name] = acc[item.name] ? [...acc[item.name],item.subject] : [item.subject]
//   return acc;
// }, {})
// console.log(subjectHash);
// /*
// Expected output:
// {
//   John: ["Javascript", "HTML", "CSS"],
//   Pete: ["Java", "English", "Maths"],
//   Mary: ["Rust", "Elm"]
// }
// */

// ------------------------------------------------------------------------------------------

// let users = [   {age: 16},  {age: 20},   {age: 23},   {age: 30}  ];
// // [16, 20, 23, 30]
// const output=users.reduce((acc,cur)=>
// {
//     acc.push(cur.age);
//     return acc;
// },[])
// console.log(output);

// ------------------------------------------------------------------------------------------

// let users = [   {id: 1, name: "John"},   {id: 2, name: "Pete"},  {id: 3, name: "Mary"} ];
// // {John: 1, Pete: 2, Mary: 3}
// const output=users.reduce((acc,cur)=>
// {
//     acc[cur.name]=cur.id;
//     return acc;
// },{})
// console.log(output)

// ------------------------------------------------------------------------------------------

// function a() {
//   let A = 'hello';
//   return function b() {
//       let B = 'world';
//       return function c() {
//           let C = 'from Vivek'
//           return `${A} ${B} ${C}`
//       }
//   }
// }
// const ans=a()()();
// console.log(ans);

// ------------------------------------------------------------------------------------------

// let string = "sourav,nitin,jana";
// let arr = string.split(',').reverse();
// let output = arr.reduce((acc,ele)=>
// {
//    return {[ele]: acc} 
// },{});
// console.log(output);
