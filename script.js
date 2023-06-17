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




const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      
      
      slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides. forEach((slide) => {
        slide. classList. remove('active')
    })
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


