
function saymyname(){
    console.log("n");
console.log("i");
console.log("s");
console.log("h");
console.log("a");
console.log("n");
console.log("t");

}
//saymyname()

function addnums(num1,num2){
    //console.log(num1+num2);
    // let result=num1+num2
    // return result
    return num1+num2
}
addnums(3,5)


const result= addnums(3,5)
//console.log("Result",result);


function loginUserMessage(username ="Sam"){
    if(!username){
        console.log("please enter a user name");
        return
        
    }
    return `${username} just loggedIn`

}

//console.log(loginUserMessage("sh"))


function calculateCartPrice(val1,val2,...num1){
    return num1

}
//console.log(calculateCartPrice(200,300,400,2000))


const user={
    username:"nishant",
    price:1234
}
function handleObject(anyobject){

    console.log(`user name ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({ username:"nishant",
    price:1234})
    
const myNewArray =[100,200,3004,1] 
function returnSecondvalue(getArray){
   return getArray[2]

}
console.log(returnSecondvalue(myNewArray));





