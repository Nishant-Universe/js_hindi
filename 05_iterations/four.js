const myObject={
    js:'javascript',
    cpp:'c++',
    rd:"ruby"
}
for (const key in myObject) {
    
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const arr=["js","rb","java","py"]
for (const key in arr) {
    console.log(arr[key]);
    
    
}