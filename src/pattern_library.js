const patternUtil = require ('./pattern_util.js');
const { repeatCharacter, makeUpperPart, makeLowerPart, starLineGenetator, hollowLineGenetator, dashLineGenerator, makeMiddleLine } = patternUtil;


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
  let doubleLineUnit = starLineGenetator(width)+"\n"+dashLineGenerator(width);
  let outputArray = new Array(Math.floor(height/2)).fill(doubleLineUnit);
  if (height%2 != 0) outputArray.push(starLineGenetator(width));
  return outputArray.join("\n");
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
  if(height%2 == 0) height-- ;
  let heightOfHalves = Math.floor(height/2);
  let result = "";
  let symbol1 = '*', symbol2 = '*', symbol3 = '*';
  if (pattern === 'hollow') symbol3 = ' ';
  if (pattern === 'angled') symbol1 = "/", symbol2 = "\\", symbol3 = " ";
  result += makeUpperPart(heightOfHalves,symbol1,symbol2,symbol3);
  result += "\n"+ makeMiddleLine(pattern,height);
  result +="\n"+makeLowerPart(heightOfHalves,symbol2,symbol1,symbol3);
  return result;
}

module.exports = { generateRectangle,  generateTriangle, generateDiamond };
