//non-primitive data types or object ref...
//let languages = ['java','nodejs','python',
//'ruby',undefined,null,
//true];

//document.write(languages.length);
//var array= ['java','python','nodejs'];
//var array2= new Array('nodejs','python','angular','expressjs');
//var array3 = Array.of('java','python','nodejs');
//var array4 = Array(7);
//console.log( typeof array, typeof array2,typeof array3,typeof array4);
//console.log(Array.isArray(array));
//console.log(Array.isArray(array2));
//console.log(Array.isArray(array3));
//console.log(Array.isArray(array4));
var str='hello node js and java script';

var strwithArray=str.split('  ');//es5
console.log(strwithArray);
//es6
var es6way=array.from(str);
console.log(es6way);

let[...spread]=str;
console.log(spread);


let [...spread]= str;
console.log(shashi.join(''));