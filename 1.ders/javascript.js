function myFunction3(){
    document.getElementById('demo2').innerHTML='External script çalıştı'
    document.getElementById('demo2').style.backgroundColor='blue'
}

// var x = 5 ;
// var y = 6 ;
// var z = x+y;
// console.log('z değeri=' ,z);

// const değişmeyen ifadeler için kullanılır.
// ilk değer ataması zorunludur.
// const price1=5;
// const price2=6;
// let total=price1+price2;
// total=15;
// console.log(total);

// = işareti atama işaretidir biz kıyaslama için == işareti kullanıyoruz.
// x=y; // y değişkeninin değeri x e atanır
// x==y; // x y'ye eşitse şunu yap 

// const pi=3.14; //  number
// let pereson='mustafa'  // string 

// let x;
// x=6;
// console.log(x);
// x=0;
// x='mustafa';
// console.log(x);

// let person="Ahmet" ,carName="volvo",price=3000;
// console.log("person",person,"carName",carName,"price",price)

let a=2; //yeniden tanımlanamaz

a=3;
console.log(a);

var a2;
var a2; // yeniden tanımlanabilir

// let blok kapsamına sahip
{
let b1=3;
console.log(b1);
}

let b1=5;
console.log(b1);

{
    var c1=5;
}
console.log(c1);
c1=7;
console.log(c1);

// array(dizi),object(obje),function da const kullanılır.

const cars=['Fiat','Volvo','BMW']
console.log(cars);
console.log(cars[0])
cars[0]='Toyota'
cars.push('Range Rover')
console.log(cars);

const car={
    type:'Fiat', model:'500',color:'white',price:1500
}
console.log(car)
car.model='600'
console.log(car);

//operators

// let x=3;
// let y=5;
// let z=x*y;
// console.log(z)
// let x=5;
// let y=2;
// let z=x%y; // bölündüğünde kalan sayıyı gösterir
// console.log(z)

// let x=5**2; // 5üzeri 2
// console.log(x);

// let x=(100+50)*3;
// console.log(x);

// let x=5;
// x=x+2;
// console.log(x);
// x += 3;// x=x+3;
// console.log(x);
// x++; // x=x+1
// x--; // x=x-1
// console.log(x);

// let text1='Mustafa'
// let text2='samet'
// let text3=text1+' '+text2+ 5+10
// console.log(text3);

// let text1='ne güzel'
// text1 +='bir gün'
// console.log(text1)

// let x=5+3+'5';
// console.log(x);

// let y='5'+3+5;
// console.log(y)

//data types

let lenght=16 //numbers

let color='red' //string

//boolean

// let x=true;
// let y=false;

//object
// const person={firstName:'samet', lastName:'cetin'};

//array
// const cars=['opel','volvo','toyota','4'];

//date
// const date=new Date("2023-03-25");
// console.log(date);

// let y=123e3;
// console.log(y)
// let z=123-2;
// console.log(z)

let x=3;
let y=3;
let z=5;
console.log(x==y);
console.log(x==z);

console.log(typeof x);
console.log(typeof 'mustafa');



