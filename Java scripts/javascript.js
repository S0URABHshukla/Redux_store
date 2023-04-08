// let animals=[{type:"lion"},"tiger"];
// let clones=animals.slice();

// clones[0].type="bear";
// clones[1]="sheep";
// console.log(animals[0].type, clones[0].typoe);
// console.log(animals[1], clones[1]);

// class Animal{
//     static belly =[]
//     eat() {Animal.belly.push("food");}
// }
// let a =new Animal();
// a.eat();
// console.log(Animal.belly[0]);

// var sound="grunt";
// var bear ={sound:"roar"};
// function roar(){
//     console.log(this.sound)
// }
// roar.apply(bear)

// let cat ={type:"tiger",size:"large"};
// let json = JSON.stringify(cat,["type"]);
// console.log(json)   //print{type:"tiger"}

// const foo={
//     bar(){
//         console.log("hello, world");
//     },
//     name:"albert",
//     age:26,
// }
// console.log(foo)

// let rainForests= ["Amazon", "Borneo", "Cerrado","Congo"];
// rainForests.splice(0,2);
// console.log(rainForests);

// let rainForests=10;
// let animals=0;
// while(rainForests<13 || animals<=2)
// {
//     rainForests++;
//     animals+=2;
// }
// console.log(animals);

// let animals=["eagle","osprey","salmon"];
// let key =animal=>animal==="salmon";

// if(animals.some(key))
// {
//     console.log("swim")
// }

// console.log(null || 4 || 2&&3 );
//sourav = true;

// console.log(null || 2||3 || 4);

// console.log(2&&3 &&0);

// console.log(typeof NaN)
// let nam="sourabh";
// let age=26;
// console.log(!typeof nam === "string")

// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,2,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximu

// let arr =['a','b','b','c','c','c'];

// const findcount=(arr)=>
// {
//     let count={};
//     arr.forEach((e)=>
//     {
//         count[e]=(count[e] || 0) + 1;
//     })
//     return count;
// }
// const res=findcount(arr);
// console.log(res)

// for(var i=0;i<10;i++)
// {
//     setTimeout(()=>
//     {
//         console.log(i)
//     },1000)
// }
// currying
// function product(x)
// {
//     return function(y)
//     {
//         return x*y;
//     }
// }
// console.log(product(4)(5));

// function chips() {
//     console.log('sync: chips'); 
//   }  
//   function pizza() {
//     setTimeout(()=>{
//       console.log('async: pizza');
//     },0);
//   }
  
//   function main() {
//     chips();
//     pizza();
//     chips();
//     chips();
//     chips();
//   }  
//   main();

// function sayGoodbye() {
//     console.log("Good bye! ", this);
//   }
  
//   function sayHello() {
//     console.log("Helloo! ", this);
//     sayGoodbye();
//   }
  
//   sayHello();


// let arr=['a','b','c','d','e','f'];
// let s=arr.indexOf('c');
// let e=arr.indexOf('e');
// let end=e-s+1 ;

// let newArr=arr.splice(s,end);
// let updateArr=newArr.concat(arr)
// console.log(updateArr);

// let developers_array = [
//       {
//         first: "John",
//         last: "Doe",
//         dept: "FE",
//         commits: 10
//       },
//       {
//         first: "Jane",
//         last: "Doe",
//         dept: "BE",
//         commits: 15
//       },
//       {
//         first: "James",
//         last: "bond",
//         dept: "BE",
//         commits: 8
//       }
//     ];
    // {
    //   BE: ["Jane", "James"]
    //   FE: ["John"]
    // }
//   let obj =  {
//         BE : developers_array.filter((ele)=> ele.dept == "BE").map((ele)=>ele.first),
//         FE : developers_array.filter((ele)=> ele.dept == "FE").map((ele)=>ele.first)
//     }
// console.log(obj);

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

// const obj1={
//     name:"sourabh",
//     sname:"shukla"
// }
// const obj2={
//     name:"nitin",
//     sname:"deswal"
// }

// console.log({...obj1,...obj2})

// const arr1=[1,2,3,4,5];
// const arr2=[3,4,5,6,7];

// console.log([...arr1,...arr2]);

// const obj1={
//     name:"sourabh",
//     sname:"shukla"
// }

// Object.seal(obj1);
// obj1.name="nitin"

// console.log(obj1)

// for(let i=0;i<5;i++) 
// {
//     setTimeout(()=>
//     {
//         console.log(i);
//     },0)
// }
// let obj={
//     name:"nitin",
//     sname:"deswal"
// }
// let sname='shukla';
// console.log(obj["sname"], obj.sname, obj[sname])

// "use strict"
// var x=100;

// function test()
// {
//     var x=i=10;
// }
// test()
// console.log(x,i)

// const result=[[0,1],[2,3]].reduce((acc,cur)=>
// {
//     return acc.concat(cur);
// },[1,2]);
// console.log(result);

// let set=new Set();
// set.add(1);
// set.add('anup');
// set.add({name:"anup"});

// for(let item of set)
// {
//     console.log(item+2);
// }

// const user={name:"anup", age:21};
// const obj={admin:true,...user}

// console.log(obj)

// const person={name:"anup"};

// Object.defineProperty(person,'age',{value:21})
// console.log(person)
// console.log(Object.keys(person))

// const arr=[1,2,3,4,5];

// const binary=(x)=>
// {
//     return x.toString(2);
// }
// const result=arr.map(binary);
// console.log(result)

// arr.forEach((e,i)=>
// {
//     arr[i]=e.toString(2);
// })
// console.log(arr);

// const arr=[1,2,3,4,5];

// const result=arr.reduce((acc,curr)=>
// {
//     return acc=acc+curr;
// },0);
// console.log(result)
// console.log(arr)

// ----------------------------------------------------------------------

//return only names of students who scored more than 60

// let students = [
//     { name:"piyush" , rollnumber:01 , marks : 80},
//     { name:"jenny" , rollnumber:02 , marks : 69},
//     { name:"kaushal" , rollnumber:03 , marks : 35},
//     { name:"dilpreet" , rollnumber:04 , marks : 55},
// ];
// const names=students.filter((e,i,arr)=>
// {
//     return e.marks > 60;
// }).
// map((e)=>
// {
//     return e.name;
// });
// console.log(names);

// ----------------------------------------------------------------------

// return Total marks for students with marks greater than 60 after 20 marks
//        have been added to those who scored less than 60.

let students = [
    { name:"piyush" , rollnumber:01 , marks : 80},
    { name:"jenny" , rollnumber:02 , marks : 69},
    { name:"kaushal" , rollnumber:03 , marks : 35},
    { name:"dilpreet" , rollnumber:04 , marks : 55},
];
const names=students.map((e,i,arr)=>
{
    if(e.marks < 60)
    {
        e.marks+=20;
    }
    return e.marks;
})
.filter((e)=>
{
    return e > 60;
})
.
reduce((acc,cur)=>
{
    return acc+=cur;
},0);
console.log(names);






















