const { generateRectangle } = require('./src/pattern_library.js');
const { takeInput } = require('./src/pattern_util.js');

const main = function (){
  let userInputs = takeInput(process.argv);
  let finalRectangle = generateRectangle(userInputs);
  console.log(finalRectangle);
}

main();
