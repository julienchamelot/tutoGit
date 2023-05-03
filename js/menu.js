let  menuActif = true
console.log(menuActif);
const boutonMenu = document.querySelector(".aMenu");

boutonMenu.addEventListener("click", function () {
    
    document.querySelector(".aMenu").innerHTML = "";

    const lienImage = document.querySelector(".aMenu");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("class", "imgMenu");
    // var asideMenu = document.getElementsById('asideMenu');
    var asideMenu = document.getElementById('asideMenu');
    console.log(asideMenu) ;
    asideMenu.style.order = "0" ;

    if (menuActif) {
        imageElement.src = "/images/close.svg" ;
    //    document.styleSheets[0].cssRules[1].cssRules[10].cssRules[1].order = "1"; 
    asideMenu.style.order = "0" ;
    }else{
        imageElement.src = "/images/menu.svg" ;
        // document.styleSheets[0].cssRules[1].cssRules[10].cssRules[1].order = "0"; 
        asideMenu.style.order = "1" ;
    }

    lienImage.appendChild(imageElement) ;
    console.log(menuActif);
    menuActif = !menuActif;


});