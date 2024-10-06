// {
//     constructor(age,name){
//         this.age = age;
//         this.name = name;
//     }
//     class timed(){
//         const year = new Date();
//         return year.getFullYear() - this.age;
//     }
// }

//  class amf extends{
//     constructor(age, vb){
//         super(age);
//         this.vb = vb;
//     }
//     supri(){
//         return this.timed() + " years ago, "+ this.vb;
//     }
// }
 
// const dataa = new amf(2000,'Quintus');
// document.getElementById("sonizo").innerHTML = dataa.supri();

//document.write()
// function displ(z){
//     document.getElementById("sonizo").innerHTML = z;
// }

// const promi = new Promise(function(val, err){
//     let vx = 0;
//     if(vx < 10){
// val("OK");
// }else{
// err("Error");}
// });
// promi.then(
//     function(v){document.getElementById("sonizo").innerHTML = v;
//     },
//     function(e){document.getElementById("sonizo").innerHTML = e;}
// )


    const add = (a,b) => { return a+b;
    }
     console.log(add(23,56));
 

     function funClub(){
        const amatora = (a,b)=> a+b;
        console.log(amatora(2,4)); 
     }
     funClub()
     const myObj = {
      name: 'Daniel',
      age: 45,
      moreInfo: function(){
         return 'His name is '+this.name + ' with '+ this.age +'yrs ';
      }
     }

   //   document.getElementById("demos").outerHTML =  myObj.moreInfo();

  function asyncFun(str){
  return str;

  }

  function resultJ(a,b,mycall){
   const ann = a*b;
   mycall(ann);
  }
resultJ(5,8, asyncFun);

function asyncFunc(){
   setTimeout(() => {
  console.log("amateka y'u Rwanda rwacu dukunda cyane pe");
   }, 200);
}
asyncFunc();

// setInterval(myFunction, 1000);
// function myFunction(){
//    let currentDate = new Date();
//    const currHours = currentDate.getHours();
//    let currentMinutes = currentDate.getMinutes();
//    let currSec = currentDate.getSeconds();
//    console.log(currHours +":"+ currentMinutes +":"+ currSec);
// }
// document.getElementById("demos").innerHTML = myFunction();

const romise = new Promise((resolve,reject) => {
   let sum = 0;
   if( sum == 0){
      resolve(7+3);
   }else
   {reject("Error: A big error")}
});
romise.then(
   function(g){asyncFun(g);},
   function(g){asyncFun(g);}
)

let callBac = (backFun) =>{
   console.log(backFun);
  
};

let joanes = () =>{
   console.log("Mbere yuko tumenya");
   callBac();
};
document.getElementById("call").innerHTML = callBac(joanes);


function amakj(sa){
   document.getElementById("demo").innerHTML = sa;
}

function ansre(a,b,callBac){
   let sum = a+b;
   callBac(sum);
}

ansre(43,7,callBac)

setTimeout(amakjf, 4000);
function amakjf(){
console.log("Ejo nta briefing dufite bivuzeko ibintu ari amahoro")
}
amakjf()


// function kayijuko(sm){
//    console.log(sm);
// }
const promise = new Promise(function(resolve,reject){
   const ama = 7;
   if(ama == 5){
      resolve("The ansewer is true");
   }else{
      reject("The ansewer is not true")
   }


});
promise.then(
   function(v){ console.log(v)},
   function(f){ console.log(f)}
)

let button = document.getElementById('text-button').addEventListener('click', getText);

function getText(){
fetch('index.txt')
.then(res =>{
   console.log(res.text())
})
.then(data => {
   // let result;
   // result = document.querySelector(".result");
   // result.innerHTML = data;
   console.log(data);
})
.catch(error =>{
   console.log(error)
})
};

getText();
//console.log(button);

let str = "joaneshfhjhfkjjh";
function remove(){
   return str.slice(1,-5);
}
 console.log(remove());

 let arr = [23,3,12,[34,6,7,[5,6,9,]],[60,67]];
 const both = arr.flat(Infinity);
 console.log(both);