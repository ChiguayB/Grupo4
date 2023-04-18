
//nav:

function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("nav")
    var z = document.getElementById("hambur-off")
    
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.className = "fixed-top menu-desktop"
      z.className = "hambur-active"

    } else {
      x.style.display = "flex";
      y.className = "menu-mobile"
      z.className = "hambur-off"
    }

  }

//Finaliza nav

const empresa = document.querySelector("#empresa")
const botonNo = document.querySelector("#checkbox2")
const botonSi = document.querySelector("#checkbox1")

function Mostrar(){
    $("#empresa").show()
    if ($("#checkbox2").value != false) {$("#checkbox2").value = false}
}

function Ocultar(){
    $("#empresa").hide();
    if ($("#checkbox1").value !=false) { $("#checkbox1").value = false
        
    }
}