const assert = require('assert');
const pattern_lib =  require("../src/pattern_library.js");
const { generateRectangle,  generateTriangle, generateDiamond } = pattern_lib;

//...........test for rectangle ..............//

const testRectangle = function(userInputs, expectedOutput){
  assert.equal(generateRectangle(userInputs), expectedOutput);
}

let output_filled_20_7 = "********************\n";
output_filled_20_7 +=    "********************\n";
output_filled_20_7 +=    "********************\n";
output_filled_20_7 +=    "********************\n";
output_filled_20_7 +=    "********************\n";
output_filled_20_7 +=    "********************\n";
output_filled_20_7 +=    "********************";

let output_filled_5_5 = "*****\n";
  output_filled_5_5 +=    "*****\n";
  output_filled_5_5 +=    "*****\n";
  output_filled_5_5 +=    "*****\n";
  output_filled_5_5 +=    "*****";

let output_filled_2_2 =  "**\n";
  output_filled_2_2 +=     "**";

let output_filled_2_3 = "**\n";
  output_filled_2_3 +=    "**\n";
  output_filled_2_3 +=    "**";

testRectangle({pattern:'filled', height:7, width:20},output_filled_20_7);
testRectangle({pattern:'filled',height:5,width:5},output_filled_5_5);
testRectangle({pattern:'filled',height:2,width:2},output_filled_2_2);
testRectangle({pattern:'filled',height:3,width:2},output_filled_2_3);

let output_hollow_5_5 = "*****\n";
  output_hollow_5_5 +=    "*   *\n";
  output_hollow_5_5 +=    "*   *\n";
  output_hollow_5_5 +=    "*   *\n";
  output_hollow_5_5 +=    "*****";

let output_hollow_20_7 = "********************\n";
  output_hollow_20_7 +=    "*                  *\n";
  output_hollow_20_7 +=    "*                  *\n";
  output_hollow_20_7 +=    "*                  *\n";
  output_hollow_20_7 +=    "*                  *\n";
  output_hollow_20_7 +=    "*                  *\n";
  output_hollow_20_7 +=    "********************";

let output_hollow_2_2 =  "**\n";
  output_hollow_2_2 +=     "**";

testRectangle({pattern:'hollow',height:5,width:5},output_hollow_5_5);
testRectangle({pattern:'hollow',height:7,width:20},output_hollow_20_7);
testRectangle({pattern:'hollow',height:2,width:2},output_hollow_2_2);

let output_alternating_2_2 =  "**\n";
  output_alternating_2_2 +=     "--";

let output_alternating_5_5 = "*****\n";
  output_alternating_5_5 +=    "-----\n";
  output_alternating_5_5 +=    "*****\n";
  output_alternating_5_5 +=    "-----\n";
  output_alternating_5_5 +=    "*****";

let output_alternating_20_7 = "********************\n";
  output_alternating_20_7 +=    "--------------------\n";
  output_alternating_20_7 +=    "********************\n";
  output_alternating_20_7 +=    "--------------------\n";
  output_alternating_20_7 +=    "********************\n";
  output_alternating_20_7 +=    "--------------------\n";
  output_alternating_20_7 +=    "********************";

let output_alternating_3_3 =  "***\n";
  output_alternating_3_3 +=     "---\n";
  output_alternating_3_3 +=     "***";

testRectangle({pattern:'alternating', height:2, width:2},output_alternating_2_2);
testRectangle({pattern:'alternating', height:5, width:5},output_alternating_5_5);
testRectangle({pattern:'alternating', height:7, width:20},output_alternating_20_7);
testRectangle({pattern:'alternating', height:3, width:3},output_alternating_3_3);



//...........test for triangele ..............//


const testTriangle = function(userInputs, expectedOutput){
  assert.equal(generateTriangle(userInputs), expectedOutput);
}

  let output_left_3 = "*\n";
  output_left_3 +=    "**\n";
  output_left_3 +=    "***";

 let output_left_4 = "*\n";
  output_left_4 +=    "**\n";
  output_left_4 +=    "***\n";
  output_left_4 +=    "****";

let output_left_5 = "*\n";
  output_left_5 +=    "**\n";
  output_left_5 +=    "***\n";
  output_left_5 +=    "****\n";
  output_left_5 +=    "*****";

  let output_left_6 = "*\n";
  output_left_6 +=    "**\n";
  output_left_6 +=    "***\n";
  output_left_6 +=    "****\n";
  output_left_6 +=    "*****\n";
  output_left_6 +=    "******";

testTriangle({pattern:'left', height:3},output_left_3);
testTriangle({pattern:'left', height:4},output_left_4);
testTriangle({pattern:'left', height:5},output_left_5);
testTriangle({pattern:'left', height:6},output_left_6);

let output_right_3 = "  *\n";
  output_right_3 +=    " **\n";
  output_right_3 +=    "***";

let output_right_4 = "   *\n";
  output_right_4 +=    "  **\n";
  output_right_4 +=    " ***\n";
  output_right_4 +=    "****";

let output_right_5 = "    *\n";
  output_right_5 +=    "   **\n";
  output_right_5 +=    "  ***\n";
  output_right_5 +=    " ****\n";
  output_right_5 +=    "*****";

  let output_right_6 = "     *\n";
  output_right_6 +=    "    **\n";
  output_right_6 +=    "   ***\n";
  output_right_6 +=    "  ****\n";
  output_right_6 +=    " *****\n";
  output_right_6 +=    "******";

testTriangle({pattern:'right', height:3},output_right_3);
testTriangle({pattern:'right', height:4},output_right_4);
testTriangle({pattern:'right', height:5},output_right_5);
testTriangle({pattern:'right', height:6},output_right_6);



//...........test for diamond ..............//

const testDiamond = function(userInputs, expectedOutput){
  assert.equal(generateDiamond(userInputs), expectedOutput);
}

let output_filled_4 = " *\n";
  output_filled_4 +=    "***\n";
  output_filled_4 +=    " *";

let output_filled_5 = "  *\n";
output_filled_5 +=    " ***\n";
output_filled_5 +=    "*****\n";
output_filled_5 +=    " ***\n";
output_filled_5 +=    "  *";


  let output_filled_10 = "    *\n";
  output_filled_10 +=    "   ***\n";
  output_filled_10 +=    "  *****\n";
  output_filled_10 +=    " *******\n";
  output_filled_10 +=    "*********\n";
  output_filled_10 +=    " *******\n";
  output_filled_10 +=    "  *****\n";
  output_filled_10 +=    "   ***\n";
  output_filled_10 +=    "    *";

let output_filled_9 = "    *\n";
output_filled_9 +=    "   ***\n";
output_filled_9 +=    "  *****\n";
output_filled_9 +=    " *******\n";
output_filled_9 +=    "*********\n";
output_filled_9 +=    " *******\n";
output_filled_9 +=    "  *****\n";
output_filled_9 +=    "   ***\n";
output_filled_9 +=    "    *";

testDiamond({pattern:'filled', height:4},output_filled_4);
testDiamond({pattern:'filled', height:5},output_filled_5);
testDiamond({pattern:'filled', height:10},output_filled_10);
testDiamond({pattern:'filled', height:9},output_filled_9);

let output_hollow_4 = " *\n";
  output_hollow_4 +=    "* *\n";
  output_hollow_4 +=    " *";

let output_hollow_5 = "  *\n";
  output_hollow_5 +=    " * *\n";
  output_hollow_5 +=    "*   *\n";
  output_hollow_5 +=    " * *\n";
  output_hollow_5 +=    "  *";

let output_hollow_10 = "    *\n";
output_hollow_10 +=    "   * *\n";
output_hollow_10 +=    "  *   *\n";
output_hollow_10 +=    " *     *\n";
output_hollow_10 +=    "*       *\n";
output_hollow_10 +=    " *     *\n";
output_hollow_10 +=    "  *   *\n";
output_hollow_10 +=    "   * *\n";
output_hollow_10 +=    "    *";

let output_hollow_9 = "    *\n";
output_hollow_9 +=    "   * *\n";
output_hollow_9 +=    "  *   *\n";
output_hollow_9 +=    " *     *\n";
output_hollow_9 +=    "*       *\n";
output_hollow_9 +=    " *     *\n";
output_hollow_9 +=    "  *   *\n";
output_hollow_9 +=    "   * *\n";
output_hollow_9 +=    "    *";


testDiamond({pattern:'hollow', height:4},output_hollow_4);
testDiamond({pattern:'hollow', height:5},output_hollow_5);
testDiamond({pattern:'hollow', height:10},output_hollow_10);
testDiamond({pattern:'hollow', height:9},output_hollow_9);

let output_angled_6 = "  *\n";
  output_angled_6 +=    " / \\\n";
  output_angled_6 +=    "*   *\n";
  output_angled_6 +=    " \\ /\n";
  output_angled_6 +=    "  *";

let output_angled_5 = "  *\n";
output_angled_5 +=    " / \\\n";
output_angled_5 +=    "*   *\n";
output_angled_5 +=    " \\ /\n";
output_angled_5 +=    "  *";

let output_angled_11 = "     *\n";
output_angled_11 +=    "    / \\\n";
output_angled_11 +=    "   /   \\\n";
output_angled_11 +=    "  /     \\\n";
output_angled_11 +=    " /       \\\n";
output_angled_11 +=    "*         *\n";
output_angled_11 +=    " \\       /\n";
output_angled_11 +=    "  \\     /\n";
output_angled_11 +=    "   \\   /\n";
output_angled_11 +=    "    \\ /\n";
output_angled_11 +=    "     *";

let output_angled_9 = "    *\n";
output_angled_9 +=    "   / \\\n";
output_angled_9 +=    "  /   \\\n";
output_angled_9 +=    " /     \\\n";
output_angled_9 +=    "*       *\n";
output_angled_9 +=    " \\     /\n";
output_angled_9 +=    "  \\   /\n";
output_angled_9 +=    "   \\ /\n";
output_angled_9 +=    "    *";

testDiamond({pattern:'angled', height:6},output_angled_6);
testDiamond({pattern:'angled', height:5},output_angled_5);
testDiamond({pattern:'angled', height:11},output_angled_11);
testDiamond({pattern:'angled', height:9},output_angled_9);




console.log("\n......... everything is fine in pattern library..............\n");
