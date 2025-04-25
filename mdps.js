
function genererMotDePasse(longueur) {
    const minuscules = "abcdefghijklmnopqrstuvwxyz";
    const majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chiffres = "0123456789";
    const symboles = "!@#$&*_+-=<>?";
  
   
    const tousLesCaracteres = minuscules + majuscules + chiffres + symboles;
  
    let motDePasse = "";
  
    for (let i = 0; i < longueur; i++) {
      const index = Math.floor(Math.random() * tousLesCaracteres.length);
      motDePasse += tousLesCaracteres.charAt(index);
    }
  
    return motDePasse;
  }
  
 
  document.getElementById("generate").addEventListener("click", function () {
    const longueur = parseInt(document.getElementById("length").value);
  
    if (isNaN(longueur) || longueur < 12 || longueur > 128) {
      alert("Veuillez entrer une longueur entre 12 et 128 caractères.");
      return;
    }
  
    const motDePasse = genererMotDePasse(longueur);
    document.getElementById("password").textContent = motDePasse;
  });
  