class PairGivenSum {
  constructor() {
    this.array = [];
    this.sum;
  }

  setArray(number) {
    this.array.push(parseInt(number));
  }
  setSum(number) {
    this.sum = parseInt(number);
  }

  findPair() {
    let ans = "";
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[i] + this.array[j] === this.sum) {
          ans += `${this.array[i]}+${this.array[j]}, `;
        }
      }
    }

    console.log("-------------------");
    console.log("array: ", this.array);
    console.log("input: ", this.sum);
    if (ans !== "") {
      console.log("expected result >>>>>>", ans);
    } else {
      console.log("can't find answer");
    }
  }
}

module.exports.PairGivenSum = PairGivenSum;
