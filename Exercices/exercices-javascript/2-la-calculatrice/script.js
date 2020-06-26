//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

function additionOnClick() {
  document.getElementById('addition'),
    addEventListener('click', function addition() {
      let numberOne = document.getElementById('first-number').value;
      console.log(numberOne);
      let numberTwo = document.getElementById('second-number').value;
      console.log(numberTwo);
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne + parsednumberTwo;
      window.alert(result);
      console.log(result);
    });
}
// let result= numberOne
// Insérez ici le bout de code nécessaire à la réalisation de l'exercice

function substractionOnClick() {
  document.getElementById('substract'),
    addEventListener('click', function substract() {
      let numberOne = document.getElementById('first-number').value;
      console.log(numberOne);
      let numberTwo = document.getElementById('second-number').value;
      console.log(numberTwo);
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne - parsednumberTwo;
      window.alert(result);
      console.log(result);
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}

function divisionOnClick() {
  document.getElementById('division'),
    addEventListener('click', function division() {
      let numberOne = document.getElementById('first-number').value;
      console.log(numberOne);
      let numberTwo = document.getElementById('second-number').value;
      console.log(numberTwo);
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne / parsednumberTwo;
      window.alert(result);
      console.log(result); // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}

function multiplicationOnClick() {
  document
    .getElementById('multiplication')
    .addEventListener('click', function multiplication() {
      let numberOne = document.getElementById('first-number').value;
      console.log(numberOne);
      let numberTwo = document.getElementById('second-number').value;
      console.log(numberTwo);
      let parsednumberOne = parseInt(numberOne, 10);
      let parsednumberTwo = parseInt(numberTwo, 10);
      let result = parsednumberOne * parsednumberTwo;
      window.alert(result);
      console.log(result); // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}
