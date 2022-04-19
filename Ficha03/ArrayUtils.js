var utils={
    isEmpty:function(array){
        return array.length==0;
    },
    
    max:function(array){
        if(array.length==0)
        return null;

        var maximum=array[0];
        for (let i = 0; i < array.length; i++) {
            if(array[i]>maximum){
                maximum=array[i];
            }
        }
        return maximum;
    },

    min:function(array){
        if(array.length==0)
        return null;

        var minimum=array[0];
        for (let i = 0; i < array.length; i++) {
            if(array[i]<minimum){
                minimum=array[i];
            }
        }    
        return minimum;
    },

    media:function(array){
        if(array.length==0)
        return null;
        
        var med=0;
        for (var i = 0; i < array.length; i++){
            med+=array[i];
        }
        return med/array.length;
    },

    indexOf:function(array,value){
        var indice=-1;
        for (let i = 0; i < array.length; i++) {
            if (array[i]==value){
                indice = i;
            }
        }
        return indice;
    },

    subArray:function(array, startIndex, endIndex){

        if(array.length==0 || startIndex<0 || endIndex>array.length)
        return null;

        var segarray=[];
        for (let i=startIndex; i <= endIndex; i++) {
            segarray.push(array[i])
        }
        return segarray;
    },

    isSameLength:function(a1,a2){
        return a1.length == a2.length;
    },

    reverse:function(array){
        if(array.length==0)
        return null;

        newarray=[];
        for (let i = array.length-1; i >=0; i--) {
            newarray.push(array[i]);
        }
        return newarray;
    },

    swap:function(array,index1,index2){
        if(array.length==0 || index1<0 || index1>array.length || index2<index1 || index2>array.length)
        return null;

        var invertir=array[index1];

        array[index1]=array[index2];
        array[index2]=invertir;
        return array;
    },

    contains:function(array,value){
        return this.indexOf(array,value)!=-1;
    },

    concatenate:function(a1,a2){
        if(a1.length==0 && a2.length==0)
        return null;

        newarray=[];
        for (let i = 0; i < a1.length; i++) {
            newarray.push(a1[i]);
        }
        for (let i = 0; i < a2.length; i++) {
            newarray.push(a2[i]);
        }
        return newarray;
    }
};
module.exports=utils;