var buttons = document.querySelectorAll("button");
var input = document.querySelector("input");

for (var i = 0; i < buttons.length; i++) {
  // 반복 실행
  buttons[i].addEventListener("click", (event) => {
    // EventListner -> click 이벤트에 실행되는 코드
    var text = event.target.value; // x 대신 * 사용하기 위해 .innerText 대신 .value 사용
    console.log(text);
    switch (text) {
      case "=": // eval 연산
        input.value = eval(input.value);
        break;
      case "AC": // text clear
        input.value = "";
        break;
      default: //text 연결
        input.value += text;
    }
  });
}
