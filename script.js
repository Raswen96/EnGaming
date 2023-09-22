const idiomasBtn = document.getElementById("idiomasBtn");

idiomasBtn.addEventListener("mouseover", function() {
    const p = this.querySelector("p");
    const i = this.querySelector("i");
    const span =this.querySelector("span");
    p.style.color = "#F7D308";
    i.style.color = "#F7D308";
    span.style.color = "#F7F308";
});

idiomasBtn.addEventListener("mouseout", function() {
    const p = this.querySelector("p");
    const i = this.querySelector("i");
    const span = this.querySelector("span");
    p.style.color = "#ffffff";
    i.style.color = "#ffffff";
    span.style.color = "#ffffff";
});

function changeColorOnHover(btnId, color) {
  const btn = document.getElementById(btnId);
  btn.addEventListener("mouseover", function() {
    const i = this.querySelector("i");
    i.style.color = color;
  });
  btn.addEventListener("mouseout", function() {
    const i = this.querySelector("i");
    i.style.color = "#ffffff";
  });
}

changeColorOnHover("panelBtn", "#F7D308");
changeColorOnHover("panelBtn2", "#F7D308");

function changeColorOnHoverTwo(btnId, color) {
  const btn = document.getElementById(btnId);
  btn.addEventListener("mouseover", function() {
    const p = this.querySelector("p");
    p.style.color = color;
  });
  btn.addEventListener("mouseout", function() {
    const p = this.querySelector("p");
    p.style.color = "#ffffff";
  });
}

changeColorOnHoverTwo("panelBtn4", "#F7D308");


panelBtn3.addEventListener("mouseover", function() {
  const i = this.querySelector("i");
  const p = this.querySelector("p");
  i.style.color = "#F7D308";
  p.style.color = "#F7D308";
});

panelBtn3.addEventListener("mouseout", function() {
  const i = this.querySelector("i");
  const p = this.querySelector("p");
  i.style.color = "#FFFFFF"; // Cambia el color del icono a negro
  p.style.color = "#FFFFFF"; // Cambia el color del texto a negro
});


// document.addEventListener("DOMContentLoaded", function() {
//   const cartButton = document.getElementById("panelBtn2");
//   const cartMenu = document.getElementById("cartMenu");

//   cartButton.addEventListener("click", function(e) {
//     e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

//     const computedStyle = window.getComputedStyle(cartMenu);
//     if (computedStyle.display === "none") {
//       cartMenu.style.display = "block"; // Mostrar el menú
//     } else {
//       cartMenu.style.display = "none"; // Ocultar el menú
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const cartButton = document.getElementById("panelBtn2");
  const cartMenu = document.getElementById("cartMenu");
  const backgroundOverlay = document.querySelector('.backgroundOverlay');


  document.addEventListener("click", function(e) {
    if (cartMenu.style.display === "block" && !cartButton.contains(e.target) && !cartMenu.contains(e.target)) {
      cartMenu.style.display = "none"; // Ocultar el menú cuando se hace clic fuera de él
    }
  });

  cartButton.addEventListener("click", () => {
    backgroundOverlay.classList.add('overlayActive');
  })

  cartButton.addEventListener("click", function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    if (cartMenu.style.display === "none" || cartMenu.style.display === "") {
      cartMenu.style.display = "block"; // Mostrar el menú
    } else {
      cartMenu.style.display = "none"; // Ocultar el menú
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const favButton = document.getElementById("panelBtn");
  const favMenu = document.getElementById("favMenu");
  const backgroundOverlay = document.querySelector('.backgroundOverlay');

  document.addEventListener("click", function(e) {
    if (favMenu.style.display === "block" && !favButton.contains(e.target) && !favMenu.contains(e.target)) {
      favMenu.style.display = "none"; // Ocultar el menú cuando se hace clic fuera de él
    }
    
  });

  favButton.addEventListener("click", () => {
    backgroundOverlay.classList.add('overlayActive');
  })

  favButton.addEventListener("click", function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    if (favMenu.style.display === "none" || favMenu.style.display === "") {
      favMenu.style.display = "block"; // Mostrar el menú
    } else {
      favMenu.style.display = "none"; // Ocultar el menú
    }
  });
});



// document.addEventListener("DOMContentLoaded", function() {
//   const favButton = document.getElementById("panelBtn");
//   const favMenu = document.getElementById("favMenu");
  


//   favButton.addEventListener("click", function(e) {
//     e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

//     const computedStyle2 = window.getComputedStyle(favMenu);
//     if (computedStyle2.display === "none") {
//       favMenu.style.display = "block"; // Mostrar el menú
//     } else {
//       favMenu.style.display = "none"; // Ocultar el menú
//     } 
//   });
// });

// const slides = document.querySelectorAll('.slide')

// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//       clearActiveClasses()
      
      
//       slide.classList.add('active')
//     })
// }

// function clearActiveClasses() {
//     slides. forEach((slide) => {
//         slide. classList. remove('active')
//     })
// }


const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    if (window.innerWidth > 850) { // Verificar si el ancho de la página es mayor que 850px
      clearActiveClasses();
      slide.classList.add('active');
    }
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}



/* Contador de Inicio un solo uso */


let slide1Clicked = false;
let functionActive = true;

function handleClickStart(event) {
  const clickedDiv = event.target;
  if (clickedDiv.classList.contains("slide-1") && functionActive) {
    slide1Clicked = true;
    window.location.href = "https://www.ejemplo.com"; // Reemplaza esto con la URL de la página a la que quieres redirigir
  } else {
    // Si se hace clic en cualquier otro div, desactiva permanentemente la función
    functionActive = false;
  }
}

const slideDivs = document.querySelectorAll(".slide");
slideDivs.forEach((div) => {
  div.addEventListener("click", handleClickStart);
});


/* Primer contador continuo */


let clickCount = 0;
let lastClickedDiv = null;

function handleClick(event) {
  const currentClickedDiv = event.target;
  if (currentClickedDiv !== lastClickedDiv) {
    clickCount = 0;
    lastClickedDiv = currentClickedDiv;
  }
  clickCount++;
  if (clickCount === 2) {
    window.location.href = "https://www.ejemplo.com"; // Reemplaza esto con la URL de la página a la que quieres redirigir
    clickCount = 0;
    lastClickedDiv = null;
  }
}

const activeDivs = document.querySelectorAll(".slide.slide-1");
activeDivs.forEach((div) => {
  div.addEventListener("click", handleClick);
});

const allDivs = document.querySelectorAll(".slide:not(.slide-1)");
allDivs.forEach((div) => {
  div.addEventListener("click", () => {
    clickCount = 0;
    lastClickedDiv = null;
  });
});


/* Segundo Contador */



document.addEventListener("DOMContentLoaded", function() {
  let clickCount2 = 0;
  let lastClickedDiv2 = null;

  const slide2 = document.querySelector(".slide.slide-2");
  slide2.addEventListener("click", function(event) {
    const currentClickedDiv2 = event.target;
    if (currentClickedDiv2.classList.contains("slide-2")) {
      if (clickCount2 === 1 && currentClickedDiv2 === lastClickedDiv2) {
        window.location.href = "https://www.ejemplo.com"; // Reemplaza esto con la URL de la página a la que quieres redirigir
        clickCount2 = 0;
        lastClickedDiv2 = null;
      } else {
        clickCount2 = 1;
        lastClickedDiv2 = currentClickedDiv2;
      }
    } else {
      clickCount2 = 0;
      lastClickedDiv2 = null;
    }
  });

  const allDivs = document.querySelectorAll(".slide:not(.slide-2)");
  allDivs.forEach((div) => {
    div.addEventListener("click", () => {
      clickCount2 = 0;
      lastClickedDiv2 = null;
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let clickCount3 = 0;
  let lastClickedDiv3 = null;

  const slide3 = document.querySelector(".slide.slide-3");
  slide3.addEventListener("click", function(event) {
    const currentClickedDiv3 = event.target;
    if (currentClickedDiv3.classList.contains("slide-3")) {
      if (clickCount3 === 1 && currentClickedDiv3 === lastClickedDiv3) {
        window.location.href = "https://www.ejemplo.com"; // Reemplaza esto con la URL de la página a la que quieres redirigir
        clickCount3 = 0;
        lastClickedDiv3 = null;
      } else {
        clickCount3 = 1;
        lastClickedDiv3 = currentClickedDiv3;
      }
    } else {
      clickCount3 = 0;
      lastClickedDiv3 = null;
    }
  });

  const allDivs = document.querySelectorAll(".slide:not(.slide-3)");
  allDivs.forEach((div) => {
    div.addEventListener("click", () => {
      clickCount3 = 0;
      lastClickedDiv3 = null;
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let clickCount4 = 0;
  let lastClickedDiv4 = null;

  const slide4 = document.querySelector(".slide.slide-4");
  slide4.addEventListener("click", function(event) {
    const currentClickedDiv4 = event.target;
    if (currentClickedDiv4.classList.contains("slide-4")) {
      if (clickCount4 === 1 && currentClickedDiv4 === lastClickedDiv4) {
        window.location.href = "https://www.ejemplo.com"; // Reemplaza esto con la URL de la página a la que quieres redirigir
        clickCount4 = 0;
        lastClickedDiv4 = null;
      } else {
        clickCount4 = 1;
        lastClickedDiv4 = currentClickedDiv4;
      }
    } else {
      clickCount4 = 0;
      lastClickedDiv4 = null;
    }
  });

  const allDivs = document.querySelectorAll(".slide:not(.slide-4)");
  allDivs.forEach((div) => {
    div.addEventListener("click", () => {
      clickCount4 = 0;
      lastClickedDiv4 = null;
    });
  });
});


const iconSelectors = document.querySelectorAll('.icon-selector');

iconSelectors.forEach(function(iconSelector) {
  iconSelector.addEventListener('click', function() {
    if (iconSelector.classList.contains('active')) {
      // Si la clase 'active' está presente, remuévela para volver al estado normal
      iconSelector.classList.remove('active');
    } else {
      // Si la clase 'active' no está presente, agrégala
      iconSelector.classList.add('active');
    }
  });
});

// var contenedor = document.querySelector('.game1');
// var imagenes = ['/img/gameList/mortalKombat11.jpeg', '/img/gameHoverGallery/mortal1.png', '/img/gameHoverGallery/mortal2.png', '/img/gameHoverGallery/mortal3.png', '/img/gameHoverGallery/mortal4.jpg'];
// var i = 0;
// var intervalID;

// function cambiarImagen() {
//   contenedor.style.backgroundImage = 'url(' + imagenes[i] + ')';
//   i = (i + 1) % imagenes.length;
//   intervalID = setTimeout(cambiarImagen, 4000);
// }

// contenedor.addEventListener('mouseenter', function() {
//   i = 1;
//   cambiarImagen();
// });

// contenedor.addEventListener('mouseleave', function() {
//   clearTimeout(intervalID);
//   i = 0;
//   contenedor.style.backgroundImage = 'url(' + imagenes[i] + ')';
// });


function agregarEfectoHover(contenedor, imagenes) {
  var i = 0;
  var intervalID;

  function cambiarImagen() {
    contenedor.style.backgroundImage = 'url(' + imagenes[i] + ')';
    i = (i + 1) % imagenes.length;
    intervalID = setTimeout(cambiarImagen, 4000);
  }

  contenedor.addEventListener('mouseenter', function() {
    i = 1;
    cambiarImagen();
  });

  contenedor.addEventListener('mouseleave', function() {
    clearTimeout(intervalID);
    i = 0;
    contenedor.style.backgroundImage = 'url(' + imagenes[i] + ')';
  });
}

var game1 = document.querySelector('.game1');
var game1_imagenes = ['/img/gameList/mortalKombat11.jpeg', '/img/gameHoverGallery/mortal1.png', '/img/gameHoverGallery/mortal2.png', '/img/gameHoverGallery/mortal3.png', '/img/gameHoverGallery/mortal4.jpg'];
agregarEfectoHover(game1, game1_imagenes);

var game2 = document.querySelector('.game2');
var game2_imagenes = ['/img/gameList/theLastOfUs.jpg', '/img/gameHoverGallery/tlou1.png', '/img/gameHoverGallery/tlou2.png', '/img/gameHoverGallery/tlou3.png', '/img/gameHoverGallery/tlou4.jpg'];
agregarEfectoHover(game2, game2_imagenes);


// Mensaje de aviso de agregado a favoritos y carritos de compras


// document.addEventListener("DOMContentLoaded", function() {
//   var iconSelectors = document.querySelectorAll(".icon-selector");
//   var message = document.getElementById("message");
  
//   for (var i = 0; i < iconSelectors.length; i++) {
//     iconSelectors[i].addEventListener("click", function() {
//       message.classList.add("message-visible");
//       setTimeout(function() {
//         message.classList.remove("message-visible");
//       }, 4000);
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var iconSelectors = document.querySelectorAll(".icon-selector.one");
//   var message = document.querySelector(".messageOne");
//   var timerId;
  
//   for (var i = 0; i < iconSelectors.length; i++) {
//     iconSelectors[i].addEventListener("click", function() {
//       message.classList.add("message-visible");
//       clearTimeout(timerId);
//       timerId = setTimeout(function() {
//         message.classList.remove("message-visible");
//       }, 2500);
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var iconSelectors = document.querySelectorAll(".icon-selector");
//   var messageOne = document.querySelector(".messageOne");
//   var messageTwo = document.querySelector(".messageTwo");
//   var timerIdOne;
//   var timerIdTwo;

//   for (var i = 0; i < iconSelectors.length; i++) {
//     iconSelectors[i].addEventListener("click", function() {
//       if (this.classList.contains("one")) {
//         messageOne.classList.add("message-visible");
//         clearTimeout(timerIdOne);
//         timerIdOne = setTimeout(function() {
//           messageOne.classList.remove("message-visible");
//         }, 2500);
//       } else if (this.classList.contains("two")) {
//         messageTwo.classList.add("message-visible");
//         clearTimeout(timerIdTwo);
//         timerIdTwo = setTimeout(function() {
//           messageTwo.classList.remove("message-visible");
//         }, 2500);
//       }
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var iconSelectors = document.querySelectorAll(".icon-selector");
//   var favoriteMessage = document.querySelector(".favorite-message");
//   var cartMessage = document.querySelector(".cart-message");
//   var favoriteTimerId;
//   var cartTimerId;

//   for (var i = 0; i < iconSelectors.length; i++) {
//     iconSelectors[i].addEventListener("click", function() {
//       if (this.classList.contains("one")) {
//         favoriteMessage.classList.add("favorite-visible");
//         clearTimeout(favoriteTimerId);
//         favoriteTimerId = setTimeout(function() {
//           favoriteMessage.classList.remove("favorite-visible");
//         }, 2500);
//       } else if (this.classList.contains("two")) {
//         cartMessage.classList.add("cart-visible");
//         clearTimeout(cartTimerId);
//         cartTimerId = setTimeout(function() {
//           cartMessage.classList.remove("cart-visible");
//         }, 2500);
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  var iconSelectors = document.querySelectorAll(".icon-selector");
  var favoriteMessage = document.querySelector(".favorite-message");
  var cartMessage = document.querySelector(".cart-message");
  var favoriteTimerId;
  var cartTimerId;

  for (var i = 0; i < iconSelectors.length; i++) {
    iconSelectors[i].addEventListener("click", function() {
      if (this.classList.contains("one")) {
        favoriteMessage.classList.add("favorite-visible");
        cartMessage.style.zIndex = 10; // Actualiza el valor de z-index para cart-message
        favoriteMessage.style.zIndex = 20; // Actualiza el valor de z-index para favorite-message
        clearTimeout(favoriteTimerId);
        favoriteTimerId = setTimeout(function() {
          favoriteMessage.classList.remove("favorite-visible");
        }, 2500);
      } else if (this.classList.contains("two")) {
        cartMessage.classList.add("cart-visible");
        favoriteMessage.style.zIndex = 10; // Actualiza el valor de z-index para favorite-message
        cartMessage.style.zIndex = 20; // Actualiza el valor de z-index para cart-message
        clearTimeout(cartTimerId);
        cartTimerId = setTimeout(function() {
          cartMessage.classList.remove("cart-visible");
        }, 2500);
      }
    });
  }
});


// SearchBar

    // ---- ---- Const ---- ---- //
    let inputBox = document.querySelector('.input-box'),
    searchIcon = document.querySelector('.search'),
    closeIcon = document.querySelector('.close-icon');
  
  // ---- ---- Open Input ---- ---- //
  searchIcon.addEventListener('click', () => {
    inputBox.classList.add('open');
  });
  // ---- ---- Close Input ---- ---- //
  closeIcon.addEventListener('click', () => {
    inputBox.classList.remove('open');
  });

  // MenuDropdown Open 

//   const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen', 'no-scroll');
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen', 'no-scroll' );
// });



// Menu fijo

// const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');
// const html = document.querySelector('html');
// const body = document.querySelector('body');

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen');
//   html.style.overflow = 'hidden';
//   body.style.overflow = 'hidden';
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
//   html.style.overflow = 'auto';
//   body.style.overflow = 'auto';
// });

// const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen');
  
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
 
// });

// const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');
// const body = document.querySelector('body'); // Seleccionar el elemento body

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen');
//   body.classList.add('static'); // Agregar la clase static al body
//   const dropButton = burgerDropMenu.querySelector('.dropbutton');
//   dropButton.classList.add('open'); // Agregar la clase open al elemento .dropbutton
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
//   body.classList.remove('static'); // Remover la clase static del body
//   const dropButton = burgerDropMenu.querySelector('.dropbutton');
//   dropButton.classList.remove('open'); // Remover la clase open del elemento .dropbutton
// });

// const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');
// const body = document.querySelector('body');

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen');
//   body.classList.add('static');
//   body.style.overflowY = 'scroll'; // Establecer overflow-y en scroll para el body
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
//   body.classList.remove('static');
//   body.style.overflowY = 'auto'; // Restablecer overflow-y en auto para el body
// });

// const burgerDiv = document.querySelector('.burger');
// const burgerDropMenu = document.querySelector('.burgerDropMenu');
// const closeIcon2 = document.querySelector('.close-icon2');
// const body = document.querySelector('body');
// const backgroundOverlay = document.querySelector('.backgroundOverlay');

// burgerDiv.addEventListener('click', () => {
//   burgerDropMenu.classList.add('dropmenuOpen');
//   body.classList.add('static');
//   body.style.overflowY = 'scroll'; // Establecer overflow-y en scroll para el body
//   backgroundOverlay.classList.add('overlayActive'); // Agregar la clase .overlay a .backgroundOverlay
// });

// closeIcon2.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
//   body.classList.remove('static');
//   body.style.overflowY = 'auto'; // Restablecer overflow-y en auto para el body
//   backgroundOverlay.classList.remove('overlayActive'); // Eliminar la clase .overlay de .backgroundOverlay
// });

// backgroundOverlay.addEventListener('click', () => {
//   burgerDropMenu.classList.remove('dropmenuOpen');
//   body.classList.remove('static');
//   body.style.overflowY = 'auto'; // Restablecer overflow-y en auto para el body
//   backgroundOverlay.classList.remove('overlayActive'); // Eliminar la clase .
// })

const burgerDiv = document.querySelector('.burger');
const burgerDropMenu = document.querySelector('.burgerDropMenu');
const closeIcon2 = document.querySelector('.close-menu');
const body = document.querySelector('body');
const backgroundOverlay = document.querySelector('.backgroundOverlay');

burgerDiv.addEventListener('click', () => {
  burgerDropMenu.classList.add('dropmenuOpen');
  body.classList.add('static'); // Agregar la clase .static al body
  body.style.overflowY = 'scroll'; // Establecer overflow-y en scroll para el body
  backgroundOverlay.classList.add('overlayActive'); // Agregar la clase .overlay a .backgroundOverlay
});

closeIcon2.addEventListener('click', () => {
  burgerDropMenu.classList.remove('dropmenuOpen');
  body.classList.remove('static'); // Eliminar la clase .static del body
  body.style.overflowY = 'auto'; // Restablecer overflow-y en auto para el body
  backgroundOverlay.classList.remove('overlayActive'); // Eliminar la clase .overlay de .backgroundOverlay
});

backgroundOverlay.addEventListener('click', () => {
  burgerDropMenu.classList.remove('dropmenuOpen');
  body.classList.remove('static'); // Eliminar la clase .static del body
  body.style.overflowY = 'auto'; // Restablecer overflow-y en auto para el body
  backgroundOverlay.classList.remove('overlayActive'); // Eliminar la clase .overlay de .backgroundOverlay
});

// const lista = document.querySelector('.lista');
// const pruebaEstilo = document.querySelector('.pruebaEstilo, .pruebaEstilo2');
// const backButton = document.querySelector('.back');

// lista.addEventListener('click', () => {
//   pruebaEstilo.style.transform = 'translateX(0)';
//   backButton.style.display = 'flex';
// });

// backButton.addEventListener('click', () => {
//   backButton.style.display = 'none';
//   pruebaEstilo.style.transform = 'translateX(300px)';
// });

// const lista1 = document.querySelector('.lista:nth-child(2)');
// const lista2 = document.querySelector('.lista:nth-child(3)');
// const pruebaEstilo = document.querySelector('.pruebaEstilo');
// const pruebaEstilo2 = document.querySelector('.pruebaEstilo2');
// const backButton1 = document.querySelector('.back', pruebaEstilo);
// const backButton2 = pruebaEstilo2.querySelector('.back');

// lista1.addEventListener('click', () => {
//   pruebaEstilo.style.transform = 'translateX(0)';
//   backButton1.style.display = 'flex';
// });

// lista2.addEventListener('click', () => {
//   pruebaEstilo2.style.transform = 'translateX(0)';
//   backButton2.style.display = 'flex';
// });

// backButton1.addEventListener('click', () => {
//   backButton1.style.display = 'none';
//   pruebaEstilo.style.transform = 'translateX(300px)';
// });

// backButton2.addEventListener('click', () => {
//   backButton2.style.display = 'none';
//   pruebaEstilo2.style.transform = 'translateX(300px)';
// });




const elementosLi = document.querySelectorAll('.mainMenu ul li');
const pruebaEstilo = document.querySelector('.toggleMenu1');
const pruebaEstilo2 = document.querySelector('.toggleMenu2');
const pruebaEstilo3 = document.querySelector('.toggleMenu3');
const pruebaEstilo4 = document.querySelector('.toggleMenu4');
const pruebaEstilo5 = document.querySelector('.toggleMenu5');
const pruebaEstilo6 = document.querySelector('.toggleMenu6');
const backButton1 = document.querySelectorAll('.back-close');

elementosLi.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosLi.forEach((elementoLi) => {
        elementoLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 1) {
      pruebaEstilo.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      pruebaEstilo2.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 3) {
      pruebaEstilo3.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      pruebaEstilo4.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 5) {
      pruebaEstilo5.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } 
    if (index === 6) {
      pruebaEstilo6.style.transform = 'translateX(0)';
      backButton1.forEach((back) => {
        back.style.display = 'flex';
      });
    } 
  });
});



backButton1.forEach((back) => {
  back.addEventListener('click', () => {
    backButton1.forEach((back) => {
      back.style.display = 'none';
    });
    if (pruebaEstilo.style.transform === 'translateX(0px)') {
      pruebaEstilo.style.transform = 'translateX(300px)';
    } if (pruebaEstilo2.style.transform === 'translateX(0px)') {
      pruebaEstilo2.style.transform = 'translateX(300px)';
    } if (pruebaEstilo3.style.transform === 'translateX(0px)') {
      pruebaEstilo3.style.transform = 'translateX(300px)';
    } if (pruebaEstilo4.style.transform === 'translateX(0px)') {
      pruebaEstilo4.style.transform = 'translateX(300px)';
    } if (pruebaEstilo5.style.transform === 'translateX(0px)') {
      pruebaEstilo5.style.transform = 'translateX(300px)';
    } else if (pruebaEstilo6.style.transform === 'translateX(0px)') {
      pruebaEstilo6.style.transform = 'translateX(300px)';
    } 
  });
});




const elementosSubLi = document.querySelectorAll('.subMenu ul li');
const subMenu1 = document.querySelector('.toggleSubMenu1');
const subMenu2 = document.querySelector('.toggleSubMenu2');
const subMenu3 = document.querySelector('.toggleSubMenu3');
const subMenu4 = document.querySelector('.toggleSubMenu4');
const subMenu5 = document.querySelector('.toggleSubMenu5');
const subMenu6 = document.querySelector('.toggleSubMenu6');
const backButton2 = document.querySelectorAll('.back-close2');

elementosSubLi.forEach((elemento2, index) => {
  elemento2.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi.forEach((elementoSubLi) => {
        elementoSubLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento2.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      subMenu5.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 5) {
      subMenu6.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
  });
});



backButton2.forEach((back2) => {
  back2.addEventListener('click', () => {
    backButton2.forEach((back2) => {
      back2.style.display = 'none';
    });
    if (subMenu1.style.transform === 'translateX(0px)') {
      subMenu1.style.transform = 'translateX(300px)';
    } if (subMenu2.style.transform === 'translateX(0px)') {
      subMenu2.style.transform = 'translateX(300px)';
    } if (subMenu3.style.transform === 'translateX(0px)') {
      subMenu3.style.transform = 'translateX(300px)';
    } if (subMenu4.style.transform === 'translateX(0px)') {
      subMenu4.style.transform = 'translateX(300px)';
    } if (subMenu5.style.transform === 'translateX(0px)') {
      subMenu5.style.transform = 'translateX(300px)';
    } if (subMenu6.style.transform === 'translateX(0px)') {
      subMenu6.style.transform = 'translateX(300px)';
    } if (subMenu2_1.style.transform === 'translateX(0px)') {
      subMenu2_1.style.transform = 'translateX(300px)';
    } if (subMenu2_2.style.transform === 'translateX(0px)') {
      subMenu2_2.style.transform = 'translateX(300px)';
    } if (subMenu2_3.style.transform === 'translateX(0px)') {
      subMenu2_3.style.transform = 'translateX(300px)';
    } if (subMenu2_4.style.transform === 'translateX(0px)') {
      subMenu2_4.style.transform = 'translateX(300px)';
    } if (subMenu3_1.style.transform === 'translateX(0px)') {
      subMenu3_1.style.transform = 'translateX(300px)';
    } if (subMenu3_2.style.transform === 'translateX(0px)') {
      subMenu3_2.style.transform = 'translateX(300px)';
    } if (subMenu3_3.style.transform === 'translateX(0px)') {
      subMenu3_3.style.transform = 'translateX(300px)';
    } if (subMenu4_1.style.transform === 'translateX(0px)') {
      subMenu4_1.style.transform = 'translateX(300px)';
    } if (subMenu4_2.style.transform === 'translateX(0px)') {
      subMenu4_2.style.transform = 'translateX(300px)';
    } if (subMenu4_3.style.transform === 'translateX(0px)') {
      subMenu4_3.style.transform = 'translateX(300px)';
    } if (subMenu4_4.style.transform === 'translateX(0px)') {
      subMenu4_4.style.transform = 'translateX(300px)';
    } if (subMenu4_5.style.transform === 'translateX(0px)') {
      subMenu4_5.style.transform = 'translateX(300px)';
    } if (subMenu5_1.style.transform === 'translateX(0px)') {
      subMenu5_1.style.transform = 'translateX(300px)';
    } if (subMenu5_2.style.transform === 'translateX(0px)') {
      subMenu5_2.style.transform = 'translateX(300px)';
    } if (subMenu5_3.style.transform === 'translateX(0px)') {
      subMenu5_3.style.transform = 'translateX(300px)';
    } if (subMenu5_4.style.transform === 'translateX(0px)') {
      subMenu5_4.style.transform = 'translateX(300px)';
    } if (subMenu5_5.style.transform === 'translateX(0px)') {
      subMenu5_5.style.transform = 'translateX(300px)';
    } if (subMenu6_1.style.transform === 'translateX(0px)') {
      subMenu6_1.style.transform = 'translateX(300px)';
    } if (subMenu6_2.style.transform === 'translateX(0px)') {
      subMenu6_2.style.transform = 'translateX(300px)';
    } if (subMenu6_3.style.transform === 'translateX(0px)') {
      subMenu6_3.style.transform = 'translateX(300px)';
    } if (subMenu6_4.style.transform === 'translateX(0px)') {
      subMenu6_4.style.transform = 'translateX(300px)';
    }
  });
});


const elementosSubLi2 = document.querySelectorAll('.subMenu2 ul li');
const subMenu2_1 = document.querySelector('.toggleSubMenu2-1');
const subMenu2_2 = document.querySelector('.toggleSubMenu2-2');
const subMenu2_3 = document.querySelector('.toggleSubMenu2-3');
const subMenu2_4 = document.querySelector('.toggleSubMenu2-4');


elementosSubLi2.forEach((elemento3, index) => {
  elemento3.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi2.forEach((elementoSubLi2) => {
        elementoSubLi2.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento3.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu2_1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu2_2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu2_3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu2_4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } 
  });
});

const elementosSubLi3 = document.querySelectorAll('.subMenu3 ul li');
const subMenu3_1 = document.querySelector('.toggleSubMenu3-1');
const subMenu3_2 = document.querySelector('.toggleSubMenu3-2');
const subMenu3_3 = document.querySelector('.toggleSubMenu3-3');


elementosSubLi3.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi3.forEach((elementoSubLi) => {
        elementoSubLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu3_1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu3_2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu3_3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu2_4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      subMenu5.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 5) {
      subMenu6.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
  });
});

const elementosSubLi4 = document.querySelectorAll('.subMenu4 ul li');
const subMenu4_1 = document.querySelector('.toggleSubMenu4-1');
const subMenu4_2 = document.querySelector('.toggleSubMenu4-2');
const subMenu4_3 = document.querySelector('.toggleSubMenu4-3');
const subMenu4_4 = document.querySelector('.toggleSubMenu4-4');
const subMenu4_5 = document.querySelector('.toggleSubMenu4-5');


elementosSubLi4.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi4.forEach((elementoSubLi) => {
        elementoSubLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu4_1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu4_2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu4_3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu4_4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      subMenu4_5.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
  });
});

const elementosSubLi5 = document.querySelectorAll('.subMenu5 ul li');
const subMenu5_1 = document.querySelector('.toggleSubMenu5-1');
const subMenu5_2 = document.querySelector('.toggleSubMenu5-2');
const subMenu5_3 = document.querySelector('.toggleSubMenu5-3');
const subMenu5_4 = document.querySelector('.toggleSubMenu5-4');
const subMenu5_5 = document.querySelector('.toggleSubMenu5-5');


elementosSubLi5.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi4.forEach((elementoSubLi) => {
        elementoSubLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu5_1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu5_2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu5_3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu5_4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      subMenu5_5.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
  });
});

const elementosSubLi6 = document.querySelectorAll('.subMenu6 ul li');
const subMenu6_1 = document.querySelector('.toggleSubMenu6-1');
const subMenu6_2 = document.querySelector('.toggleSubMenu6-2');
const subMenu6_3 = document.querySelector('.toggleSubMenu6-3');
const subMenu6_4 = document.querySelector('.toggleSubMenu6-4');
const subMenu6_5 = document.querySelector('.toggleSubMenu6-5');


elementosSubLi6.forEach((elemento, index) => {
  elemento.addEventListener('click', () => {
    // Verifica si el elemento clicado es el primer elemento de la lista
    if (index > 0) {
      // Elimina la clase active de cualquier elemento que la tenga actualmente
      elementosSubLi6.forEach((elementoSubLi) => {
        elementoSubLi.classList.remove('active');
      });
      // Añade la clase active al elemento clicado
      elemento.classList.add('active');
    }

    // Añade el código para manejar el evento de clic en cada elemento 'li'
    if (index === 0) {
      subMenu6_1.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 1) {
      subMenu6_2.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 2) {
      subMenu6_3.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
    if (index === 3) {
      subMenu6_4.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    } if (index === 4) {
      subMenu6_5.style.transform = 'translateX(0)';
      backButton2.forEach((back) => {
        back.style.display = 'flex';
      });
    }
  });
});

// Establecer la fecha objetivo (cuenta regresiva)
var targetDate = new Date("September 30, 2023 00:00:00").getTime();
  
// Actualizar el contador cada segundo
setInterval(function() {
  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual
  var difference = targetDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML con los valores calculados
  document.getElementById("days").innerText = formatNumber(days);
  document.getElementById("hours").innerText = formatNumber(hours);
  document.getElementById("minutes").innerText = formatNumber(minutes);
  document.getElementById("seconds").innerText = formatNumber(seconds);
}, 1000);

// Función para formatear los números a dos dígitos (agregar un cero al principio si es necesario)
function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

var closePopUp = document.querySelector(".close-popup");

// Agregar un evento de clic al botón de cierre
closePopUp.addEventListener("click", function() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
});
// const elementosLi = document.querySelectorAll('.mainMenu ul li');
// const pruebaEstilo = document.querySelector('.pruebaEstilo');
// const pruebaEstilo2 = document.querySelector('.pruebaEstilo2');
// const backButton1 = document.querySelector('.back');

// elementosLi.forEach((elemento, index) => {
//   elemento.addEventListener('click', () => {
//     // Verifica si el elemento clicado es el primer elemento de la lista
//     if (index > 0) {
//       // Elimina la clase active de cualquier elemento que la tenga actualmente
//       elementosLi.forEach((elementoLi) => {
//         elementoLi.classList.remove('active');
//       });
//       // Añade la clase active al elemento clicado
//       elemento.classList.add('active');
//     }

//     // Añade el código para manejar el evento de clic en cada elemento 'li'
//     if (index === 1) {
//       pruebaEstilo.style.transform = 'translateX(0)';
//       backButton1.style.display = 'flex';
//     } else {
//       pruebaEstilo.style.transform = 'translateX(300px)';
//       backButton1.style.display = 'none';
//     }
//   });
// });

// backButton1.addEventListener('click', () => {
//   backButton1.style.display = 'none';
//   pruebaEstilo.style.transform = 'translateX(300px)';
// });


// const elementosLi = document.querySelectorAll('.mainMenu ul li');
// const pruebaEstilo = document.querySelector('.pruebaEstilo');
// const backButton1 = document.querySelector('.back');

// elementosLi.forEach((elemento) => {
//   elemento.addEventListener('click', () => {
//     // Elimina la clase active de cualquier elemento que la tenga actualmente
//     elementosLi.forEach((elementoLi) => {
//       elementoLi.classList.remove('active');
//     });
//     // Añade la clase active al elemento clicado
//     elemento.classList.add('active');

//     // Añade el código para manejar el evento de clic en cada elemento 'li'
//     pruebaEstilo.style.transform = 'translateX(0)';
//     backButton1.style.display = 'flex';
//   });
// });

// backButton1.addEventListener('click', () => {
//     backButton1.style.display = 'none';
//     pruebaEstilo.style.transform = 'translateX(300px)';
//   });

// const elementosLi = document.querySelectorAll('.mainMenu ul li');
// const pruebaEstilo = document.querySelector('.pruebaEstilo');
// const pruebaEstilo2 = document.querySelector('.pruebaEstilo2');
// const backButton1 = document.querySelector('.back', pruebaEstilo);
// const backButton2 = pruebaEstilo2.querySelector('.back');

// elementosLi.forEach((elemento) => {
//   elemento.addEventListener('click', () => {
//     // Elimina la clase active de cualquier elemento que la tenga actualmente
//     elementosLi.forEach((elementoLi) => {
//       elementoLi.classList.remove('active');
//     });
//     // Añade la clase active al elemento clicado
//     elemento.classList.add('active');
//   });
// });

// elementosLi.addEventListener('click', () => {
//   pruebaEstilo.style.transform = 'translateX(0)';
//   backButton1.style.display = 'flex';
// });

// lista2.addEventListener('click', () => {
//   pruebaEstilo2.style.transform = 'translateX(0)';
//   backButton2.style.display = 'flex';
// });

// backButton1.addEventListener('click', () => {
//   backButton1.style.display = 'none';
//   pruebaEstilo.style.transform = 'translateX(300px)';
// });

// backButton2.addEventListener('click', () => {
//   backButton2.style.display = 'none';
//   pruebaEstilo2.style.transform = 'translateX(300px)';
// });
