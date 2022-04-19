//EXERCICIO 1___________________________________________________________________________________________________________________________________________________       for (var i = 0; i < str.length; i++)
function imc(peso,altura){
    var indice_mc = peso/(altura)**2;
    if(indice_mc<18.5){
        return (indice_mc+" Abaixo do Peso")
    }
    if(indice_mc > 18.5 && indice_mc<= 25){
        return (indice_mc+" Peso Normal")
    }
    if(indice_mc > 25 && indice_mc<= 30){
        return (indice_mc+" Acima do Peso")
    }
    if(indice_mc > 30){
        return (indice_mc+" Obeso")
    }
}
//console.log(imc(94,1.87))

//EXERCICIO 2___________________________________________________________________________________________________________________________________________________________________________________________________________________
function reverse(str){
    var splittedStr = str.split(" ");
    var reverseStr = "";

    for(var i = 0; i < splittedStr.length; i++){
        var word = splittedStr[i];

        for (var j = word.length -1; j >= 0; j--){
            var letter = word[j];
            reverseStr+= letter
        }
        reverseStr += " ";
    }
    return reverseStr;
}
//var str= reverse("Hoje é Domingo");
//console.log(str);

//EXERCICIO 3_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
function countVogals(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" ||  str[i] == "i" ||  str[i] == "o" ||  str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U")
        count++;
    }
    return count;
}
//console.log(countVogals("Ola Mundo"))

//EXERCICIO 4________________________________________________________________________________________________________________________________________________________________________________________________________________________
var word="Hello WOrld";
var letter="o"
var count=repetition(word,letter);

function repetition (word,letter){
    var count=0;
    var word=word.toLowerCase();
    for (var i = 0; i < word.length; i++){
        if (word[i]==letter){
        count++;
        }
    }
    return count;
}
//console.log(repetition("Hello World","o"));

//EXERCICIO 5______________________________________________________________________________________________________________________________________________________________________________________________________________________
calculateTime(8,0,0,12,36,5)
function calculateTime(he,me,se,hs,ms,ss){
    var tempo_entrada = he*3600 + me*60+ se;
    var tempo_saida = hs*3600 + ms*60+ ss;

    var difer_seg = tempo_saida-tempo_entrada;

    var hours = Math.floor(difer_seg/3600);
    var hoursRemainder= difer_seg % 3600;

    var min = Math.floor(hoursRemainder/60);
    var seconds= hoursRemainder % 60;

//console.log("Trabalhou "+ hours + "h:"+ min +"m:"+seconds+"s:")
}
//EXERCICIO 6_______________________________________________________________________________________________________________________________________________________________________________________________________________
function rectangle(largura,altura){
    var line="";
    for (var i = 0; i<largura; i++){
        line+="*"
    }
    for(var j = 0; j<altura; j++){
      console.log(line)
    }
    return line
}
//console.log(rectangle(10,5))
//EXERCICIO 7_________________________________________________________________________________________________________________________________________________________________________________________________________________________
function triangle(altura){
    var line="*";
    for (var i = 1; i<altura; i++){
        console.log(line);
        line+="*";
    }
    return line
}
//console.log(triangle(4))
//EXERCICIO 8__________________________________________________________________________________________________________________________________________________________________________________________________________________________
function box(width, height){
    for (var i = 0; i<height; i++){
        var line="";
        for (var j = 0; j<width; j++){
            if (i == 0 || i == height -1){
                line+="*";
            }
            else{
                if(j == 0 || j == width -1){
                    line+="*";
                }
                else{
                    line+=" ";
                }
            }
        }
        console.log(line)
    }
}
//console.log(box(10,10))
//EXERCICIO 9______________________________________________________________________________________________________________________________________________________________________________________________________________________________
var students = [];

for (let i = 0; i<100; i++){
    var student= {
        number: Math.ceil(Math.random() * 1000),
        grade: Math.random() * 20
    }
    students.push(student);
}

function listAll(students){
    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        console.log("Number: " + student.number + "  Grade: " + student.grade);
    }
}

function bestGrade(students){
    var best=students[0].grade;
    for (let i = 1; i < students.length; i++) {
        if(student[i].grade>best){
            best=student[i].grade;
        }
    return best;
    }
}

function worstGrade(students){
    var worst=students[0].grade;
    for (var i = 1; i < students.length; i++) {
        if(student[i].grade<worst){
            best=student[i].grade;
        }
    return worst;
    }
}

function media(students){
    var soma=0;
    for (var i = 0; i < students.length; i++){
        soma+=students[i].grade;
    }
    return soma/students.length;
}

function negativesGrades(students){
    var count=0;
    for (var i = 0; i < students.length; i++){
        if(students[i].grade<9.5){
            count++;
        }
    }
    return count;
}

function positivesGrades(students){
    var soma=0;
    for (var i = 0; i < students.length; i++){
        if(students[i].grade>=9.5){
            soma++;
        }
    }
    return soma;
}

function studentsStats(students,option){
    switch (option) {
        case 1:
            listAll(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students);
            break;
        case 4:
            media(students);
            break;
        case 5:
            positivesGrades(students);
            break;
        case 6:
            negativesgrades(students);
            break;
        default:
            console.log("Invalid Option");
            break;
    }
}
console.log(studentsStats(students,5))