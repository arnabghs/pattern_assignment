const assert = require("assert");
const patternUtil = require ('../src/pattern_util.js');
const { repeatCharacter, takeInput, makeUpperPart, makeLowerPart } = patternUtil;


//........ test for repeatCharacter .............//

const testGenerateLine = function (character, width, expectedOutput){
  assert.deepEqual(repeatCharacter(character,width),expectedOutput);
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

let outputUpperFilled_7 = "   *\n  ***\n *****";
let outputUpperFilled_6 = "  *\n ***";
let outputUpperHollow_7 = "   *\n  * *\n *   *";
let outputUpperHollow_6 = "  *\n * *";
let outputUpperAngled_7 = "   *\n  / \\\n /   \\";
let outputUpperAngled_6 = "  *\n / \\";

testMakeUpperPart(3,'*','*','*',outputUpperFilled_7);
testMakeUpperPart(2,'*','*','*',outputUpperFilled_6);
testMakeUpperPart(3,'*','*',' ',outputUpperHollow_7);
testMakeUpperPart(2,'*','*',' ',outputUpperHollow_6);
testMakeUpperPart(3,'/','\\',' ',outputUpperAngled_7);
testMakeUpperPart(2,'/','\\',' ',outputUpperAngled_6);


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

//................. test for takeInput ..............//

const testTakeInput = function (inputArray, expectedOutput){
  assert.deepEqual(takeInput(inputArray),expectedOutput);
}

testTakeInput(['node','file.js','filled','5','10'],{pattern : 'filled', height : 5, width : 10});
testTakeInput(['node','file.js','hollow','10','5'],{pattern : 'hollow', height : 10, width : 5});
testTakeInput(['node','file.js','alternating','5','5'],{pattern : 'alternating', height : 5, width : 5});
testTakeInput(['node','file.js','right','5'],{pattern : 'right', height : 5, width : 5});
testTakeInput(['node','file.js','left','5'],{pattern : 'left', height : 5, width : 5});
testTakeInput(['node','file.js','filled','5'],{pattern : 'filled', height : 5, width : 5});
testTakeInput(['node','file.js','hollow','5'],{pattern : 'hollow', height : 5, width : 5});
testTakeInput(['node','file.js','angled','5'],{pattern : 'angled', height : 5, width : 5});



console.log("\n......... everything is fine in util library............\n");
