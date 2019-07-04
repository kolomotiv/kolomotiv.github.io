let more = document.querySelector(".more"),
        overlay= document.querySelector(".overlay"),
        close= document.querySelector(".popup-close");


      more.addEventListener("click", function() {
        overlay.style.display= "block";
        this.classList.add('more-splash');
        