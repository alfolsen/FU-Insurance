function stairCase(x) {

    var stairs = "";
    var space = "";
    var hash = "Z";
    var count = x;
    var array   =[]

    for (var i = 1; i <= count; i++) {
        document.write(space.repeat(cont-i).concat(hash.repeat(i)));
        document.write("<br />");
    }
    console.log(array);
}

stairCase(50);

