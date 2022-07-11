var inputIdade = document.querySelector('#lblIdade');
var inputAltura = document.querySelector('#lblAltura');
var inputPeso = document.querySelector('#lblPeso');
var spanIdade = document.querySelector('#userIdade');
var spanResult = document.querySelector('#imcResult');
var spanSit = document.querySelector('#imcSit');


function calcularIMC(){

    var idade = inputIdade.value;
    var altura = inputAltura.value;
    var peso = inputPeso.value;

    var imc = parseFloat(peso / altura ** 2).toFixed(1); 

    if(idade <= 15 && idade != ""){
        
        if(idade == 6){
            if(imc <= 14.5){
                spanIdade.innerHTML = inputIdade.value + " Infantil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Normal";
            }else if(imc <= 16.6){
                spanIdade.innerHTML = inputIdade.value + " Infantil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Sobrepeso";
            }else{
                spanIdade.innerHTML = inputIdade.value + " Infantil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Obesidade";
            }
        }else if(idade > 6 || idade <= 10){
            if(imc <= 17){
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Normal";
            }
            else if(imc <= 20){
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Sobrepeso";
            }else{
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Obesidade";
            }
        }else if(idade > 10 || idade <= 15){
            if(imc >= 20.3){
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Normal";
            }
            else if(imc <= 21.9){
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Sobrepeso";
            }
            else{
                spanIdade.innerHTML = inputIdade.value + " Juvenil";
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Obesidade";
            }
        }
   }
    else if(idade > 15){
        if(imc <= 18.5){
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Magreza";
        }else if(imc <= 24.9){
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Peso Normal";
        }else if(imc <= 29.9){
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Sobrepeso";
        }else if(imc <= 34.9){
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Obesidade";
        }
        else if(imc <= 39.9){
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Obsidade Severa";
        }
        else{
                spanIdade.innerHTML = inputIdade.value;
                spanResult.innerHTML = imc;
                spanSit.innerHTML = "Morbida";
        }
    }else{
                spanIdade.innerHTML = "";
                spanResult.innerHTML = "";
                spanSit.innerHTML = "Preencha os campos necessários";
    }
   
}