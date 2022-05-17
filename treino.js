/*// impar e par
for(let i = 0; i <= 10; i++){
   if(i % 2 ==0){
       console.log(i);
   }
}
//semaforo if, else
semaforo = "verde";

if(semaforo == "verde"){
    console.log("Pode Passar");
} 
else if(semaforo == "amarelo"){
    console.log("atenção");
} 
else{
    console.log("pare Porra")
}
//tabuada
var j;
var i;
for(i = 1; i <= 5; i++){
    for(j = 1; j <= 10; j++)
    console.log(i+ "X" + j + "=" + (i*j));
}
//teste
function func(x){
    switch(5){
        case "teste":
            console.log('o valor é igual a "teste"');
            break;
        case 2:
            console.log('o numero é igual a 2');
            break;
            default:
                console.log('o numero nao é igual a 1 nem a 2');
                break;
    }
}
func("teste");

//maoir
var x = 10;
var y = 30;
if (x > y) {
    console.log(x + " maior");
}else{
    console.log(y + " maior");
}
//tabuada while
/*3 - FaÃ§a um programa que 
calcule a tabuada de um nÃºmero qualquer.*
var num = 5;
var cont = 0;
while(cont <= 10){
   console.log( num + " x " + cont + " = "   + num * cont);
   cont++;
}
var y = 7;
for(var i = 0; i <= 10; i++){
    console.log(y + " x " + i + " = " + y * i);
}
//funçao
function parimp(n){
    if(n%2 ==0){
        return 'par';
    }else{
        return 'impar';
    }
} 
console.log(parimp(4))

function soma(n1=0, n2=0){
    return n1+n2
}console.log(soma(2,8))*/