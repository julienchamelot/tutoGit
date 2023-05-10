// le fichier article.json est lu 
const reponseArticles = await fetch('json/articles.json');
// Les objets du fichier article.json sont chargé dans le tableau articles
const articles = await reponseArticles.json();

const reponseTitres = await fetch('json/titreArticles.json');
const titres = await reponseTitres.json();

let chapitreAffiche = -1 ; // Index de l'article en court 

// Premier affichage de la page
// genererArticle(titres);
genererArticle(titres);
genererMenu(titres);



function genererMenu(titres) {
  
  // on selectionne la balise aside 
  const aside_menu_main = document.querySelector("aside");

  // On vide le contenu dans la balise aside 
  aside_menu_main.innerHTML = "";

  // on parcout le tableau contenant les titres 
  for (let i = 0; i < titres.length; i++) {

    // on charge les titre les un après les autres 
    const titre = titres[i];

    // pour chaque titre , on crée d’une balise a
    const titreArticles = document.createElement("a");

    // on prépare les liens au le format <a href="#" class="titre">titre du chapitre</a></li>
    titreArticles.setAttribute("class", titre.chapitre);
    titreArticles.setAttribute("href", "#");
    titreArticles.innerHTML = titre.titre;

    // On attache l'article à la section de la page  
    aside_menu_main.appendChild(titreArticles);

    // On gère l'action associé aux liens
    const boutonFiltrer = document.querySelector(`.${titre.chapitre}`);

    // fonction executé au clique sur le bouton
    boutonFiltrer.addEventListener("click", function () {
      // on parcout le tableau d'article et on filtre les articles qui on titre cliqué 
      const articlesFiltrees = articles.filter(function (article) {
        return article.chapitre == titre.chapitre;
      });
      // on evoie l'affichage des article filtrés
      genererArticle(articlesFiltrees);
    });
  }
}

// Fonction qui permet de d'afficher les articles d'un chapitre en paramètre 
function filtrerArticles(chapitre) {
  const articlesFiltrees = articles.filter(function (article) {
    return article.chapitre == titre.chapitre;
  });
  // on evoie l'affichage des article filtrés
  genererArticle(articlesFiltrees);
}


// Fonction qui génère l'affichage des articles 
// On passe en paramètre le tableau des articles a afficher
function genererArticle(articles) {
  document.querySelector("section").innerHTML = '';

  // Récupération de l'élément du DOM qui accueillera les articles
  const sectionArticles = document.querySelector(".articles");


  // On parcourt chacun des articles passé en paramètre
  for (let i = 0; i < articles.length; i++) {

    // On fait une copie des article un à un 
    const article = articles[i];

    // Création d’une balise article
    const articleElement = document.createElement("article");
    // On attache l'article à la section de la page  
    sectionArticles.appendChild(articleElement);

    // On crée l’élément h2.
    const titreArticle = document.createElement("h2");
    // On remplit l'élèment avec les données lu dans une ligne du tableau 
    titreArticle.innerHTML = article.titre;
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
      articleElement.appendChild(imageArticle);
    }

    if (article.commande) {
      const commandeArticle = document.createElement("span");
      commandeArticle.setAttribute("class", "press_papier");
      commandeArticle.innerHTML = article.commande;
      articleElement.appendChild(commandeArticle);

      //<button onclick="copierTexte ('&#34;message&#34; a &lt;copier>')">Copier</button>
      const pressePaierArticle = document.createElement("button");
      pressePaierArticle.setAttribute("onclick", `copierTexte(\"${article.commande}\")`);
      // pressePaierArticle.setAttribute("onclick", "copierTexte ('&#34;message&#34; a &lt;copier>')");
      pressePaierArticle.innerHTML = "<img src=\"images/content_copy.svg\">";
      articleElement.appendChild(pressePaierArticle);

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


// for (let i = 0; i < articles.length; i++) {

//   // On fait une copie des article un à un 
//   const article = articles[i];
// }






