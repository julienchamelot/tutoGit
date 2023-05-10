
let articleAffiche = 0 ;
const navFooter = document.querySelector(".navFooter");

navFooter.innerHTML = "";

const liensFooter = document.createElement("a");
liensFooter.innerHTML="toto";
liensFooter.setAttribute("href", "#");

navFooter.appendChild(liensFooter);


