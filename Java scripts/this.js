// let name='gobal';
// const user={
//     name:"sourabh",
//     age:26,
//     user2:{
//         surname:"shukla",
//         getName()
//         {              
//             getName2=()=>
//             {
//                 console.log(this.surname);
//             }   
//             getName2();
//             console.log(this.surname);   
//         },
        
//     },    
// }
// user.user2.getName();

// ----------------------------------------------------------------------

// const user={
//     name:"sourabh",
//     getName(){
//         console.log(this.name);
//     }
// }
// setTimeout(()=>
// {
//     user.getName();
// },1000);
// setTimeout(user.getName,1000);

// ----------------------------------------------------------------------
// var length=5;
// function callback()
// {
//     console.log(this.length);
// }
// const object={
//     length:4,
//     findLength(fn){
//         arguments[0]();
//     },
// };
// object.findLength(callback);

// ----------------------------------------------------------------------
// call example
// const obj=
// {
//     name:"sourabh"
// }

// function getName(age)
// {
//     return `hello my name is ${this.name} and ${age}`
// }
// console.log(getName.call(obj,24));

// ----------------------------------------------------------------------

//apply example
// const obj=
// {
//     name:"sourabh"
// }
// function getName(age,gender)
// {
//     return `hello my name is ${this.name} and age is ${age} ${gender}`
// }
// console.log(getName.apply(obj,[24,"male"]));

// ----------------------------------------------------------------------

//bind example
// const obj=
// {
//     name:"sourabh"
// }
// function getName(age,gender)
// {
//     return `hello my name is ${this.name} age ${age} gender ${gender}`
// }

// const results=getName.bind(obj,24,"male");
// console.log(results());

// ----------------------------------------------------------------------

//output based qus
// const user=
// {
//     name:"sourabh",
// }
// function userDetails(age)
// {
//     return `hello my name is ${this.name} and age is ${age}`
// }
// console.log(userDetails.call(user,24));
// console.log(userDetails.bind(user,24));

// const age=10;
// const person=
// {
//     name:"sourabh",
//     age:"24",
//     getAge()
//     {
//         return this.age;
//     },
// };
// const person2= { age : 26};
// console.log(person.getAge.call(person2));

// var status="sourabh";
// setTimeout(()=>
// {
//     const status="kumar";
//     const data={
//         status:"sourabh kumar shukla",
//         getStatus()
//         {
//             return this.status;
//         },
//     };
//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this));
// },0);

// const animals=[
//     {species:"Lion" , name:"King"},
//     {species:"Whale" , name:"Queen"},
// ];

// function printAnimals(i)
// {
//     this.print=function()
//     {
//         console.log(`# ${i} ${this.species} : ${this.name}`);
//     };
//     this.print();
// }
// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i],i);    
// }
//find max
// const array=[1,2,3,4,5];
// console.log(Math.max.apply(null,array));

// ----------------------------------------------------------------------

//pollyfill for call method

// const car=
// {
//     color:"grey",
//     company:"Nexa",
// };

// function purchaseCar(currency,price)
// {
//     console.log(`i have purchased ${this.color} - ${this.company} car for ${currency} at ${price}`);
// }
// // purchaseCar.call(car,"dollar","5cr");

// Function.prototype.mycall=function (context={},...args)
// {
//     if(typeof this !== "function")
//     {
//         throw new Error("this is not function")
//     }
//     context.fn=this;
//     context.fn(...args);
// }
// purchaseCar.call(car,"dollar","5cr");

// ----------------------------------------------------------------------

//pollyfill for apply method

// const car=
// {    
//     color:"grey",
//     company:"Nexa",
// };
// function purchaseCar(currency,price)
// {
//     console.log(`i have purchased ${this.color} - ${this.company} car for ${currency} at ${price}`);
// }
// // purchaseCar.apply(car,["dollar","5cr"]);
// Function.prototype.myApply=function (context={},args=[])
// {
//     if(typeof this !== "function")
//     {
//         throw new Error("this is not function")
//     }
//     if(!Array.isArray(args))
//     {
//         throw new Error("this is not in array")
//     }
//     context.fn=this; 
//     context.fn(...args);
// }
// purchaseCar.myApply(car,["dollar","5cr"]);

// ----------------------------------------------------------------------

//polyfill for map
// Array.prototype.myMap=function(cb)
// {
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i],i,this));        
//     }
//     return temp;
// }
// const nums=[1,2,3,4,5,6];
// const results=nums.myMap((e,i,arr)=>
// {
//     return e*2;
// });
// console.log(results);

// ----------------------------------------------------------------------

//polyfill for filter
// Array.prototype.myFilter=function(cb)
// {
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this)) temp.push(this[i]);        
//     }
//     return temp;
// }
// const nums=[1,2,3,4,5,6];
// const results=nums.myFilter((e,i,arr)=>
// {
//     return e>2;
// });
// console.log(results);

// ----------------------------------------------------------------------

//polyfill for reduce
// Array.prototype.myReduce=function(cb,initialvalue)
// {
//     var accumulator=initialvalue;
//     for (let i = 0; i < this.length; i++) {
//         accumulator=accumulator ? cb(accumulator,this[i],i,this) : this[i];      
//     }
//     return accumulator;
// }
// const nums=[1,2,3,4,5,6];
// const results=nums.myReduce((acc,cur,i,arr)=>
// {
//     return acc=acc+cur;
// });
// console.log(results);

// ----------------------------------------------------------------------



