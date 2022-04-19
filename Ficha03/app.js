//EXERCICIO 3________________________________________________________________________________________________________________________________________________________________________________

function started(){
    console.log("The download has started.")
}
function update(progress){
    console.log(progress, "% of Download")
}
function completed(){
    console.log("The download has been completed.")
}
function performDownload(started_fn,update_fn,completed_fn){
    started_fn();
    for (let i = 0; i <=100; i++) {
        update_fn(i);
    }
    completed_fn();
}

//performDownload(started,update,completed);

//EXERCICIO 4____________________________________________________________________________________________________________________________________________________________________________________________________________
var arrayUtils=require("./ArrayUtils");
var array=[8,2,4,6,7];
var a1=[];
var a2=[];
console.log(arrayUtils.concatenate(a1,a2));
