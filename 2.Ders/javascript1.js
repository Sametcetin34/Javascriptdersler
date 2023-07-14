//js function

// function myFunction(parameter1,parameter2..){
//     //kodların çaılıştığı yer
// }

// myFunction(argument1,argument2)

// let b=function d() {}

// function carpma(p1,p2){
//     return p1*p2;
// }

// console.log(carpma(2,4))

// let sonuc=carpma(3,4)
// console.log(sonuc)
// console.log(carpma(8,9))

// function toCelcius(fahrenheit){
//     return (5/9)*(fahrenheit-32)
// }

// console.log(toCelcius(64))
// console.log("Temperature is",toCelcius(64),"celcius")

// function myFunction(){
//     let carName="volvo"
//     console.log(carName)
// }

// myFunction()

//js object

// const person={
//     firstName:"Mustafa",
//     lastName:"Onal",
//     age:50,
//     eyeColor:"blue",
//     fullname:function myFunction(){
//         return this.firstName+" "+this.lastName
//     }
// }

// console.log(person.firstName)
// console.log(person["age"])
// console.log(person.fullname())

//fonksiyonu objede tanımlama şekilleri
//fullName:function()
//myFunction()

// let x= new Date();
// let a=new Number(15);

// console.log(typeof a)
// console.log(a)

//js string

//escape character
// let text="onun adına \"ahmet\" denirdi"
// console.log(text)
// let text2="tab boşluk bırakmak için \t işareti kullanılabilir.Eğer alt satıra geçeceksem \n işareti kullanılır"
// console.log(text2)

//string methods

// let text="asdjfa sıkjdfaj"
// let lenght=text.length
// console.log(lenght)

// slice (start position, end position -end değeri dahil değil-) slice (7,10)
//substring(start,end) end değeri negatif almaz 0 kabul eder
//substr(start,lenght)

// let text="Apple, Banana, kiwi"
// let part=text.slice(4,13)
// console.log(part)
// let part2=text.slice(7)
// console.log(part2)
// let part3=text.slice(-3)
// console.log(part3)
// let part4=text.slice(-8,-2)
// console.log(part4)
// let part5 = text.substr(7,5)
// console.log(part5)
// let part6 = text.substring(7,5)
// console.log(part6)
// let part7=text.substring(4,13)
// console.log(part7)
// let part8=text.substring(7)
// console.log(part8)

// let part9=text.slice(7,-1)
// console.log(part9)
// let part10 = text.substring(7,-1)
// console.log(part10)

// let text="Seni seviyorum seviyorum"
// let newText=text.replace("seviyorum","sevmiyorum")
// console.log(newText)

// let text="Seni seviyorum"
// let newText= text.replace(/SEVIYORUM/i,"sevmiyorum")
// console.log(newText)

// let text="Seni seviyorum seviyorum"
// let newText= text.replace(/seviyorum/gi,"sevmiyorum")
// console.log(newText)

// let text1="Hello World!"
// let text2=text1.toUpperCase();
// console.log(text2)

// let text3=text1.toLowerCase();
// console.log(text3)

// let text1="hello"
// let text2="world"
// let text3="!"
// let text4=text1.concat(" ",text2," ",text3)
// console.log(text4)

// let text1="     Hello World       "
// console.log(text1)
// let text2=text1.trimStart();
// let text3=text1.trimEnd();
// let text4=text1.trim();
// console.log("-",text2,"-",text3,"-",text4,"-")

// let text="567"
// let withPadStart=text.padStart(7,"0")
// console.log(withPadStart)
// let withPadeEnd= withPadStart.padEnd(10,"x")
// console.log(withPadeEnd)

// let number = 5
// let text2 = number.toString()
// console.log(text2.padStart(3,"0"))

// let text="HELLO WORLD!"
// let charAT = text.charAt(4)
// console.log(charAT)
// let text2= text[2]
// console.log(text2)

// let text="elma,şeftali,üzüm"
// let splitText=text.split(",")  //dizi oluşturur
// console.log(splitText[0])


// let text="Please locate where 'locate' occurs!"
// let indexText=text.indexOf("locate")
// console.log(indexText)
// let indexText2=text.lastIndexOf("locate")
// console.log(indexText2)
// let indexText3=text.indexOf("locate",15)
// console.log(indexText3)
// let indexText4=text.lastIndexOf("locate",15)
// console.log(indexText4)


// let text="Please locate where 'locate' occurs!"
// let searchText=text.search("locate")
// console.log(searchText)

//i ve g flaglerini yalnızca search de kullanabiliriz
//fakat indexof da start position var
// let text="Please locate where 'locate' occurs!"
// let searchText=text.search(/locate/i)
// console.log(searchText)

// let text="The rain in SPAIN stays mainly in the plain"
// let textMatch=text.match(/ain/gi)
// console.log(textMatch.length)

// let text="Hello world, welcome to the universe"
// let textIncludes= text.includes("world")
// console.log(textIncludes)


// let text="Hello world, welcome to the universe"
// let textStartWith=text.startsWith("Hello")
// console.log(textStartWith)

// let textEndsWith=text.endsWith("world",12)
// console.log(textEndsWith)

//js template literals

// let text = `mustafa 
// selman's 
// "house"`
// //multiline string

// console.log(text)

// let firstName = "Mustafa"
// let lastName = "Onal"
// let text2 = `Welcome ${firstName + lastName}, ${lastName}!`
// console.log(text2)

//js numbers

// let x = 3.14 
// let y = 123e5

// let x = "100"
// let y = "0"
// console.log(x/y)

let x = 10
let y = x.toString()
let z = Number(y)
console.log(z)

console.log(Number(true))
console.log(Number(false))
console.log(Number("  0010    "))
console.log(Number("   10.30  "))
console.log(Number("10,30"))
console.log(Number("10 30"))

console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("0010"))
console.log(parseInt("10,33"))