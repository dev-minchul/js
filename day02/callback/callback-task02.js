function print(value){
  console.log(value);
}
// 1) 1~100까지 짝수만 더한 후 결과 값에 3을 곱한 후 출력

const sumEven = (callback) => {
  let result = 0
  for(let i = 0; i <= 100; i++){
    i % 2 == 0 ? result += i : 0;
  }
  callback(result)
} 
  const multipy =(number , callback) => {
    callback(number * 3)
  }
  sumEven((result)=> {
    multipy(result, print)
  })
// 2) 2개의 정수 중 최소 값과 최대 값을 비교한 후 큰 값에 10을 곱해서 출력
const compare = (num1, num2, callback) => {
  if(typeof (num1) != "number" || typeof(num2) != "number") return;
  if(num1 == num2) return "두 수가 같습니다. ";
  num1 < num2 ? max = num2 : max = num1;
  callback(max)
}
const maxmultipy = (number1 ,callback) => {
  callback (number1 * 10)
}
compare(20, 40 , (result) => {
  maxmultipy(result ,print)
})
// 3) 결제 상품의 이름과 결제 상태를 전달 받아서 
// 결제 상태가 true일 경우 결제 완료, false 인경 우 결제 취소를 출력
const product = (Name, boolean ,callback) => {
  callback(boolean)
}
const check = (booleancheck , callback) => {
  result = (booleancheck == true ? "결제완료" : "결제취소")
  callback(result)
}
product("사과", true , (result) => {
  check(result , print)
})
// 4) 상품 가격과 총 구매한 가격의 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니라면 false 출력
// ex) 가격 1000원, 총 구매가격 5000원 == 구매 개수 5개
const product2 = (price , Allprice, callback) => {
  let count = Allprice / price;
  callback(count)
}
const countcheck = (count, callback) => {
  let result = count <= 5;
  callback(result)
}
product2(1000, 5000, (count) => {
  countcheck(count, print)
})