// let animals=[{type:"lion"},"tiger"];
// let clones=animals.slice();

// clones[0].type="bear";
// clones[1]="sheep";
// console.log(animals[0].type, clones[0].type);
// console.log(animals[1], clones[1]);

//-----------------------------------------------------------

// var sound="grunt";
// var bear ={sound:"roar"};
// function roar(){
//     console.log(this.sound)
// }
// roar.apply(bear)

//-----------------------------------------------------------

// let rainForests= ["Amazon", "Borneo", "Cerrado","Congo"];
// rainForests.splice(0,2);
// console.log(rainForests);

//-----------------------------------------------------------

// console.log(null || 4 || 2&&3 );
// console.log(null || 2||3 || 4);
// console.log(2 && 3 && 0);
// console.log(2 && 3 && 1 && 9);
// console.log( 1 < 2 < 3);
// console.log( 3 > 2 > 1);
// console.log(0.2 + 0.3 == 0.5);
// console.log(0.1 + 0.2 == 0.3);
// console.log(typeof NaN)
// let nam="sourabh";
// console.log(!typeof nam === "string")

//----------------------------------------------------------------------------------------------

// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
// function canJump(nums) {
//     let last=nums.length-1;
//     for(let i=nums.length-2 ; i>=0 ;i--)
//     {
//         if(nums[i]+i >= last)
//         {
//             last=i;
//         }
//     }
//     if(last===0) return true;
//     return false;
//   }  
//   console.log(canJump([2,3,1,1,4])); // true
//   console.log(canJump([3,2,1,0,4])); // false

//----------------------------------------------------------------------------------------------

// let arr =['a','b','b','c','c','c'];
// let arr =['a','b','b','c','c','c'];
// const results=arr.reduce((acc,cur)=>
// {
//     acc[cur]=acc[cur] ? acc[cur]+1 : 1;
//     return acc;
// },{});
// console.log(results);

//----------------------------------------------------------------------------------------------

// let arr=['a','b','c','d','e','f'];
// let s=arr.indexOf('c');
// let e=arr.indexOf('e');
// let end=e-s+1 ;

// let newArr=arr.splice(s,end);
// let updateArr=newArr.concat(arr)
// console.log(updateArr);

//----------------------------------------------------------------------------------------------

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
    // const results=developers_array.reduce((acc,cur)=>
    // {
    //     acc[cur.dept]=acc[cur.dept] ? [...acc[cur.dept],cur.first] :[cur.first];
    //     return acc;
    // },{});
    //     console.log(results);

 //----------------------------------------------------------------------------------------------   

// const obj1={
//     name:"sourabh",
//     sname:"shukla"
// }
// const obj2={
//     name:"nitin",
//     sname:"deswal"
// }

// console.log({...obj1,...obj2})

 //----------------------------------------------------------------------------------------------   

// const obj1={
//     name:"sourabh",
//     sname:"shukla"
// }
// Object.seal(obj1);
// obj1.name="nitin"
// console.log(obj1)

//----------------------------------------------------------------------------------------------

// for(let i=0;i<5;i++) 
// {
//     setTimeout(()=>
//     {
//         console.log(i);
//     },0)
// }

//----------------------------------------------------------------------------------------------

// let obj={
//     name:"nitin",
//     sname:"deswal"
// }
// let sname='shukla';
// console.log(obj["sname"], obj.sname, obj[sname])

//----------------------------------------------------------------------------------------------

// "use strict"
// var x=100;

// function test()
// {
//     var x=i=10;
// }
// test()
// console.log(x,i)

//----------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------

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

// let students = [
//     { name:"piyush" , rollnumber:01 , marks : 80},
//     { name:"jenny" , rollnumber:02 , marks : 69},
//     { name:"kaushal" , rollnumber:03 , marks : 35},
//     { name:"dilpreet" , rollnumber:04 , marks : 55},
// ];
// const names=students.map((e,i,arr)=>
// {
//     if(e.marks < 60)
//     {
//         e.marks+=20;
//     }
//     return e.marks;
// })
// .filter((e)=>
// {
//     return e > 60;
// })
// .
// reduce((acc,cur)=>
// {
//     return acc+=cur;
// },0);
// console.log(names);






















