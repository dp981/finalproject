let a =true;
function myFunction() {
    a=!a
    console.log(a)
    if (a) {
        document.getElementById("demo").style = "background-color:#903564;";
        document.getElementById("txt1").style = "color:#f5f5f5";
        document.getElementById("txt2").style = "color:#f5f5f5";
        document.getElementById("txt3").style = "color:#f5f5f5";
    }
    else {
        document.getElementById("demo").style = "background-color:#f5f5f5";
        document.getElementById("txt1").style = "color:#903564";
        document.getElementById("txt2").style = "color:#903564";
        document.getElementById("txt3").style = "color:#903564";
    }

}

// function link(){
//     window.location.href("http://127.0.0.1:5500/About.html")
// }


