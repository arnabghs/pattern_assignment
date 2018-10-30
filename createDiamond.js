const { generateDiamond } = require('./src/pattern_library.js');
const { takeInput } = require('./src/pattern_util.js');

const main = function (){
  let { pattern,height } = takeInput(process.argv);
  let finalDiamond = generateDiamond(pattern,height);
  console.log(finalDiamond);
}

main();
