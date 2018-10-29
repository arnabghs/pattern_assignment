const { generateRectangle } = require('./src/pattern_library.js');
const { takeInput } = require('./src/pattern_util.js');

const main = function (){
  let { pattern,height,width } = takeInput();
  let finalRectangle = generateRectangle(pattern,height,width);
  console.log(finalRectangle);
}

main();
