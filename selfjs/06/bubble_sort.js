function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    console.log(`${i}회전: ${array}`);
    if (swap == undefined) {
      break;
    }
  }
  return array;
}
console.log(bubbleSort([23, 1, 10, 5, 2]));
