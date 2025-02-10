let myDate=new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString);
//console.log(typeof(myDate));
let myCreateDate=new Date(2023,0,23,5,3)
//console.log(myCreateDate.toString());
let myTimeStamp=Date.now()
console.log((myTimeStamp));
console.log((myCreateDate.getTime()));
console.log((Date.now())/1000);


let newDate=new Date()
console.log((newDate));
newDate.toLocaleString('default',{weekday: "long"
    ,   timeZone: "Delhi"
})





