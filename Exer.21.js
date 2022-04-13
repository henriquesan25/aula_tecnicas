function calcularhorastraba(salario){
    let valorhortra = salario/8;
    return valorhortra;
}

 function calhoraextra(salario){
    let valorhorextra = salario/4;
    return valorhorextra;
 }

function calsalariobruto(valorhortra,horatra){
    let salbruto = valorhortra*horatra;  
    return salbruto;
}

function horaextrareceber(hex,valorhorextra){
    let valhorasextrarece = hex * valorhorextra;   
    return valhorasextrarece;
}

function salarioReceber(salbruto,valhorasextrarece){
    let salreceber = salbruto + valhorasextrarece;
    return salreceber;
    
}
  function inicializar(){
    let horastra = 200;
    let salariomin =1212;
    let hex = 30;
    console.log(calcularhorastraba(salariomin));
    console.log(calhoraextra(salariomin));
    console.log(calsalariobruto(horastra, calcularhorastraba(salariomin)));
    console.log(horaextrareceber(hex,calhoraextra(salariomin)));
    console.log(salarioReceber(calsalariobruto(horastra,calcularhorastraba(salariomin)),horaextrareceber(hex,calhoraextra(salariomin))));
  }
  inicializar();