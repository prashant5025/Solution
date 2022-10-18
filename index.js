function solution(input) {
  const output = [];
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    if (left === right) {
      output.push(input[left]);
      break;
    }
    output.push(input[right]);
    output.push(input[left]);
    left++;
    right--;
  }

  return output;
}
input = [2, 4, 6, 8, 10];

console.log(solution(input));
