const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
const allHeroes= marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,[7,4],5]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Nishant"));
score1=1
score2=3

console.log(Array.of(score1,score2));








