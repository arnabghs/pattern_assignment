const patternLib = require('./src/pattern_library.js');
const { generateTriangle } = patternLib;

const main = function (){
  let type = process.argv[2];
  let height = +process.argv[3];
  let finalTriangle = generateTriangle(type,height);
  console.log(finalTriangle);
}

main();
