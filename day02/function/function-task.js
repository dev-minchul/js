// 브론즈
// 1) 어떤 값을 받으면 값을 출력해주는 함수
function everything(...Value){
  console.log(Value)
}
everything(10)
// 2) 3개의 정수를 받아서 3개 모두 빼주는 함수
function numbers(num1, num2, num3){
  return num1- num2 - num3;
}
let result = numbers(30, 20, 10);
console.log(result)
// 실버
// 홍길동을 n번 출력해주는 함수
function add(number){
  for(let i = 0; i < number; i++){
    console.log("홍길동")
  }
}
add(10)
// n번까지 모두 더해주는 함수
function sum(number){
  let sum = 0;
  for(let i = 0; i <= number; i++){
    sum += i;
  }
  return sum;
}
console.log(sum(10))
// 골드 
// 1~n까지 홀수만 출력해주는 함수
function odd(num){
  let odd = 0;
  for(let i = 0; i <= num; i++){
    if (i % 2 != 0){
      console.log(i)
    }
  }
}
odd(10)
// 1~n까지 4의 배수만 더해주는 함수
// function sumFourTimes(limit){
//   let result = 0;
//   for(let i = 0; i < limit; i++){
//     let fourTimes = i % 4 === 0;
//     fourTimes ? result += i : i;
//     // if(fourTimes){ result += i; };
//     // if(!fourTimes){ continue; }
//     // result += i
//   }
//   return result;
// }
console.log(sumFourTimes(10))
// 플레티넘
// 1) 문자열을 받아서 원하는 문자의 개수를 구해주는 함수
function getCount(content, char){
   let count = 0;
   for(let i = 0; i < content.length; i++){
     content.charAt(i) == char && count++
   }
   return count;
   let result = getCount("abcdaefg", "a");
 }
 console.log(result)

// 2) 한글을 정수로 바꿔주는 함수 ("일공이사" -> 1024)
// function changeToInteger(hangle){
//   let hangles = "공일이삼사오육칠팔구";
//   let result = "";
//   for(let i = 0; i < hangle.length; i++){
//     result += hangles.indexOf(hangle.charAt(i));
//   }
//   return result;
// }

// let result2 = changeToInteger("공일이삼");
// console.log(result2)

// 3) 정수를 한글로 바꿔주는 함수 ("1024" -> "일공이사")
function changeToHangle(numbers){
  let hangles = "공일이삼사오육칠팔구";
  let result = "";
  for(let i = 0; i < numbers.length; i++){
    result += hangles.charAt(numbers.charAt(i));
  }
  return result;
}

let result3 = changeToHangle("1054")
console.log(result3);


