import { Leon, Lobo, Oso, Serpiente, Aguila } from './modules.mjs';

const animalMap = {
  "Leon": { img: "assets/imgs/Leon.png", sonido: "assets/sounds/Rugido.mp3" },
  "Lobo": { img: "assets/imgs/Lobo.jpg", sonido: "assets/sounds/Aullido.mp3" },
  "Oso": { img: "assets/imgs/Oso.jpg", sonido: "assets/sounds/Grunido.mp3" },
  "Serpiente": { img: "assets/imgs/Serpiente.jpg", sonido: "assets/sounds/Siseo.mp3" },
  "Aguila": { img: "assets/imgs/Aguila.png", sonido: "assets/sounds/Chillido.mp3" }
};

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let nombre = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;

  if (!nombre || !edad || !comentarios) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let { img, sonido } = animalMap[nombre];

  let animal;
  switch (nombre) {
    case "Leon":
      animal = new Leon(nombre, edad, img, comentarios, sonido);
      break;
    case "Lobo":
      animal = new Lobo(nombre, edad, img, comentarios, sonido);
      break;
    case "Oso":
      animal = new Oso(nombre, edad, img, comentarios, sonido);
      break;
    case "Serpiente":
      animal = new Serpiente(nombre, edad, img, comentarios, sonido);
      break;
    case "Aguila":
      animal = new Aguila(nombre, edad, img, comentarios, sonido);
      break;
  }

  //llamada a la funcion
  agregarAnimal(animal);
  limpiarFormulario();
});

//Change para el preview en el form
document.getElementById("animal").addEventListener("change", () => {
 const previewDiv = document.getElementById("preview");
 let nombre = document.getElementById("animal").value;
 let { img } = animalMap[nombre];
 previewDiv.innerHTML = `
   <img src="${img}" class="img" width = "100%" height="100%"/>
 `;
})

//funcion que añade y da estilo al animal en el despliegue principal
function agregarAnimal(animal) {
  const animalContainer = document.getElementById("Animales");
  const animalDiv = document.createElement("div");
  animalDiv.className = "animal-card";
  animalDiv.style.width = "33%";
  animalDiv.style.marginRight = "0.3%";
  animalDiv.style.marginBottom = "3px";
  animalDiv.innerHTML = `
    
    <img src="${animal.img}" class="animal-img" width = "100%" height="300px"/>
    <button class="btn btn-dark btn-sound">Sonido</button>
    <button class="btn btn-info btn-preview">Vista Previa</button>
  `;


  animalDiv.querySelector(".btn-sound").addEventListener("click", () => {
    const reproductor = document.getElementById("player");
    reproductor.src = animal.sonido;
    reproductor.play();
  });


  animalDiv.querySelector(".btn-preview").addEventListener("click", () => {
    const modal = document.getElementById("modal-body-content");
    modal.innerHTML = `
      <img src="${animal.img}" class="img-fluid"/>
      <p><strong>Nombre:</strong> ${animal.nombre}</p>
      <p><strong>Edad:</strong> ${animal.edad}</p>
      <p><strong>Comentarios:</strong> ${animal.comentarios}</p>
    `;
    $('#exampleModal').modal('show');
  });

  animalContainer.appendChild(animalDiv);
}


function limpiarFormulario() {
  document.getElementById("animal").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("comentarios").value = "";
  document.getElementById("preview").innerHTML = "";
}