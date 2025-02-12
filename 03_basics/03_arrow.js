const user={
    username:"Nishant ",
    price:999,
    welcomeMessage :function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username="a"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username="abc"
//     console.log(this.username);
    
// }
//chai()
// const chai=function(){
//     let username="abc"
//     console.log(this.username);
    
// }
// chai()
const chai=()=>{
    let username="abc"
    console.log(this);
    
}
//chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(1,2));

//const addTwoo=(num1,num2)=> (num1+num2)
const addTwoo=(num1,num2)=>({username:"nisahant"})
console.log(addTwoo(1,2));

//const myArray=[1,2,3,4,5,6,7,8,9]
//myArray.forEach()






