function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav")
    var z = document.getElementById("myLinks")
    
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "menu-desktop"
    } else {
      x.style.display = "flex";
      y.className = "menu-mobile"
    }

  }