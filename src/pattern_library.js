const patternUtil = require ('./pattern_util.js');
const { repeatCharacter, makeUpperPart, makeLowerPart, starLineGenetator, hollowLineGenetator } = patternUtil;


//.............. Rectangle ...................//


const makeFilledRectangle = function (width,height){
  return new Array(height).fill(starLineGenetator(width)).join("\n");
}

const makeHollowRectangle = function (width,height){
  let starEndHollowLine = "*"+hollowLineGenetator(width-2)+"*";
  let outputArray = new Array(height).fill(starEndHollowLine);
  outputArray.splice(0,1,starLineGenetator(width));
  outputArray.splice(-1,1,starLineGenetator(width));
  return outputArray.join("\n");
}

const makeAlternateRectangle = function (width,height){
  let result = "";
  let delimeter = "";
  for(lineNumber = 0; lineNumber<height; lineNumber++){
    result = result + delimeter;
    delimeter = "\n";
    let symbol = "-";
    if(lineNumber%2 == 0) symbol = "*";
    result += repeatCharacter(symbol,width);
  }
  return result;
}

const generateRectangle = function (userInputs){
  let {pattern, height, width} = userInputs;
  let rectangleCreator = { filled : makeFilledRectangle(width,height),
    hollow : makeHollowRectangle(width,height),
    alternating : makeAlternateRectangle(width,height)}
  return rectangleCreator[pattern];
}

//................ Triangle ..................//

const generateTriangle = function(userInputs){
  let {pattern, height} = userInputs;
  let result = "";
  let delimeter = "";
  for (line = 1; line <= height; line++){
    result = result + delimeter;
    delimeter = "\n";
    let limitForSpace = (height-line);
    let symbol = ' ';
    if (pattern == 'left') symbol = '';
    result += repeatCharacter(symbol,limitForSpace);
    result += repeatCharacter("*",line);
  }
  return result;
}

//.............. Diamond ...................//

const generateDiamond = function (userInputs){
  let {pattern, height} = userInputs;
  if(height%2 == 1) height++ ;
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  let symbol1 = '*', symbol2 = '*', symbol3 = '*';
  if (pattern === 'hollow') symbol3 = ' ';
  if (pattern === 'angled') symbol1 = "/", symbol2 = "\\", symbol3 = " ";
  result += makeUpperPart(linesUpper,symbol1,symbol2,symbol3);
  result +="\n"+makeLowerPart(linesLower,symbol2,symbol1,symbol3);
  return result;
}

module.exports = { generateRectangle,  generateTriangle, generateDiamond };
