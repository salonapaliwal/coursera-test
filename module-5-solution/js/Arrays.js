var array=new Array();
array[0]="Salona";
array[1]=20;
array[2]= function(name) {
    console.log("hello "+name);
};
array[3]= {course:"HTML CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3]);