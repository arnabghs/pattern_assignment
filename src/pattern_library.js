const patternUtil = require ('./pattern_util.js');
const { generateLine, makeUpperPart, makeLowerPart } = patternUtil;


//.............. Rectangle ...................//


const makeFilledRectangle = function (width,height){
  let result = "";
  let delimeter = "";
  for (lineNumber=0;lineNumber <height; lineNumber++){
    result = result + delimeter;
    result += generateLine("*",width);
    delimeter = "\n";
  }
  return result;
}

const makeHollowRectangle = function (width,height){
  let result = "";
  result+=generateLine("*",width);
  let middle = generateLine(" ",width-2);
  for (lineNumber=0;lineNumber<height-2; lineNumber++){
    result = result + "\n" + "*" + middle + "*";
  }
  if ( height != 1){
    result += "\n" + generateLine("*",width);
  }
  return result;
}

const makeAltRectangle = function (width,height){
  let result = "";
  let delimeter = "";
  for(lineNumber = 0; lineNumber<height; lineNumber++){
    result = result + delimeter;
    delimeter = "\n";
    let symbol = "-";
    if(lineNumber%2 == 0) symbol = "*";
    result += generateLine(symbol,width);
  }
  return result;
}

const generateRectangle = function (userInputs){
  let {pattern, height, width} = userInputs;
  let rectangleCreator = { filled : makeFilledRectangle(width,height),
    hollow : makeHollowRectangle(width,height),
    alternating : makeAltRectangle(width,height)}
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
    result += generateLine(symbol,limitForSpace);
    result += generateLine("*",line);
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
