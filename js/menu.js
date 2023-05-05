let menuActif = true
const boutonMenu = document.querySelector(".aMenu");

boutonMenu.addEventListener("click", function () {

    document.querySelector(".aMenu").innerHTML = "";

    const lienImage = document.querySelector(".aMenu");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("class", "imgMenu");
    var asideMenu = document.getElementById('asideMenu');

    if (menuActif) {
        imageElement.src = "images/close.svg";

        asideMenu.style.order = "0";
    } else {
        imageElement.src = "images/menu.svg";

        asideMenu.style.order = "1";
    }
    lienImage.appendChild(imageElement);
    console.log(menuActif);
    menuActif = !menuActif;
});