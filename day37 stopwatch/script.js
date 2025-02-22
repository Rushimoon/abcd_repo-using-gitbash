// setTimeout(xyz,3000)

// function xyz(){
//     console.log(" hi i am xyz")
//     alert("hi iam aleart")
// }

// let i=0;

// setInterval(abc,2000)

// function abc(){

//     console.log(i++)
// }


// let root=document.getElementById("root")

// let blast1=setTimeout(function(){

// let img=document.createElement("img");
//     img.src="https://media.tenor.com/c0Qcj4PYbnAAAAAM/mindblown-nuts.gif"
   
//     root.append(img)
// },5000)
   
// let blast2=setTimeout(function(){

//     let img=document.createElement("img");
//         img.src="https://i.pinimg.com/originals/9d/58/37/9d5837c6f0cb8b18be6ddd1e2742472a.gif"
       
//         root.append(img)
//     },5000)

// function stopblast(){
//    clearTimeout(blast1)
//    clearTimeout(blast2)
//    alert(" both explosion has been sto[ped")

// }

// // counter
// let i=0
// let count=document.getElementById("count")
// let time;

// startme()

// function startme(){
//     time=setInterval(function(){
//         count.innerText=i++
//     },100)
// }


// function stopme(){

//   clearInterval(time)


// }


//stopwatch
let hour=document.getElementById("hr")
let minute=document.getElementById("min")
let second=document.getElementById("sec")

let sec=0;
let min=58;
let hr=22;


setInterval(function(){
    sec++
   if(sec==60)
   {
     min++
     sec=0
     if(min==60){
        min=0
        hr++

       if(hr==24)
       {
        sec=0
        min=0
        hr=0
       }

     }
     
   }
//    console.log(sec)
   second.innerText=sec
//    console.log("this is min count",min)
   minute.innerText=min
   hour.innerText=hr

},1)


let tbody=document.getElementById("tbody")
let sr=0
function noteme(){

    let hour=document.getElementById("hr").innerText
    let minute=document.getElementById("min").innerText
    let second=document.getElementById("sec").innerText

    console.log( hour,minute,second)

    let tr=document.createElement("tr")
         
    let srno=document.createElement("td")
    srno.innerText=++sr
     
    let hrtd=document.createElement("td")
        hrtd.innerText=hour

    let mintd=document.createElement("td")
        mintd.innerText=minute
    let sectd=document.createElement("td")
        sectd.innerText=second
       
        tr.append(srno,hrtd,mintd,sectd)
   
        tbody.append(tr)



}