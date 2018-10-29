const assert = require('assert');
const pattern_lib =  require("../src/pattern_library.js");
const { generateRectangle,  generateTriangle, generateDiamond } = pattern_lib;

//...........test for rectangle ..............//

const testRectangle = function(type, width, height, expectedOutput){
  assert.equal(generateRectangle(type,height,width), expectedOutput);
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

testRectangle('filled',20,7,output_filled_20_7);
testRectangle('filled',5,5,output_filled_5_5);
testRectangle('filled',2,2,output_filled_2_2);
testRectangle('filled',2,3,output_filled_2_3);

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

testRectangle('hollow',5,5,output_hollow_5_5);
testRectangle('hollow',20,7,output_hollow_20_7);
testRectangle('hollow',2,2,output_hollow_2_2);

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

testRectangle('alternating',2,2,output_alternating_2_2);
testRectangle('alternating',5,5,output_alternating_5_5);
testRectangle('alternating',20,7,output_alternating_20_7);
testRectangle('alternating',3,3,output_alternating_3_3);



//...........test for triangele ..............//


const testTriangle = function(type,height, expectedOutput){
  assert.equal(generateTriangle(type,height), expectedOutput);
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

testTriangle('left',3,output_left_3);
testTriangle('left',4,output_left_4);
testTriangle('left',5,output_left_5);
testTriangle('left',6,output_left_6);

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

testTriangle('right',3,output_right_3);
testTriangle('right',4,output_right_4);
testTriangle('right',5,output_right_5);
testTriangle('right',6,output_right_6);



//...........test for diamond ..............//

const testDiamond = function(type,height, expectedOutput){
  assert.equal(generateDiamond(type,height), expectedOutput);
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

testDiamond('filled',4,output_filled_4);
testDiamond('filled',5,output_filled_5);
testDiamond('filled',10,output_filled_10);
testDiamond('filled',9,output_filled_9);

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


testDiamond('hollow',4,output_hollow_4);
testDiamond('hollow',5,output_hollow_5);
testDiamond('hollow',10,output_hollow_10);
testDiamond('hollow',9,output_hollow_9);

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

testDiamond('angled',6,output_angled_6);
testDiamond('angled',5,output_angled_5);
testDiamond('angled',11,output_angled_11);
testDiamond('angled',9,output_angled_9);







console.log("\n......... everything is fine ..............\n");
