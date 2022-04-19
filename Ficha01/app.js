//IMPLEMENTAÇAO
//function test(){
//    console.log("THIS IS A FUNCTION!");
//}
//function test2(){
//    console.log("BOA TARDE");
//}

//INVOCAÇAO
//test();
//test2();

//Exercicio 5_______________________________________________________________________________________________________________________________________________________________________________________

//function calculateGrade(gradeP, gradeT){
    //var grade = 0.7 * gradeP + 0.3 * gradeT;
    //console.log("A nota final é: " + grade)
    //if (grade < 9.5){
        //console.log("REPROVADO")
    //}
    //else{
        //console.log("APROVADO")
    //}
//}
//INVOCAÇAO
//calculateGrade(9,12)

//Exercicio 6______________________________________________________________________________________________________________________________________________________________________________________________________

function getMonthName(monthNumber){
    if(monthNumber==1){
        console.log("Janeiro")
    }
    else if(monthNumber==2){
        console.log("Fevereiro")
    }
    else if(monthNumber==3){
        console.log("Março")
    }
    else if(monthNumber==4){
        console.log("Abril")
    }
    else if(monthNumber==5){
        console.log("Maio")
    }
    else if(monthNumber==6){
        console.log("Junho")
    }
    else if(monthNumber==7){
        console.log("Julho")
    }
    else if(monthNumber==8){
        console.log("Agosto")
    }
    else if(monthNumber==9){
        console.log("Setembro")
    }
    else if(monthNumber==10){
        console.log("Outubro")
    }
    else if(monthNumber==11){
        console.log("Novembro")
    }
    else if(monthNumber==12){
        console.log("Dezembro")
    }
    else if(monthNumber>12){
        console.log("Mes não valido")
    }
}
getMonthName(11)

// Exercicio 7_____________________________________________________________________________________________________________________________________________________________________

var primeiro_valor=5;
var segundo_valor=3;
var simbolo="^";// + - * /
function conta(primeiro_valor,segundo_valor,simbolo){
    var resultado=1;
    if (simbolo=="+"){
        resultado=primer_valor+segundo_valor;
    }
    else if (simbolo=="-"){
        resultado=primer_valor-segundo_valor;
    }
    else if (simbolo=="*"){
        resultado=primer_valor * segundo_valor;
        }
    else if (simbolo=="/"){
        resultado=primer_valor+segundo_valor;
    }
}
console.log conta(primeiro_valor,segundo_valor,simbolo)