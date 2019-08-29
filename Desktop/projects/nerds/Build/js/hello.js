//menu


var header=document.querySelector(".page-header");
var button=document.querySelector(".page-header__button");
 header.classList.remove("page-header--nojs");
 button.addEventListener("click", function(){
if (header.classList.contains( "page-header--closed")){
    header.classList.remove("page-header--closed");
    header.classList.add("page-header--opened");

}else{
    header.classList.remove("page-header--opened");
    header.classList.add("page-header--closed");

}

 });