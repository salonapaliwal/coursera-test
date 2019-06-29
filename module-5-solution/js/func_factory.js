function makeMultiplier(multiplier) {
    var MyFunc=function(x) {
        return multiplier*x;
    };
    return MyFunc;
}
var multiplyby3 =makeMultiplier(3);
console.log(multiplyby3(10));

var DoubleAll = makeMultiplier(2);
console.log(DoubleAll(100));

//passing function as arguements
function doOperation(x,operation) {
    return operation(x);
};

var result=doOperation(5,multiplyby3);
console.log(result);

result=doOperation(3,DoubleAll);
console.log(result);