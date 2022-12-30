

export const portfolio = [
  {
    id: "1",
    title: "Projet 1 - Booki",
    logo:"./media/skills/Bookilogo.png",
    cover: "./media/skills/Booki.PNG",
    description:
      "Projet d'intégration web",
    details:
      "Booki est une plateforme de réservation de logements entre particuliers. Ce projet avait pour but d'intégrer une maquette donnée en HTML et CSS. Les maquettes fournies étaient en format desktop et mobile, le site Booki est donc responsive. Ce premier projet m'a permis d'appréhender en profondeur HTML et CSS et notamment la dimension des images en fonction des différentes tailles d'écran : un zoom est appliqué sans pour autant déformer les images des logements présentés. Vous pouvez visualiser la version finale du site Booki en cliquant sur le lien ci-dessous. ",
    pictures:["../media/skills/Booki.PNG", "../media/skills/Booki2.PNG"],
    link: "https://emilie2393.github.io/Projet_1_Booki/"
  },
  {
    id: "2",
    title: "Projet 2 - Oh My Food",
    logo:"./media/skills/ohmyfoodlogo.png",
    cover: "./media/skills/Ohmyfood2.PNG",
    description:
      "Projet d'intégration web",
    details:
      "Oh My Food est une plateforme de réservation de plats en ligne. Ce projet avait pour but d'intégrer une maquette donnée en HTML, CSS et d'intégrer également SASS. Un code couleur a été appliqué ainsi qu'un format desktop, tablette et mobile. De plus, l'intégration de plusieurs animations à été faite grace aux keyframes notamment. Ce projet m'a fait découvrir le préprocesseur Sass à travers le nesting et la méthodologie BEM, et m'a permis de mieux organiser mes balises pour une meilleure visibilité du code. Le projet Oh My Food est visible en cliquant sur le lien ci-dessous.",
    pictures:["../media/skills/Ohmyfood2.PNG", "../media/skills/Ohmyfood.PNG", "../media/skills/Ohmyfood3.PNG"],
    link: "https://emilie2393.github.io/Projet_2_OhMyFood/"
  },
  {
    id: "3",
    title: "Projet 3 - La Panthère",
    logo:"./media/skills/LaPantherelogo.PNG",
    cover: "./media/skills/Lapanthere.PNG",
    description:
      "Projet SEE/SEO",
    details: "La Panthère est un site vitrine d'une agence de web design. Le but de ce projet était de corriger une version donnée du site pour améliorer ses performances et corriger les mauvaises pratiques appliquées. J'ai utilisé l'outil Lighthouse de Google Chrome pour analyser le changement des performances en fonction de mes corrections. Les images ci-dessus indiquent le constat Lighthouse au début du projet, puis ensuite avec les rectifications apportées au code. Les bonnes pratiques étaient ici la priorité, en validant le site auprès du W3C aussi bien sur le fichier HTML que CSS. La version finale du site est disponible ci-dessous.",
    pictures:["../media/skills/Lapanthere.PNG", "../media/skills/Lapanthere2.PNG", "../media/skills/Lapanthere3.PNG", "../media/skills/Lapanthere4.PNG"],
    link: "https://emilie2393.github.io/Projet_3_Panthere/"
  },
  {
    id: "4",
    title: "Projet 4 - Kanap",
    logo:"./media/skills/Kanaplogo.png",
    cover: "./media/skills/Kanap.PNG",
    description:
      "Intégration dynamique d'une API",
    details: "Kanap est un site e-commerce dynamique de vente de canapés. Il fallait ici intégrer les élements de l'API sur les pages HTML à l'aide de Javascript. Pour cela, j'ai créé 4 fichiers Javascript qui fournissent au DOM les informations nécessaires. L'API renvoit les informations de chaque canapé. Le challenge ici était d'implémenter des fonctions asynchrones qui fonctionnaient indépendamment les unes des autres. Le local storage est utilisé pour sauvegarder les informations du panier de l'utilisateur. Enfin, des RegEx sont utilisées pour sécuriser le formulaire du panier. Ce projet m'a permis de découvrir Javascript coté frontend : j'ai appliqué plusieurs fonctions nécessaire à l'utilisation de fichiers JSON comme la méthode fetch par exemple, et également des fonctions conditionnelles ainsi que des boucles. Le repository du code est disponible via github ci-dessous. ",
    pictures:["../media/skills/Kanap.PNG", "../media/skills/Kanap2.PNG", "../media/skills/Kanap3.PNG", "../media/skills/Kanap4.PNG", "../media/skills/Kanap5.PNG"],
    link: "https://github.com/Emilie2393/Projet_4_Kanap"
  },
  {
    id: "5",
    title: "Projet 5 - Hot Takes",
    logo:"./media/skills/Hottakeslogo.PNG",
    cover: "./media/skills/Hottakes.PNG",
    description:
      "Création d'une API sécurisée",
    details: "Le projet de Hot Takes est la création complète d'une API. Cette plateforme sert à publier sa sauce préférée et d'aimer ou pas les publications. Il faut pour cela créer un compte utilisateur à l'aide d'une adresse mail et d'un mot de passe. Le mot de passe est haché et la connexion génère un token vérifié à chaque chargement d'une nouvelle page. Cette application fonctionne à l'aide de Node.js, Express, Mongoose et la base de donnée MongoDB. Les utilisateurs et les produits créés sont enregistrés sur cette base de données. Plusieurs fonctions sont ici utilisées pour modifier le produit, le supprimer ou en ajouter un nouveau à la condition d'être bien connecté sur son propre compte. Des variables d'environnement ont aussi été utilisées. Sur ce projet j'ai appris à organiser le backend d'une applications à travers 4 dossiers (middleware, models, routes et controllers) qui ont chacun leur propre fonction. Le repository du code est disponible via github ci-dessous.",
    pictures:["../media/skills/Hottakes.PNG","../media/skills/Hottakes2.PNG", "../media/skills/Hottakes3.PNG", "../media/skills/Hottakes4.PNG", "../media/skills/Hottakes5.PNG"],
    link: "https://github.com/Emilie2393/Projet_5_HotTakes"
  },
  {
    id: "6",
    title: "Projet 6 - Kasa",
    logo:"./media/skills/Kasalogo.png",
    cover: "./media/skills/Kasa.PNG",
    description:
      "Implémentation front-end avec React",
    details: "Kasa est un site de location d'appartement entre particuliers. Le projet ici était de transformer l'application avec React. Le site est transcris à travers des composants sur le fichier App.jsx. React Router organise les routes de l'application. Une page d'erreur est présentée en cas de mauvaise URL. Sur ce projet j'ai découvert React à travers les hooks et les composants ainsi que les changements d'états. Ce projet a également fait appel  Une fonction est utilisée sur chaque composant. Le repository du code est disponible via github ci-dessous.",
    pictures:["../media/skills/Kasa.PNG","../media/skills/Kasa2.PNG", "../media/skills/Kasa3.PNG", "../media/skills/Kasa4.PNG"],
    link: "https://github.com/Emilie2393/Projet_6_Kasa"
  }




]



