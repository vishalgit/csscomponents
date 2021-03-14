var btns = document.getElementsByClassName("accordian__btn");
var i;
for(i = 0 ; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}