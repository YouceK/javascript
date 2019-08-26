var cheval = prompt ("Quel est la couleur du cheval blanc d'Henri 4?");


function chevalColor(cheval) {  
  if (cheval === "blanc"){
   var nain = prompt ("Combien y a t il de 7 nains?");
   function nainColor(nain){
if (nain === "7"){
      alert("c'est gagné!");
    }
  else{
    alert("c'est perdu!");
  }
}
  nainColor(nain);

}
  else {
    alert("Mauvaise réponse!");
  }
}

chevalColor(cheval);