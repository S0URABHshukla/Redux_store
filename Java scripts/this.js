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

var status="sourabh";
setTimeout(()=>
{
    const status="kumar";
    const data={
        status:"sourabh kumar shukla",
        getStatus()
        {
            return this.status;
        },
    };
    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
},0);