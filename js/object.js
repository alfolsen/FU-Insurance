/*objects*/

var slideIndex = 0;
carousel();

function carousel() {
    var 1;
    var x = document.getElementsByClassName("")
    for (i = 0; 1 < x.lenght; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.lenght) {slideIndex = 1}
    x[slideindex-1].style.display ="block";
    setTimeout(carousel, 7000); 
}