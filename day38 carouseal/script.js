let arr=[
   "https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
   "https://images.unsplash.com/photo-1498887960847-2a5e46312788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
   "https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww",
   "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
   "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"

]
let root=document.getElementById("root")
let img=document.createElement("img")
img.src=arr[0]
root.innerHTML=""    
root.append(img)
let qqq;
let i=1 //4
function xyz(){
 qqq=setInterval(mapCard,3000)
}



i=0
function mapCard(){
          
    let img=document.createElement("img")
        img.src=arr[i]

       
        root.innerHTML=""    
        root.append(img)
       
    if(i==arr.length-1){
      i=0
            
    }else{
        i++
    }



   }



 function next(){

    if(i==arr.length-1){
        i=0
              
      }else{
          i++
      }
  
  mapCard()
  clearInterval(qqq)
  setTimeout(function(){
 xyz()
  },5000)

 }      


 function prev()
 {  clearInterval(qqq)
    console.log("prev")
   i--
   if(i<=-1){
       i=arr.length-1
   }
   
     
   let img=document.createElement("img")
        img.src=arr[i]

       
        root.innerHTML=""    
        root.append(img)
     
        setTimeout(function(){
            xyz()
            },5000)


 }