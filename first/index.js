const readline = require("readline");
const { PairGivenSum } = require("./pairGivenSum");

const pairGivenSum = new PairGivenSum();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = (i) => {
  return new Promise((resolve, _) => {
    rl.question(`> Array [${i + 1} from 5]: `, (money) => {
      pairGivenSum.setArray(money);
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, _) => {
    rl.question("> Sum Input: ", (input) => {
      pairGivenSum.setSum(input);
      resolve();
    });
  });
};

const main = async () => {
  for (let i = 0; i < 5; i++) {
    await question1(i);
  }
  await question2();
  pairGivenSum.findPair();
  rl.close();
};

main();
