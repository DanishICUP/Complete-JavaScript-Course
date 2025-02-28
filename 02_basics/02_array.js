const heroes = ["A", "B", "C", "D"]
const moreHeroes = ["E", "F", "G", "H"]

heroes.push(moreHeroes)//this will add array in array [ 'A', 'B', 'C', 'D', [ 'E', 'F', 'G', 'H' ] ]
console.log(heroes[4][1]);//when access

const newarr = heroes.concat(moreHeroes)//return new array without modify new array
console.log(newarr);



//spread operator
const allNewHeros = [...heroes,...moreHeroes]//same answer concate
console.log(allNewHeros);


//nested arrays solution
const new_Arrays = [1, 2, 3, [4, 5, 6, [2, 3, [12, 3, 4], 4, 5]], 7, 8, [9, 1, [1, 2, 3, 4], 2, [2, 3, 4, 5, [3, 2, 4, 5, 3]]]]
console.log(new_Arrays.flat(Infinity));
/* output 
[
  1, 2, 3, 4, 5, 6, 2, 3, 12,
  3, 4, 4, 5, 7, 8, 9, 1,  1,
  2, 3, 4, 2, 2, 3, 4, 5,  3,
  2, 4, 5, 3
  ]
*/


console.log(Array.isArray("Danish"));//asked question output false 
console.log(Array.from("Danish"));//output : [ 'D', 'a', 'n', 'i', 's', 'h' ]


