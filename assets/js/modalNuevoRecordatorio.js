//Funcion reloj para obtener la hora actual y comparar
const reloj = () => {
  let marcacion = new Date();
  let hora = marcacion.getHours();
  let minutos = marcacion.getMinutes();
  let segundos = marcacion.getSeconds();

  if (hora <= 9) {
      hora = "0" + hora;
  }

  if (minutos <= 9) {
      minutos = "0" + minutos;
  }

  if (segundos <= 9) {
      segundos = "0" + segundos;
  }

  let horaFormat = `${hora}:${minutos}`;
  
  return horaFormat;
}

//Funcion fecha para obtener la fecha actual y comparar
const formatoFecha = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let monthString;
  
  if (month === 0) {
      monthString = 'Enero';
  } else if (month === 1) {
      monthString = 'Febrero';
  } else if (month === 2) {
      monthString = 'Marzo';
  } else if (month === 3) {
      monthString = 'Abril';
  } else if (month === 4) {
      monthString = 'Mayo';
  } else if (month === 5) {
      monthString = 'Junio';
  } else if (month === 6) {
      monthString = 'Julio';
  } else if (month === 7) {
      monthString = 'Agosto';
  } else if (month === 8) {
      monthString = 'Septiembre';
  } else if (month === 9) {
      monthString = 'Octubre';
  } else if (month === 10) {
      monthString = 'Noviembre';
  } else if (month === 11) {
      monthString = 'Diciembre';
  } else {
      monthString = 'Mes';
  }
   
  let fechaFormat = `${day} ${monthString}, ${year}`;
  
  return fechaFormat;  
}

// Inserta el container para mostrar el recordatorio 
const volverLlamar = () => {
  let credito = document.getElementById("credito");
  let recordatorio = document.getElementById("recordatorio");
  let option = recordatorio.options[recordatorio.selectedIndex];
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("time").value;
  let descripcion = document.getElementById("descripcion").value;

  reloj();
  formatoFecha();

  if (option.value === "2" && reloj() === hora && formatoFecha() === fecha) {
    let container = document.getElementById("llamar");
    container.innerHTML = 
    `<div class="alert border-0 border-info border-start border-4 bg-light-info alert-dismissible fade show py-2 volver-llamar">
      <div class="d-flex align-items-center">
        <div class="fs-3">
          <i class="bi bi-bell-fill"></i>
        </div>
        <div class="ms-3">
          <h4 class="alert-heading">Recordatorio</h4>
          <hr />
          <div class="mb-1">
            Crédito Nro:
            <strong>
              <a href="./gestionar.html" class="text-dark" id="llamar-credito">
                
              </a>
            </strong>
          </div>
          <div class="mb-1" id="llamar-recordatorio">
            
          </div>
          <div class="mb-1" id="llamar-fecha-hora">
            
          </div>
          <div class="mb-1" id="llamar-descripcion">
            
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>`

    document.getElementById("llamar-credito").innerHTML = credito.innerHTML;
    document.getElementById("llamar-recordatorio").innerHTML = "T.Recordatorio:" + " " + option.text;
    document.getElementById("llamar-fecha-hora").innerHTML = "Fecha:" + " " + fecha + " " + hora;
    document.getElementById("llamar-descripcion").innerHTML = "Descripción:" + " " + descripcion;    
  }
};


//Crea un settimeout para desvanecer la alerta
/*const disparadorDesvanecer = () => {
  const alerta = document.querySelector("#llamar");

  // Se crea la instancia de bootstrap
  const bsAlerta = new bootstrap.Alert(alerta);

  // Tiempo de desvanecimiento
  setTimeout(() => {
    bsAlerta.dispose();
  }, 5000);
};*/

let disparadorNuevoRecordatorio = () => {
setInterval(volverLlamar, 10000);
}


