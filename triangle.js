const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // Standard Input
  output: process.stdout, // Standard Output
});

let n = 0; // input

// 이벤트 리스터 등록으로 입출력
rl.on("line", (line) => {
  n = Number(line); // 입력 값을 숫자 n으로 받는다.
}).on("close", () => {
  // Ctrl + D로 인터페이스 종료시
  let answer = "";
  //   한 변의 길이가 n인 직각삼각형 출력
  for (let i = 0; i <= n; i++) {
    // for (let j = 0; j < i; j++) {
    //   answer += "*";
    // }
    answer += "*".repeat(i);
    answer += "\n";
  }
  console.log(answer);
});
