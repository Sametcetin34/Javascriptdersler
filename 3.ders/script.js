//let,const,var(başlıklar)
// let a=3;(number)
// let b="mustafa"(string)
// let c=[1,2,3,4,5](array)
// let d={ad:"mustafa" ,soyad:"onal"}

// const cars=["volvo","BMW",3,{ad:"Mustafa",soyad:"onal"}]
// console.log(cars);
// console.log(cars[1]);
// console.log(cars[3].ad);
// console.log(cars[3]["ad"]);

// const fruit=["elma","portakal","karpuz"]
// let deger=fruit.toString()
// console.log(fruit.toString())
// console.log(deger[0]);

// const fruit=["elma","portakal","karpuz"]
// console.log(fruit.join(" - "))

// const fruit=["elma","portakal","karpuz"]
// const value=fruit.pop()   //!sondaki elemanı çıkarır o değeri atar
// console.log(fruit,value)

// const fruit=["elma","portakal","karpuz"]
// const value=fruit.push("kiwi") 
// console.log(fruit,value)  //!sona kiwi ekler ve dizi sayısını atar


// const fruit=["elma","portakal","karpuz"]
// const value=fruit.shift()
// console.log(fruit,value)  //!baştaki elemanı çıkarır ve o çıkardığı elamanı atar

// const fruit=["elma","portakal","karpuz"]
// const value=fruit.unshift("kiwi")
// console.log(fruit,value)   //!başa kiwiyi atar ve değer olarak dizi uzunluğunu atar
// console.log(fruit[fruit.length-1]);
// const fruit2=["nar","portakal"]
// const total=fruit.concat(fruit2,"ekleme")
// console.log(total)

// const fruit=["elma","portakal","karpuz","mango"]
// fruit.splice(1,2,"limon","nar")  //!1:1.elemandan sonra ekler 2:ekledikten sonraki 1 elemanı siler
// console.log(fruit);

// const fruit=["elma","portakal","karpuz","mango"]
// const total=fruit.slice(3) //!3.dizi elemanını verir
// const total=fruit.slice(1,3) //!1 ile 3 arasınmdaki elemanları gösterir 3 dahil değil
// console.log(total)

// const fruit=["banana","orrange","apple","mango"];
// console.log(fruit.sort()) //!Alfabetik sıraya koyar
// console.log(fruit.reverse()) //!Alfabetik sırasına göre tersten


// const numbers=[40,100,1,5,25,10]
// console.log(numbers.sort())  //!ilk rakamlarına göre sıralar
// console.log(numbers.reverse()) //!ilk rakamlar tersten

// console.log(numbers.sort(function(a,b){return a-b}))
// console.log(numbers.sort(function(a,b){return b-a}))

// console.log(Math.random())
// const numbers=[40,100,1,5,25,10]
// console.log(numbers.sort(function(){return 0.5-Math.random()}))


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Fiat", year: 2001 },
    { type: "BMW", year: 2011 }
]
// console.log(cars);

// console.log(cars.sort(function(a,b){return a.year-b.year}))

// console.log(cars.sort(function(a,b){
//     console.log(a)
//     console.log(b)
//     return a.year-b.year}))


// console.log(cars.sort(function (a, b) {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) { return -1 }
//     if (x > y) { return 1 }
// }
// ))

// const numbers=[45,4,9,16]
// numbers.forEach(
//     function myFunction(value,index,array){
//         console.log(`value değeri:${value}`)
//         console.log(`index değeri:${index}`)
//         console.log(`array değeri:${array}`)
//     }
// )

// const numbers1=[45,4,9,16,25];
// const numbers2=numbers1.map(myFunction)
// function myFunction(value,index,array){
// return value*2
// }
// console.log(numbers2)


// const numbers=[45,4,9,16,25];
// const over18=numbers.filter(myFunction)
// function myFunction(value){
//     return value > 18
// }
// console.log(over18)

// const fruits=["Apple","Orange","Kiwi","Mango"]
// let position= fruits.indexOf("Apple")+1
// console.log(position)

// const numbers=[4,9,16,25,29]
// let first=numbers.find(myFunction)
// function myFunction(value,index,array){
//     return value >18
// }
// console.log(first)

// const numbers=[4,9,16,25,29]
// let first=numbers.findIndex(myFunction)
// function myFunction(value,index,array){
//     return value >18
// }
// console.log(first)

// const array = Array.from("Tüm string diziye dönüşecek")
// console.log(array)

// const deger="Tüm string diziye dönüşecek"
// let deger2=deger.split()
// console.log(deger2)
// const deger="Tüm string diziye dönüşecek"
// let deger2=deger.split("")
// console.log(deger2)
// const deger="Tüm string diziye dönüşecek"
// let deger2=deger.split(" ")
// console.log(deger2)


// const fruits=["Apple","Orange","Kiwi","Mango"]
// console.log(fruits.includes("Mango"))