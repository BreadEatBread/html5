function solution(n) {
  for (let i = 1; i < n; i++) {
    if ((i * 6) % n == 0) {
      return i;
    }
  }
  return n;
}

function solution2(n) {
  // n : 4
  for (let i = 6; i < 6 * n; i += 6) {
    // 피자 조각 수
    // i : 6 % 4 = 2
    // i : 12 % 4 = 0
    // i : 18 % 4 = 2
    if (i % n == 0) {
      // n명이 똑같이 먹을 수 있으면
      return i / 6; // 피자의 판 수
    }
  }
  return n;
}

function solution3(n) {  
  for (let i = 6; i >= 1; i--) {
    if (n % i == 0 && 6 % i == 0) { // GCD i를 구하기
    //   const lcm = (n * 6) / i; // 조각수
    //   return lcm / 6; // 판수
    return n / i; // n / GCD(n,6)
    }
  }
}

function solution4(n) {
  var answer = 0;
  var max = 0;
  for (let i = 1; i <= n && i <= 6; i++) {
    if (n % i == 0 && 6 % i == 0) {
      max = i;
    }
  }
  answer = (n * 6) / max / 6;

  return answer;
}

function solution5(n) {
  // 한 판에 여섯 조각
  let pizzaBox = 6;
  // 같은 수로 나눠질 때까지 +6
  while (pizzaBox % n !== 0) {
    pizzaBox += 6;
  }
  // 박스 수 반환
  return pizzaBox / 6;
}
