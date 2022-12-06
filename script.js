//1º -Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML
// Usar:
// - innerHTML
// - appendChild()
// - createElement()
// - createAttribute()
// - createTextNode()


const ul = document.createElement("ul");
const textNode = document.createTextNode("Soy Un UL");
ul.appendChild(textNode);
document.querySelector("main").appendChild(ul);

let atributo = document.createAttribute("class");
atributo.value = "ul1";
ul.setAttributeNode(atributo);



function crearLi(num) {
    for (let i = 0; i < num; i++) {
        var lista = document.createElement("li");
        lista.setAttribute("class", "elementoLista");
       
        document.querySelector('ul').appendChild(lista)
        document.querySelector('li').innerHTML ='Soy un Li'
    }
}



// 2º- Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible. Dar estilos a los elementos afectados
// let ocultar = document.getElementById('myBtn').style.display = 'none';
// let mostrar = document.getElementById('myBtn').style.display = 'block';

// function myFunction(ocultar,mostrar) {
    
// }

// function ocultar(){
//     document.getElementById('myBtn').style.display = 'none';
//     }

// function mostrar(){
//     document.getElementById('myBtn').style.display = 'block';
//         }


//         element.addEventListener("click", ocultar);
//         element.addEventListener("click", mostrar);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "inline";
    }
  }


// 3º Hacer que con onmouseover, se muestre un parrafo escondido, cuando pases el raton sobre el otro parrafo. Dar estilos a los elementos afectados


function mOver(obj) {
  obj.innerHTML = ""
}
function mOut(obj) {
  obj.innerHTML = "arrafo escondido"
}
// 4º Ejercicio Varita mágica:

