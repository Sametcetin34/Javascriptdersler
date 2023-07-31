// JS Dates

const myDate=new Date();
console.log(myDate);
//getfullyear
console.log(myDate.getFullYear());
//getmonth
console.log(myDate.getMonth());
//getdate
console.log(myDate.getDate());
//saat dakika saniye
console.log(`Şu an saat ${myDate.getHours()}:${myDate.getSeconds()}`);

//Js Math
console.log(Math.round(4.6)); //En yakın tamsayıya yuvarlar.
console.log(Math.ceil(4.3));  //Bir üst sayıya yuvarlama
console.log(Math.floor(4.9)); //Bir alt sayıya yuvarlama
console.log(Math.floor(-1.6));

console.log(Math.trunc(4.9675464)); //Tam sayıyı alır

console.log(Math.pow(8,2)); //Karesini alma

console.log(Math.sqrt(64)); //Karekökü alma

console.log(Math.min(0,150,30,-20)); //En küçük sayıyı verir

console.log(Math.max(0,150,30,-20)); //En büyük sayıyı bulur

Math.random; //Rastgele sayı üretir

// js BOOLEAN
console.log(10>9);
//Değeri olan her şey boolean cinsinde true olur
console.log(Boolean(-1));

// let x=0;
// console.log(Boolean(x));
// let y=new Boolean(1);
// console.log(y);

let z="";
console.log(Boolean(z));

let q;
console.log("q değeri:" ,q);
console.log(Boolean(q));

//JS Comparison (Karşılaştırma)

let k=8;
console.log(k==8);

let b="34";
console.log(b==34); // Tipleri dikkate almaz dataya bakar

console.log(b===34); // Tipi önemlidir aynı olması gerekli

let v="88";
console.log(v!=88);
console.log(v!=83);
console.log(v!==88);

let a= 5;
let m=10;
console.log(a>m);
console.log(a<=m);

// && (and-ve işareti -> ikiside doğru ise doğru)
// || (or-Veya işareti ->ikisinden biri doğru ise doğru)

const x=8;
const y=10;

console.log(x>5 && y<12); //True

console.log(x>5 && y<9); //False

console.log(x>5 || y<9); //True


console.log(!(x>5) || y<9); //False

//Ternary operator ?
const yas=12;
const oyVerme=(yas<18) ? " Çok genç oy vermez": "oy vermek için yaşı yeterli"
console.log(oyVerme);

//nullish operator ??

let name="samet";
let name2; //undefined
let name3=null;
let name4=0;
let name5="";
let name6=NaN;
let text="isim yok";

// İlk değer null yada undefined değilse ilk değeri yazar aksi halde ikinci değeri yazar.
console.log("----------");
console.log(name  ?? text);
console.log(name2 ?? text);
console.log(name3 ?? text);
console.log(name4 ?? text);
console.log(name5 ?? text);
console.log(name6 ?? text);
console.log("----------");

// ?? den farkı 0 "" veya NaN gelirse ikinci değeri yazar"
console.log(name  || text);
console.log(name2 || text);
console.log(name3 || text);
console.log(name4 || text);
console.log(name5 || text);
console.log(name6 || text);
console.log("----------");

//  || operatörünün tersine çalışır.Solda geçerli bir değer görürse sağdakini çalıştırır.


console.log(name  && text);
console.log(name2 && text);
console.log(name3 && text);
console.log(name4 && text);
console.log(name5 && text);
console.log(name6 && text);
console.log("----------");

console.log("ali"/"ahmet"); //sonucu NaN numara olmayan tiplerle işlem yapılması

//Undefined ile null arasındaki fark ? ikisi arasındaki kullanım farkı

// Koşullu ifadeler- conditional statements
// if,else, else if, switch

// let hour=8;

// if (hour<18){
//     console.log("iyi günler")
// }
// if(hour>=8){
//     console.log("İyi geceler")
// }


// if(hour<8){
//     console.log("iyi günler")


// }

// else{
//     console.log("iyi sabahlar")
// }

let hour=7;
let izinVer=false;
if(hour<10){
    console.log("İyi günler")
 
}
else if(hour<22){
    console.log("İyi akşamlar")
}
else{console.log("İyi geceler")}

if(izinVer && (hour<8)){
    console.log("herkese günaydın")
}

//switch use strict comparison (===)
//getDay haftanın günlerini 0-6 arasında veriyor.(0:PAzar ----> 6:Cumartesi)

let day;
switch(new Date().getDay()){
case 0:
    day="pazar";
    break;
case 1:
    day="Pazartesi";
    break;
case 2:
    day="Salı";
    break;
case 3:
    day="Çarşamba";
    break;
case 4:
    day="Perşembe";
    break;
case 5:
    day="Cuma";
    break;
case 6:
    day="Cumartesi";
    break;
default:
    day="hatalı veri";

  
}
console.log(day);


























