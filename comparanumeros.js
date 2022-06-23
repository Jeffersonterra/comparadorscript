function comparaNumeros (num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return ' ${primeiraFrase} + ${segundaFrase} ';
}
function criaPrimeiraFrase (num1, num2){
   let saoIguais = '';
   if (num1===num2){
       saoIguais ='nao';

   } 
   return 'Os numeors ${num1} e ${num2} + ${saoIguais} sao saoIguais';
}    
function criaSegundaFrase (num1, num2) {
const soma  = num1 + num2;
let resultado10 = 'menor';
let resultado20 ='menor';
const compara10 = soma > 10;
const compara20 = soma > 20;
if (compara10) {
    resultado10 = 'maior';

}
if (compara20) {

    resultado20 = 'maior'
}
return 'Sua soma eh ${soma}, que eh ${resultado10} que 10 e ${resultado20} que 20. ';
}
//window.alert("Sua soma eh" + soma +" que eh" + resultado10 + " que 10 e " + resultado20 + " que 20. ");
window.alert("Sua soma eh + soma + que eh + resultado10 + que 10 e  + resultado20 +  que 20. ");
document.getElementById("read").innerHTML = "resultado";
console.log(comparaNumeros(20, 20));

