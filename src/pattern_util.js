const repeatCharacter = function(character,width) {
  return new Array(width).fill(character).join("");
}

const starLineGenetator = function(width){
  return repeatCharacter("*",width);
}

const hollowLineGenetator = function(width){
  return repeatCharacter(" ",width);
}

const dashLineGenerator = function(width){
  return repeatCharacter("-",width);
}

const takeInput = function(inputArray){
  let argsArray = inputArray.slice(2);
  let pattern = argsArray[0];
  let height = +argsArray[1];
  let width = +argsArray[2];
  if ( argsArray[2] == undefined) width = height;
  return {pattern : pattern, height : height, width : width} 
}

const makeUpperPart = function (heightOfHalves,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = heightOfHalves;
  let widthOfHollow = 0;
  let firstCharacter = "*";
  let lastCharacter = ""
  while (index < heightOfHalves){
    result += delimeter;
    delimeter = "\n";
    result += repeatCharacter(" ",widthOfSpace)+firstCharacter;
    result += repeatCharacter(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace -= 1;
    firstCharacter = firstchar;
    lastCharacter = lastchar;
    widthOfHollow += 2;
    index++;
    if (index == 1){
      widthOfHollow = 1;
    }
  }
  return result;
}

const makeMiddleLine = function(pattern,width){
  let createLine = (pattern != "filled") ? hollowLineGenetator : starLineGenetator;
  return "*"+createLine(width-2)+"*";
}

const makeLowerPart = function (heightOfHalves,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = 1;
  let widthOfHollow = 2*heightOfHalves - 3;
  let firstCharacter = firstchar;
  let lastCharacter = lastchar;
  while (index < heightOfHalves){
    if (index == heightOfHalves-1){
      firstCharacter = "*";
      lastCharacter = "";
      widthOfHollow = 0;
    }
    result += delimeter;
    delimeter = "\n";
    result += repeatCharacter(" ",widthOfSpace)+firstCharacter;
    result += repeatCharacter(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace += 1;
    widthOfHollow -= 2;
    index++;
  }
  return result;
}


module.exports = { repeatCharacter, takeInput, makeUpperPart, makeLowerPart, starLineGenetator, hollowLineGenetator, dashLineGenerator, makeMiddleLine };
