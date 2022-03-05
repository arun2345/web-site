//class and object

// class customer
// {
//    constructor(n)
//    {
//        this.name=n;
//    }
//    age=25
//    belong="Aonla"
//    buy()
//    {
//        console.log("hi")
//    }
// }
// class GuestCustomer extends customer{
//     hello(){
//         console.log("hello")
//     }
// }
// let customer1 =new customer("arun kumar")
// console.log(customer1)


//spread and rest operator
let person ={
    names:"arun kumar",
    age:20
}
let newperson={
    ...person,  //spread
    city:"bareilly"
}
console.log(newperson)
  //rest operater
function hellow (...all)  
{ 
    console.log(all)
}
hellow(1,3,2,6,7,89,0,7,6,43,1)

//array Destructuring
let list =["Audi","BMW","fararri"]
let [car1,car2,car3]=list
console.log(car2)



//object destructuring
const obj ={
    names:"Arun kumar",
    age:20
}
let {names,age}=obj
console.log(names)