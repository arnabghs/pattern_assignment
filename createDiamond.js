const { generateDiamond } = require('./src/pattern_library.js');
const { takeInput } = require('./src/pattern_util.js');

const main = function (){
  let userInputs = takeInput(process.argv);
  let finalDiamond = generateDiamond(userInputs);
  console.log(finalDiamond);
}

main();
