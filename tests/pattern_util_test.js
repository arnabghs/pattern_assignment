const assert = require("assert");
const patternUtil = require ('../src/pattern_util.js');
const { generateLine, takeInput, makeUpperPart, makeLowerPart } = patternUtil;


//........ test for generateLine .............//

const testGenerateLine = function (character, width, expectedOutput){
  assert.deepEqual(generateLine(character,width),expectedOutput);
}

testGenerateLine("", 0, "");
testGenerateLine(" ", 0, "");
testGenerateLine("", 5, "");
testGenerateLine("*", 5, "*****")
testGenerateLine(" ", 5, "     ");
testGenerateLine("\n", 5, "\n\n\n\n\n");

//............ test for makeUpperPart ..............//

const testMakeUpperPart = function (lines,firstChar,lastChar,midChar,expectedOutput){
  assert.deepEqual(makeUpperPart(lines,firstChar,lastChar,midChar),expectedOutput);
}

let outputUpperFilled_5 = "  *\n ***\n*****";
let outputUpperFilled_4 = " *\n***";
let outputUpperHollow_5 = "  *\n * *\n*   *";
let outputUpperHollow_4 = " *\n* *";
let outputUpperAngled_5 = "  *\n / \\\n*   *";
let outputUpperAngled_4 = " *\n* *";

testMakeUpperPart(3,'*','*','*',outputUpperFilled_5);
testMakeUpperPart(2,'*','*','*',outputUpperFilled_4);
testMakeUpperPart(3,'*','*',' ',outputUpperHollow_5);
testMakeUpperPart(2,'*','*',' ',outputUpperHollow_4);
testMakeUpperPart(3,'/','\\',' ',outputUpperAngled_5);
testMakeUpperPart(2,'/','\\',' ',outputUpperAngled_4);


//................ test for makeLowerPart .............//

const testMakeLowerPart = function (lines,firstChar,lastChar,midChar,expectedOutput){
  assert.deepEqual(makeLowerPart(lines,firstChar,lastChar,midChar),expectedOutput);
}

let outputLowerFilled_5 = " ***\n  *";
let outputLowerFilled_4 = " *";
let outputLowerHollow_5 = " * *\n  *";
let outputLowerHollow_4 = " *";
let outputLowerAngled_5 = " \\ /\n  *";
let outputLowerAngled_4 = " *";

testMakeLowerPart(2,'*','*','*',outputLowerFilled_5);
testMakeLowerPart(1,'*','*','*',outputLowerFilled_4);
testMakeLowerPart(2,'*','*',' ',outputLowerHollow_5);
testMakeLowerPart(1,'*','*',' ',outputLowerHollow_4);
testMakeLowerPart(2,'\\','/',' ',outputLowerAngled_5);
testMakeLowerPart(1,'\\','/',' ',outputLowerAngled_4);


console.log("\n......... everything is fine in util library............\n");
