function myname(){
    console.log("ayush");

}
myname();

function sum(a,b){
    console.log(a+b);
    return a+b;

}
sum(2,3);
a=10,b=15;
sum(a,b);

function sum2(a,b){
    return a+b;
}
x=console.log(sum2(10,10))

function sum3(a=10,b=20){
    return a+b
}
y=console.log(sum3(5))

const sayhii=()=> {
    console.log("GARV");
}
sayhii()  
const sum4=(a,b)=> a+b;
console.log(sum4(6,6))

//if we use curli braces then return keyword should be used
// stud.greeting=()=>log("hello")
// stud.greeting
const sum5=(...num)=>{
       console.log(num);
}
sum5(1,2,3,4,5,6,7,8,9,10);
// immediately invoked function expression (IIFE)
(
    (uname)=>{
        console.log("${uname} is logged in")
    }
)("john");