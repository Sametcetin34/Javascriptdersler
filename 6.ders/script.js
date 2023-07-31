//!-----------json(Javascript object notation)------------------

// let text='{"FirstName":"Ahmet"}'
// console.log(typeof text);
// console.log(text);

// let text2='{"employees":[{"firstName":"Ali","lastName":"Bay"}]}';
// console.log(text2);
// console.log(JSON.parse(text));
// console.log(JSON.parse(text2));

// let object={
//     firstName:"Ali",
//     lastName:"Veli"
// }
// console.log(object);
// console.log(JSON.stringify(object));

//?stringfy ifadesi json objesine dönüştürür,tipi string olsada dönüşümü jsona özgüdür. Parse komutu ise jason formatını normal objeye dönüştürür.


//!----------------object details------------------------------

// const person={
//     firstName:"Mustafa",
//     lastName:"Onal",
//     age:30,
//     eyeColor:"brown"
// }

// const myArray=Object.values(person);
// console.log(myArray); 

// const myArray2=Object.keys(person);
// console.log(myArray2); 

// const myArray3=Object.entries(person);
// console.log(myArray3); 

// console.log(myArray2[0]);
// console.log(myArray3[0][0]); 

// delete person.age;
// console.log(person);


//!-------------------Function Details---------------------------

// function myFunction(x,y) {
//     console.log(y)
//     if ( y === undefined) {
//         y = 2 ;
//     }
//     return x+y
// }
// console.log(myFunction(4))

// function myFunction(x=3, y=2){
//     return x+y
// }
// console.log(myFunction(4,7));
// console.log(myFunction(4));
// console.log(myFunction());

// function sum(...args) {
//     console.log(args);
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg
//     }
//     return sum;
// }
// let x = sum(1,2,3,4,5)
// console.log(x);


// function self1(){
//     console.log("self1 work")
// }
// self1();

// (function self2(){ console.log("self2 work") })();  

//TODO: Direk çağırıyor fonksiyonu-(self-invoke)


//! -------------class detail-----------------------------

// class Car{

//     constructor(name){
//         this.name=name
//     }
//     hello(){
//        return "hello!"
//     }
//     static hello2(){
//         return "static hello"
//     }
// }

// let myCar=new Car("Ford");

// console.log(myCar);
// console.log(myCar.hello());
// console.log(Car.hello2());



// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     showInfos(){
//         console.log("isim:" + this.name+ "yaş:" + this.age);
//     }
// }

// class Employee extends Person{
//     constructor(name,age,salary){
//         super(name,age)
//         this.salary=salary;

//     }
//     showInfos(){
//         console.log("isim:" + this.name+ "yaş:" + this.age+"Maaş:"+ this.salary);
//     }
//     raiseSalary(amount){
//         this.salary+=amount;
//     }
// }
// const per=new Person("Enes",32)
// const emp=new Employee("Mustafa",30,4000);
// console.log(emp);
// console.log(per);


// emp.raiseSalary(500)
// emp.showInfos();


//! ----------------js callbacks----------------------------

// function myDisplayer(message){
//     console.log(message);
// }

// function myFirst(){
//     myDisplayer("hello");

// }
// function mySecond(){
//     myDisplayer("goodbye");
// }
// mySecond();
// myFirst();


// function myDisplayer(some){
//     console.log(some);
// }

// function myCalculater(mum1,mum2){
//     let sum=mum1+mum2;
//     myDisplayer(sum);
// }
// myCalculater(5,4);


// function myDisplayer(some){
// console.log(some);
// }
// function myCalculater(mum1,mum2){

//     let sum=mum1+mum2;
//     return sum;
// }

// let result=myCalculater(3,4);
// myDisplayer(result);


// function myDisplayer(some){
//     console.log(some);
// }
// function myCalculater(mum1,mum2,myCallback = () => {}){
// let sum=mum1+mum2;
// console.log("Calculater fonksiyonu çalıştı")
// myCallback(sum);
// }

// myCalculater(2,3);

//!---------settime,setinterval-----------------

// function myFunction(){
//     console.log("Function running..")
// }
// setTimeout(myFunction, 3000);
 
//? 3 saniye sonra fonksiyonu çalıştırır.

// setInterval(myFunction,3000);  

//? 3 saniye aralıklarla fonksiyonu çalıştırır.

//!-------------Promise objesi-------------------

// let myPromise=new Promise(function(myResolve,myReject){
//     myResolve();    //?başarılı olduğunda 
//     myReject();     //? Başarısız olduğunda
// })
// myPromise.then(
//     function(value){ kod başarılı olduğunda},
//     function(error){kod başarısız olduğunda}
// )


function myDisplayer(some){
    console.log(some)
}
// let myPromise=new Promise(function(myResolve,myReject){
//     let x=1;
//     if(x==0){
//         myResolve("ok")
//     }
//     else{
//         myReject("error")
//     }
// })

// myPromise.then(
//     function(value){ myDisplayer(value)}, 

//     function(error){ myDisplayer(error)}
//               )

// myPromise.then(function(value){myDisplayer(value)})
// .catch(function(error){myDisplayer(error)})
// .finally(console.log("İşlem tamamlandı."))






function myPromise(){
    let x=3;
    if(x==0){
        return Promise.resolve("ok")}
        else {
        return Promise.reject("error")}
    
}


myPromise().then(function(value){
    myDisplayer(value);
})
.catch(function(error){ myDisplayer(error)})
.finally(console.log("İşlem tamamlandı"))

