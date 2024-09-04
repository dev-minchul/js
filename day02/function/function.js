// function add(num1, num2){
//   return num1 + num2;
// }

// let result = add(10, 20);
// console.log(result);


// // 디폴트 파라미터
// function sum(num1, num2, num3 = 0){
//   return num1 + num2 + num3;
// }

// console.log(sum(10, 20))

// 실습
// 숫자 5개를 받아서 5개를 모두 출력
// function print(num1, num2, num3, num4, num5){
//   console.log(num1, num2, num3, num4, num5)
// }

// print(10, 20, 30, 40, 50)
// // 2개 문자열을 연결시켜주는 함수
// function initialValue(){
//   return "";
// }

// function link(str1, str2){
//   return str1 + str2;
// }

// let result = link("안녕", "하세요");
// console.log(result);

// // 사용자가 파라미터로 입력한 값을 모두 더하기
// // 
// function addAll(...numbers){
//   console.log(numbers[3]);
// }

// addAll(10, 20, 30, 40, 50)

// // 가변 인자로 이름, 나이, 이메일을 입력받아서 출력하기
// function person(...person){
//   for(let i = 0; i < person.length; i++){
//     console.log(person[i])
//   }
// }
// person("신민철",25,"leo2533@Nave.com")


// 가변인자로 사용자가 입력한 값을 모두 더해서 값을 주는 함수
function sum(...numbers){
  let result = 0;
  for(let i = 0; i < numbers.length; i++ ){
    // ealry return;
    if (typeof(numbers[i]) !== "number"){return;}
      result += numbers[i];
    }
  return result;
}

let result = sum(10, 20,"ㄱ", 30, 40);
console.log(result);
