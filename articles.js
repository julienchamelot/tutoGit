// Récupération des pièces depuis le fichier JSON
// const articles = await fetch("tuto.json").then(pieces => pieces.json());


const reponseArticles = await fetch('articles.json');
const articles = await reponseArticles.json();


const reponseTitres = await fetch('titreArticles.json');
const titres = await reponseTitres.json();


function genererMenu(titres) {
  document.querySelector("aside").innerHTML = '';

  const aside_menu_main = document.querySelector("aside");

  for (let i = 0; i < titres.length; i++) {

    const titre = titres[i] ; 
    // console.log(i);

    // Création d’une balise a
    const titreArticles = document.createElement("a");
    titreArticles.setAttribute("class", titre.chapitre);
    titreArticles.innerHTML = titre.titre1;
    // On attache l'article à la section de la page  
    aside_menu_main.appendChild(titreArticles);
  }

}

// Fonction qui génère toute la page web
function genererArticle(articles, titres) {
  document.querySelector("section").innerHTML = '';

  // Récupération de l'élément du DOM qui accueillera les articles
  const sectionArticles = document.querySelector(".articles");


  // On parcourt chaqu'in des articles passé en paramètre
  for (let i = 0; i < articles.length; i++) {

    // On fait une copie des article un à un 
    const article = articles[i];



    if (article.titre2 != null) {
      // Création d’une balise article
      const articleElement = document.createElement("article");
      // On attache l'article à la section de la page  
      sectionArticles.appendChild(articleElement);

      // On crée l’élément h2.
      const titreArticle = document.createElement("h2");
      // On remplit l'élèment avec les données lu dans une ligne du tableau 
      titreArticle.innerHTML = article.titre2;
      //on attache le titre dans l'article
      articleElement.appendChild(titreArticle);

      //On verifie la présence d'un paragraphe_avant 
      if (article.paragraphe_avant != null) {
        const paragraphe_avant = document.createElement("p");
        paragraphe_avant.innerHTML = article.paragraphe_avant;
        articleElement.appendChild(paragraphe_avant);
      }

      if (article.image != null) {
        const imageArticle = document.createElement("img");
        imageArticle.src = article.image;
        // imageArticle.alt = article.alt;
        articleElement.appendChild(imageArticle);
      }

      if (article.commande) {
        const commandeArticle = document.createElement("span");
        commandeArticle.setAttribute("class", "press_papier");
        commandeArticle.innerHTML = article.commande;
        articleElement.appendChild(commandeArticle);

        const codeArticle = document.createElement("div");
        codeArticle.setAttribute("class", "code");
        codeArticle.innerHTML = article.code;
        articleElement.appendChild(codeArticle);
      }

      if (article.paragraphe_apres != null) {
        const paragraphe_apres = document.createElement("p");
        paragraphe_apres.innerText = article.paragraphe_apres;
        articleElement.appendChild(paragraphe_apres);
      }
    } 
  }
}

// Efface le contenu de la balise body et donc l’écran
document.querySelector("section").innerHTML = '';
document.querySelector("aside").innerHTML = '';
// Premier affichage de la page
genererArticle(articles, titres);
genererMenu(titres);
///////////////////////////////////////////////////////////////////////

for (let i = 0; i < articles.length; i++) {

  // On fait une copie des article un à un 
  const article = articles[i];
  if (article.titre2 == null) {

    let stringParm = `.${article.chapitre}`;

    // console.log(stringParm);
    const boutonFiltrer = document.querySelector(`.${article.chapitre}`);
    // const boutonFiltrer = document.querySelector('#100');
    // console.log(boutonFiltrer);
    boutonFiltrer.addEventListener("click", function () {

      console.log("clickkkkkk");
      const articlesFiltrees = articles.filter(function (article2) {
        return article2.chapitre == article.chapitre;
      });
      console.log(articlesFiltrees);
      genererArticle(articlesFiltrees, titres);
      // document.querySelector(".fiches").innerHTML = "";
      // genererArticle(piecesFiltrees);
    });
  }
}






