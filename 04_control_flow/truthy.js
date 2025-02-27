const userEmail="nishant@ai"

if(userEmail){
    console.log("got user");
    
}
else{
    console.log("dont have value");
    
}


//falsy value
//false ,0,-1,BigInt on,"",null ,undefine,NaN


//truthy value
// "0",false, " ",[ ],{},function(){}


if(userEmail.length===0){
    console.log("Array is empty");
    
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}


//Nullisah Colescing operator(??): null undefined

let val ;
//val1=5??10
//val1=null??10
val1=10??2??3
console.log(val1);



//Terniary operator
// Condition ? true:false
