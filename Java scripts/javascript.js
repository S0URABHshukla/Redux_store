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

for(var i=0;i<10;i++)
{
    setTimeout(()=>
    {
        console.log(i)
    },1000)
}