// Pass by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);



//pass by reference
function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);
    
    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
  }
  
  value = { x: 7 };
  changeObject(value); // objValue = value
  console.log("after changeObject, orig value:");
  console.log(value);
  