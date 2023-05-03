// Récupération des pièces depuis le fichier JSON
// const articles = await fetch("tuto.json").then(pieces => pieces.json());


const reponse = await fetch('tuto.json');
const articles = await reponse.json();


// Fonction qui génère toute la page web
function genererPieces(articles) {
  document.querySelector("section").innerHTML = '';
  document.querySelector("aside").innerHTML = '';
  // Récupération de l'élément du DOM qui accueillera les articles
  const sectionArticles = document.querySelector(".articles");
  const aside_menu_main = document.querySelector("aside");

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
    } else {
      // console.log(i);

      // Création d’une balise a
      const titre1Articles = document.createElement("a");
      titre1Articles.setAttribute("class", article.chapitre);
      titre1Articles.innerHTML = article.titre1;
      // On attache l'article à la section de la page  
      aside_menu_main.appendChild(titre1Articles);
    }
  }
}

// Efface le contenu de la balise body et donc l’écran
document.querySelector("section").innerHTML = '';
document.querySelector("aside").innerHTML = '';
// Premier affichage de la page
genererPieces(articles);

///////////////////////////////////////////////////////////////////////

for (let i = 0; i < articles.length; i++) {

  // On fait une copie des article un à un 
  const article = articles[i];
  if (article.titre2 == null) {

    let stringParm = `.${article.chapitre}`;

    console.log(stringParm);
    const boutonFiltrer = document.querySelector(`.${article.chapitre}`);
    // const boutonFiltrer = document.querySelector('#100');
    console.log(boutonFiltrer);
    boutonFiltrer.addEventListener("click", function () {

      console.log("clickkkkkk");
      const articlesFiltrees = articles.filter(function (article2) {
        return article2.chapitre == article.chapitre;
      });
      console.log(articlesFiltrees);
      genererPieces(articlesFiltrees);
      // document.querySelector(".fiches").innerHTML = "";
      // genererPieces(piecesFiltrees);
    });
  }
}






