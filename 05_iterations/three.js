//for of loop


const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
 const greeting="Hello World"
 for (const greet of greeting) {

console.log(greet);
    
 }


 const map=new Map()
 map.set('IN',"India")
 map.set('usa',"USA")
 map.set('uk',"UK")
 console.log(map);

 for(const [key,value] of map){
    console.log(key ,':-',value);
    
 }
 


 const myObject={
    'game1':'nfs',
    'game2':'spiderman'
 }
 