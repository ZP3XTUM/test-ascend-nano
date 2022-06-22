const readline = require("readline");
const { Number } = require("./findMinimumAndMaximum");

const arrNumber = new Number();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (i) => {
  return new Promise((resolve, _) => {
    rl.question(`> Array [${i + 1} from 5]: `, (n) => {
      let num = parseInt(n);
      resolve(num);
    });
  });
};

const question = (i) => {
  return new Promise(async (resolve, _) => {
    let num = await input(i);
    if (parseInt(num) < 1) {
      console.log("Input must be greater than 0. try again.");
      await question(i);
    } else {
      arrNumber.setArray(num);
    }
    resolve();
  });
};

const main = async () => {
  console.log("Input must be greater than 0. try again.");
  for (let i = 0; i < 5; i++) {
    await question(i);
  }
  arrNumber.findMinimumAndMaximum();
  rl.close();
};

main();
