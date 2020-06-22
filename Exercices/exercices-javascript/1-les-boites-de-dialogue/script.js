// window.aExercice 1: affiche Hello World dans une boite de dialogue alert();
window.alert('hello world');

// Exercice 2:A l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
window.alert('Salut' + ' ' + ' Eudes');

// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
let quelEstVotreAge = prompt('Quel est votre age ?');
console.log(quelEstVotreAge);
parseInt(quelEstVotreAge, 10);
if (quelEstVotreAge > 18) {
  window.alert('bienvenue');
} else {
  window.alert("vous n'avez pas l'âge requis");
}
