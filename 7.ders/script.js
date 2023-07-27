//!Js async await


// function myFunction(){
//     return Promise.resolve("hello")
// }
// async function myFunction(){
//     return "hello"
// }

// myFunction().then(function(value){console.log(value + "second hello")});

// async function myDisplay(){
//     let myPromise =new Promise(function (resolve, reject){
//         setTimeout(function(){resolve("ı love you")},3000)
//     })
//     console.log(await myPromise);
// }
// myDisplay();


// function resolveAfter25Seconds(x){
//     return new Promise((resolve)=>{ setTimeout(()=>{resolve(x); },3000)})
// }
// async function f1(){
//     const x=await resolveAfter25Seconds(10);
//     console.log(x);
// }
// f1();

// async function test(data){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(data){
//                 resolve("Bu bir değerdir")
//             }
//             else{
//                 reject("Bu bir değer değildir")
//             }
//         },5000)
//     })
//     console.log("Promise bekleniyor")
//     let response=await promise
//     console.log("promise bitti")
//     return response
// }
// test("değer").then(resolve=>console.log(resolve),reject=>console.log(reject));

// async function testData(data){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data === "String"){
//                 resolve(data)
//             }
//             else{
//                 reject(new Error("Lütfen string bir değer girin"))
//             }
//         },5000)
//     }
//     )
//     const response=await promise;
//     return response;
// }
// testData(24).then(data=>console.log(data))
// .catch(err=> console.log(err))

//! dom (document object model) 

// document.getElementById("demo").İnnerHTML= "hello World"

// document.getElementsByTagName("p")
// document.getElementsByClassName("intro")
// document.querySelectorAll("p.intro")
// document.forms["frm1"]   //?name=frm1 olan formu olur

document.getElementById("p1").innerHTML="New Text"

// document.getElementById("image").src="smiley.gif"
// document.getElementById("image").width="300"
// document.getElementById("image").height="300"

function validateForm(){
    let x=document.forms["myForm"]["fname"].value;
    console.log(isNaN(x));
    if(!isNaN(x)){
        alert("isim yazmak zorunludur");
        return false;
    }
    alert("giriş başarılı")
}

// document.getElementById("p2").style.color="blue";
// document.getElementById("p2").style.backgroundColor= "yellow"


function changeColor(){
   document.getElementById("id1").style.color="red";
}
function hide(){
   document.getElementById("p3").style.visibility="hidden";
}
function show(){
   document.getElementById("p3").style.visibility="visible";
}

function upperCase(){
    const x=document.getElementById("fname1");
   
    x.value=x.value.toUpperCase();
}


function mOver(obj){
    obj.innerHTML="Thank you"
}
function mOut(obj){
    obj.innerHTML="Mouse over me"
}
// document.getElementById("myBtn").addEventListener("click",function(){
//     alert("hello world")
// })

// var x=document.getElementById("myBtn");
// x.addEventListener("mouseover",myFunction);
// x.addEventListener("click",mySecondFunction);
// x.addEventListener("mouseout",myThirdFunction);

// function myFunction(){
//     document.getElementById("demo").
//     innerHTML+="Moused over!<br>"
// }
// function mySecondFunction(){
//     document.getElementById("demo").
//     innerHTML+="Clicked!<br>"
// }
// function myThirdFunction(){
//     document.getElementById("demo").
//     innerHTML+="Moused out!<br>"
// }

document.getElementById("myp1").addEventListener("click",function(){
    alert("myp1")
},false)
document.getElementById("myDiv1").addEventListener("click",function(){
    alert("myDiv1")
},false)
document.getElementById("myp2").addEventListener("click",function(){
    alert("myp2")
},true)
document.getElementById("myDiv2").addEventListener("click",function(){
    alert("myDiv2")
},true)


