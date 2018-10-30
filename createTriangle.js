const { generateTriangle }  = require('./src/pattern_library.js');
const { takeInput } = require('./src/pattern_util.js');

const main = function (){
  let { pattern,height } = takeInput(process.argv);
  let finalTriangle = generateTriangle(pattern,height);
  console.log(finalTriangle);
}

main();
