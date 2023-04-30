function secondSymbol(s, symbol) {
  let arr = s.split("");
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === symbol) {
      count.push(i);
    }
  }
  if (count.length === 0 || count.length < 2) {
    return -1;
  }
  return count[1];
}

console.log(secondSymbol("Hello world!!!", "l")); // 3
console.log(secondSymbol("Hello world!!!", "A")); // -1
console.log(secondSymbol("AWehVpANfypvXUPwtUqKcarcCuVvxQhhZzZjhoRFf", "N")); // -1
