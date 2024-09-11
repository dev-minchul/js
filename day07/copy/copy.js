// 얕은 복사
const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이",
}

const animals2 = animals;

animals2.dog = "멍뭉이";

console.log(animals)
console.log(animals2)

// 깊은 복사(1dep)
const animals3 =  Object.assign({}, animals);
animals3.dog = "흰둥이";
console.log(animals);
console.log(animals3);
