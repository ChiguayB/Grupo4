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

  //API 
  const cont = document.querySelector("#clientes-api")

  $.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: (data) => {console.log(data);
      console.log(data.results.length)
      for (let i = 0; i < data.results.length; i++) {
        nombre = data.results[i].name.first;
        apellido = data.results[i].name.last;
        newCliente = $( "#clientes-api" ).append(`<p> ${nombre} ${apellido} ${Math.random()}</p>`);

        
    console.log(nombre + (" ") + apellido);
        
      }
      
    }
  });