//let array1 = ['java', 'python'];
//let array2 = ['nodejs', 'angularjs', 'expressjs'];

 //let concatarray = array1.concat(array2 ,'shashi');
 //console.log(concatarray); //1way es5

 //let totalArray = [...array1, ...array2, 'paritoshsarangi',true]
 //04-10-2019
 /*let users = {
     name:'paritosh',
     age:20,
     company:'jspiders',
     salary:20000,
     skills:[
         'java',
         'nodejs',
         'html5',
         'js',
         'aws',
         'firebase',
         'python',
         'babel'

     ]

 };
 console.log(users['age']);
 console.log(users['company']);
 */
//creation of object in constructor way
/*let obj = new Object();
obj.name = "manu";
obj.age = 20;
obj.salary = 30000;

console.log(obj);
*/
/*
let name = "vinay";
let age = 30;
let company = "jspiders";

let usersData = {
    //key:value
    name: name,
    age:age,
    company:company,
    salary:20000
};
console.log(usersData);




let name1 = "vinay";
let age1 = 30;
let company1 = "jspiders";

let usersData1 = {
    //key:value
    name1,
    age1,
    company1,
    salary1:20000
};
console.log(usersData1);


{ 
    console.log('hello paritosh');//block of code...
}// not object this is IIFE in es6


var obj ={
    key : value

}// this object
*/
/*
 var users = [
     {
         name:'paritosh',
         age:20,
         company:'testyantra',
         salary:20000,
         designantion:'node js developer',
         dob:'20/12/1996',
         location:'mandya',
         gender : 'male',
         photo:'C:\Users\HP\Desktop\fullstackwithjs\IMG_9359.JPG'
     },
     {
        name:'miru',
        age:20,
        company:'testyantra',
        salary:20000,
        designantion:'node js developer',
        dob:'20/12/1996',
        location:'mandya',
        gender : 'male',
        photo:'C:\Users\HP\Desktop\fullstackwithjs\IMG_9362.JPG'
    }
 ];
 console.log(users);
*/
/*
 for( let user of users){
     let output =[];
     output +=`
     ${user.name}
     ${user.age}
     ${user.company}
     ${user.designantion}
     ${user.location}
 }
*/
/*let users = {
    'user-name' :'shashi',
    for :'hey for',
    while: 'hey while',
     if : 'hey if',
}
console.log(users);
*/
/*
let users = {
    name: 'ani',
    age : 20,
    company : 'testyantra',
    salary:10000
};
console.log(users);
 let me = Object.create(users);
 me.name ='manu';
 me.age = 40;
 me.company ='Qspiders';
 me.salary = 30000;
 console.log(me);
*/

let emp={
    id :1,
    'emp-name':'manoj',
    'emp-age' : 20,
    'emp-location' :'mandya',
/*console.log(emp);
let empconvertasArray = Object.entries(emp)

empconvertasArray.forEach(element => {
    console.log(element)
});*/
/*
let checkandObject = Object.freeze(emp);
emp["emp-age"] ="shashi";
console.log(emp);
*/
alldata() {
    console.log(`${this['emp-name']}
    and ${this['emp-location']}
    ${this['emp-age']}` );
}
};
console.log(emp.alldata);


let student = {
    name: 'paritosh',
    age:24,
    salary:3000
};
let ArrayValues = Object.values(student);
let ArrayKeys =Object.keys(student);
console.log(ArrayValues);
console.log(ArrayKeys);
