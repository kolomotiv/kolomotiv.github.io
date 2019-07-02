

let modal = document.querySelector(".modal"),
 close = document.querySelector(".modal-close"),
 butn=document.querySelector(".contacts-button");
 var slides=document.querySelectorAll(".slider-item");
 var main=document.querySelector("main");
 var dot=document.querySelectorAll(".dot");
 var overlay=document.querySelector(".modal-overlay");
 var login=modal.querySelector("[name=name]");
 var fade=document.querySelector(".fade");
 var form=modal.querySelector("form");
 var mail=modal.querySelector("[name=email");


 var isStorage=true;
 var storage="";

 try{
    storage=localStorage.getItem("login");
 }catch(err){
    isStorage=false;
 }




//  //popup form
 form.addEventListener("submit",function(event){
 if (!login.value||!mail.value){
   event.preventDefault();
 modal.classList.add("snake");
      }else{
         if(isStorage){
            localStorage.setItem("login",login.value);
         }
 }
  });

 butn.addEventListener("click", function() {
    modal.style.display='block';
    modal.classList.add("fade");
    overlay.style.display='block';
    login.focus();
    if(storage){
       login.login.value=storage;
    }
 });
 close.addEventListener("click", function(){
    modal.style.display= "none";
    overlay.style.display='none';
    modal.classList.remove("snake");
 });

 overlay.addEventListener("click", function (event) {
   if (!event.target.matches(".modal")){

   modal.style.display= "none";
   overlay.style.display='none';
   modal.classList.remove("snake");

   }
});

window.addEventListener("keydown",function(evt){
   if(evt.keyCode===27){
      modal.style.display= "none";
     overlay.style.display='none';
     modal.classList.remove("snake");

   }
});
//popup catalog
//  var card=document.querySelectorAll(".card");
//  var pop=document.querySelectorAll(".catalog-popup");
//  card.addEventListener("mouseover",function(){
//     for(var i =0;i<=card.length;i++){
//  pop[i].style.display="block";}
//  });


 //slider


var slideIndex=0;


function showSlides (){
  if (slideIndex>=slides.length)
    slideIndex =0;
        dot.forEach((item)=>item.classList.remove("dot-active"));
        slides.forEach((item)=>item.classList.add("visually-hidden"));
        slides.forEach((item)=>item.classList.remove("fade"));
        slides[slideIndex].classList.remove("visually-hidden");
        slides[slideIndex].classList.add("fade");
         dot[slideIndex ].classList.add("dot-active");
      };


function plusSlides(){
showSlides(slideIndex +=1);//прибавление слайдов
};

function currentSlide(n){
  showSlides(slideIndex=n);
};

 showSlides();
function doter (){
  for( let i= 0; i<dot.length; i++){
  dot[i].addEventListener("click",function(){
      currentSlide(i);
  })
};

 };

doter();
setInterval(plusSlides,5000);




