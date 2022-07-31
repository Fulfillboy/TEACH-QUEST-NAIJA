function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }

    function myFunctionn(){
        var doots = document.getElementById("doots");
        var mooreText = document.getElementById("moore");
        var btnText = document.getElementById("btn")

    if (doots.style.display === "none") {
        doots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        mooreText.style.display = "none";
      } else {
        doots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        mooreText.style.display = "inline";
      }
    }

