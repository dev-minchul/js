// if(){
//   true 일 때 실행할 문장;
// }
  
// if(){
//   true일 때 실행할 문장;
// }else{
//   아닐 때 실행할 문장
// }

// if(){
// }else if(){
// }else{
// }

// 15분
// 이름 : 김세환
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

let name = "김세환";
let korScore = 80;
let mathScore = 70;
let engScore = 90;
let scScore = 20;

// 평균, 총점 구하기
let totalScore = korScore + mathScore + engScore + scScore;
let average = totalScore / 4;
let cutline = average >= 60;

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.
let pass = "합격";
let notPass = "불합격";
let passingResult = cutline ? pass : notPass;
let result = `${name}님의 이번 총점은 ${totalScore}, 평균은 ${average}점으로 ${passingResult}입니다.`;

// if문으로 평균이 60점 이상인 학생은 합격, 60점 미만인 학생은 불합격 출력하기
if(cutline){
  console.log(result)
}else{
  console.log(result)
}














