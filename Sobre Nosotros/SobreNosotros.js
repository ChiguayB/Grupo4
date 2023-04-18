function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav")
    var z = document.getElementById("hambur-off")
    
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "menu-desktop"
      z.className = "hambur-active"

    } else {
      x.style.display = "flex";
      y.className = "menu-mobile"
      z.className = "hambur-off"
    }

  }