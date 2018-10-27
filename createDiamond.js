const patternLib = require('./src/pattern_library.js');
const { generateDiamond } = patternLib;

const main = function (){
  let type = process.argv[2];
  let height = +process.argv[3];
  if(height%2 == 1){ height++ }
  let finalDiamond = generateDiamond(type,height);
  console.log(finalDiamond);
}

main();
