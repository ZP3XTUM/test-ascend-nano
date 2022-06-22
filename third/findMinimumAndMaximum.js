class Number {
  constructor() {
    this.array = [];
  }

  setArray(number) {
    this.array.push(parseInt(number));
  }

  findMinimumAndMaximum() {
    let arr = this.array;
    let min = 0;
    let max = 0;
    let n = arr.length;

    arr.sort(function (a, b) {
      return a - b;
    });

    for (let i = 0, j = n - 1; i < 4; i++, j--) {
      min += arr[i];
      max += arr[j];
    }

    console.log("-------------------");
    console.log(arr);
    console.log("Answer:", `${min} ${max}`);
  }
}

module.exports.Number = Number;
