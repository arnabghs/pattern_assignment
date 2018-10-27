const generateLine = function(character,width) {
  let result="";
  for (let chars=0; chars <width; chars++){
    result = result + character;
  }
  return result;
}

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
    (lineNumber%2 == 0) && (symbol = "*");
    result += generateLine(symbol,width);
  }
  return result;
}

const generateRectangle = function (type,width,height){
  let rectangleCreator = { filled : makeFilledRectangle(width,height),
    hollow : makeHollowRectangle(width,height),
    alternating : makeAltRectangle(width,height)}
  return rectangleCreator[type];
}

//................ Triangle ..................//

const leftTriangle = function(height){
  let result = "";
  let delimeter = "";
  for (line=1;line<=height;line++) {
    result = result + delimeter;
    delimeter = "\n";
    result += generateLine("*",line);
  }
  return result;
}

const rightTriangle = function(height){
  let result = "";
  let delimeter = "";
  for (line = 1; line <= height; line++){
    result = result + delimeter;
    delimeter = "\n";
    let limitForSpace = (height-line);
    let limitForChars = height - limitForSpace;
    result += generateLine(" ",limitForSpace);
    result += generateLine("*",limitForChars);
    }
  return result;
}

const generateTriangle = function (type,height){
  let triangleCreator = { right : rightTriangle(height),
    left : leftTriangle(height)};
  return triangleCreator[type];
}

//.............. Diamond ...................//


const makeUpperPart = function (linesUpper,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = linesUpper - 1;
  let widthOfHollow = 0;
  let firstCharacter = "*";
  let lastCharacter = ""
  while (index < linesUpper){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace)+firstCharacter;
    result += generateLine(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace -= 1;
    firstCharacter = firstchar;
    lastCharacter = lastchar;
    widthOfHollow += 2;
    index++;
    if (index == 1){
      widthOfHollow = 1;
    }
    if (index == linesUpper-1){
      firstCharacter = "*";
      lastCharacter = "*"
    }
  }
  return result;
}

const makeLowerPart = function (linesLower,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = 1;
  let widthOfHollow = 2*linesLower - 3;
  let firstCharacter = firstchar;
  let lastCharacter = lastchar;
  while (index < linesLower){
    if (index == linesLower-1){
      firstCharacter = "*";
      lastCharacter = "";
      widthOfHollow = 0;
    }
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace)+firstCharacter;
    result += generateLine(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace += 1;
    widthOfHollow -= 2;
    index++;
  }
  return result;
}

const makeFilledDiamond = function (height) {
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"*","*","*");
  result +="\n"+makeLowerPart(linesLower,"*","*","*");
  return result;
}

const makeHollowDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"*","*"," ");
  result +="\n"+makeLowerPart(linesLower,"*","*"," ");
  return result;
}

const makeAngledDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"\/","\\"," ");
  result +="\n"+makeLowerPart(linesLower,"\\","\/"," ");
  return result;
}

const generateDiamond = function(type,height){
  let diamondCreator = {filled : makeFilledDiamond(height),
    hollow : makeHollowDiamond(height),
    angled : makeAngledDiamond(height)};
  return diamondCreator[type];
}


module.exports = { generateRectangle,  generateTriangle, generateDiamond };
