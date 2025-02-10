//singleton


//object literals
const symb =Symbol("key1")

const Jsuser={
    name:"Nishant",
    "full name": "Nishant G",
    age:19,
    [symb]:"mykey1",

    location:"USA",
    email:"nishant@12346",
    lastLongDays:["Monday","Tuesday"]

}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[symb]);
//Object.freeze(Jsuser)
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log(`Hello js User,${this.name}`);
    

}
console.log((Jsuser.greeting()));




