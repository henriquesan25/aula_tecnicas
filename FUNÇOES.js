//Funçoes

// sem parametro//
function tabuada(){
    var cont = 0;
    while(cont <= 10){
        console.log(6*cont);
        cont++;
    }
}tabuada();

// com parametro//
function tabuada2(num){
    var x = 0;
    while(x <= 10){
        console.log(num*x);
        x++;
    }
}
tabuada2(5);

function desconto(valor) {
    var desc = 0.10;
    var novovalor = 0;
    return  novovalor = valor - (valor*desc);
}
var mensagem = desconto(1500);
console.log("valor é de " + mensagem);

//Henrique Santiago//
//RGM: 25955055

//correçao aula 29/03//

//EXER 06//
function quadrado() {
    var A = 0;
var lado2=10;
 A = lado2*lado2
console.log("a area é de: " + A);
}
quadrado();

// exerc 07 //
var anoatual = 2022;
var ano = 2000;
var idade = (anoatual-ano);
console.log("a idade da pessoa é: "+idade);
console.log("a idade da pessoa em meses é: "+idade*12);
console.log("a idade da pessoa em dias é: "+idade*365);
console.log("a idade da pessoa em semanas é: "+idade*48);

//exerc 08 //

var nota1 =6;
var nota2 =5;
var media =(nota1+nota2)/2;

if (media <=4){
    console.log("reprovado");}

   else if(media>4 && media<=7){
    console.log("exame");
    }       
    else if (media>7 && media<=10);{
    console.log("aprovado");}





        
        

    
