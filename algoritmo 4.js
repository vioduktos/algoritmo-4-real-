
//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
function may(x) {
    var num= y;
    var may=[];
    for(var i=0;i<x.length;i++){
        if (x[i]>num){
            may.push(x[i]);
        }
    }
    return may;
  }
y=5;
console.log(may([8,2,3,4,5,7,9,10]));

//Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
function printAverage(x){
    sum = 0;
    max = 0;
    min = x[0];
    for(var i=0; i<x.length; i++){
      sum=sum+x[i]
    if (max<x[i]){
        max=x[i]
    }
    if (min>x[i]){
        min=x[i]
    }
 }
    console.log(max)
    console.log(min) 
    return(sum/x.length)
 
 }
 y = printAverage([1,2,3]);
 console.log(y);
   
 y = printAverage([2,5,8]);
 console.log(y);
 //Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
 function squareValue(x){
    val=[]
    for(var i=0;i<=x.length-1;i++){
     if(x[i]>0){
       val.push(x[i])
     }
     else{
        val.push("Dojo")
     }
 }
    return val
 }
 y = squareValue([1,-2,3]);
 console.log(y);
   
 y = squareValue([2,5,-8]);
 console.log(y);
 
//Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].
var array=[20,30,40,50,60,70]
var index = array.splice(2,3);
console.log(array)
&////////////////////////