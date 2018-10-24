let kind = process.argv[2];
let height = +process.argv[3];

const generateLine = function (character,width){
  let result = "";
  for (chars=1;chars<=width;chars++){
      result = result + character;
  }
  return result;
}


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

if (kind == "left") {
  let ans = leftTriangle(height);
  console.log(ans);
}
if (kind == "right"){
  let ans = rightTriangle(height);
  console.log(ans);
}
