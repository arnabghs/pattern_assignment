let pattern = process.argv[2];
let width = + process.argv[3];
let height = +process.argv[4];

const generateLine = function(character,width) {
  let result="";
  for (let chars=0; chars <width; chars++){
    result = result + character;
  }
  return result;
}

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

const makeEmptyRectangle = function (width,height){
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
if (pattern == "filled") {
  let rectangleToPrint = makeFilledRectangle(width,height);
  console.log(rectangleToPrint);
}
if (pattern == "empty") {
  let rectangleToPrint = makeEmptyRectangle(width,height);
  console.log(rectangleToPrint);
}
if (pattern == "alternating") {
  let rectangleToPrint = makeAltRectangle(width,height);
  console.log(rectangleToPrint);
}
