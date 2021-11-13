function borderchange(){

var border = document.getElementById("paragraph1");
var bluevalue = document.getElementById("bluevalue");
var greenvalue = document.getElementById("greenvalue");
var redvalue = document.getElementById("redvalue");
var widthvalue = document.getElementById("widthvalue");
console.log(bluevalue.value);
console.log(greenvalue.value);
console.log(redvalue.value);
console.log(widthvalue.value);
if (bluevalue == null){
  bluevalue = 255;
}
if (greenvalue == null){
  greenvalue = 255;
}
if (redvalue == null){
  redvalue = 255;
}
if (widthvalue == null){
  widthvalue = 1;
}
console.log(widthvalue.value);
border.style.borderWidth = widthvalue.value;
border.style.borderColor = 'rgb('+redvalue.value+','+greenvalue.value+','+bluevalue.value+')';
return;
}
