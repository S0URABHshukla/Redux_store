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








// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: true}
// ];

// // young -> [0,20]
// // mids -> [0,40]
// // old -> [40,Infinity]

// console.log(
//   voters.reduce((acc,item) => {
//     if(item.age < 21){
//       acc.numYoungPeople = acc.numYoungPeople ? acc.numYoungPeople + 1 : 1
//       if(item.voted) {
//         acc.numYoungVotes = acc.numYoungVotes ? acc.numYoungVotes + 1 : 1
//       }
//     } 
//   return acc
//   }, {})
// )


// /*
// { numYoungVotes: 1,
//   numYoungPeople: 4,
//   numMidVotesPeople: 3,
//   numMidsPeople: 4,
//   numOldVotesPeople: 3,
//   numOldsPeople: 4
// }
// */





// const wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 }
// ];

// console.log(wishlist.reduce((acc,item) => (acc+item.price),0))

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005




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

// let massagedData = allStudentsMarksData.reduce((acc, item)=>{
//   let object = {};

//   object.name = item.name;
//   let arr = [];
  
//   for(let i = 1; i < 6; i++) {
//       if(item[`subject${i}`]){
//         object.marks = object.marks ? [...object.marks, {  subject: item[`subject${i}`], score : item[`marks${i}`]   } ] : [ { subject: item[`subject${i}`], score : item[`marks${i}`]   }  ];

//         console.log({ subject: item[`subject${i}`], score : item[`marks${i}`]   })
        
//       }
//   }

//   acc.push(object)
  
//   return acc
// },[])




// console.log(massagedData);

// /*
//  ------------------------------------------------
//  massage the `allStudentsMarksData` to get a new 
//  array called `massagedData`

//  Instead of separate enties for 5 subjects and their marks,
//  in the new array, we just have one entry called marks. 
//  marks is an array of objects. the objects of marks
//  contains subject and score.
//  ------------------------------------------------

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

// */


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

// let newObj = students.reduce((acc,student) => {
//   (acc[student.name] = acc[student.name] ? [ ...acc[student.name], subjectsHash[student.subjectID] ] : [ subjectsHash[student.subjectID] ] );
// return acc                                              }, {}) /* your code here */

// console.log(newObj);

// /* 
// ----------------------------------
// create a new object called `newObj` using the `students` array &  
// the `subjectsHash` object.
// ----------------------------------

// Expected Output of `newObj`: 
// {
//   Prateek: ["Rust", "Javascript"],
//   Yogesh: ["HTML"],
//   Nrupul: ["Java"],
// }
// */




// function getGreeting(firstName, lastName) {
//   return `Hi from ${firstName} ${lastName}.`
// }


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersGreetings = users.map(user => getGreeting(user.name,user.surname)) /* your code here */  

// console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]

// /*
//   Use of the array functons to manipulate the users array. We need a new array called usersGreetings.
//   usersGreetings will be an array of strings: ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
//   You are expected to use the getGreeting function inside the callback of the array method that you choose to use.
// */




// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(({name,surname,id}) => ({
//   fullName:name + " " + surname,
//   id
// }))  /* ... your code ... */

// /* 
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

// /*
//  form a new array using the users array
//  the new array is expected to have objects with the following properties:
//   - fullName: <name><space><surname> 
//   - id: <id>
//  check the end result / sample output in the comment above. 
// */





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

// /*
//  - Use proper array methods to create an object from the data arrray.
//  - from the data, the name would become the key of the new object.
//  - keys must be unique, one key per user.
//  - the value would be an array of their subjects.
// */





// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // [16, 20, 23, 30]

// let newArr = users.reduce((acc, item)=> {
//   // iteration 2 - acc: [16]
//   // iteration 2 - item: {age: 20}
//   acc.push(item.age);
//   return acc;
// },[])


// // let newArr = users.map((item) => {
// //   return item.age * 2;
// // });



// console.log(newArr); // [16,20,23,30]

// /*
// Problem Statement: 

// Use proper array method such that the newArr becomes: 
//  [16,20,23,30]
 
// The newArr is simply an array of numbers, in this problem the ages of the users. 
// */







let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// let obj = {}
// let newArr = users.map((elem) => obj[elem.name] = elem.id  ) /* your code here */

// console.log(newArr)
  
/*
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/
const newArray=users.reduce((acc,ele)=>
{
    return acc.push + ele.name;
},{})
console.log(newArray);
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