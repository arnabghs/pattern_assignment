const patternLib = require('./src/pattern_library.js');
const { generateRectangle } = patternLib;

const main = function (){
  let pattern = process.argv[2];
  let width = + process.argv[3];
  let height = +process.argv[4];
  let finalRectangle = generateRectangle(pattern,width,height);
  console.log(finalRectangle);
}

main();
