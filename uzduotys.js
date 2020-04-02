metai = 1995;
menesis = 6;
diena = 6;

suma = metai%10 + menesis%10 + diena%10

console.log(suma);

A = -5;
B = 0;
C = -4;
D = 4;

var sankirtosPradzia;
var sankirtosPabaiga;

if (A < B){
    if (C < A && D < A){
        Console.log("Sankirtos nėra");
    }
    if (C < D){
        if (C < A){
            sankirtosPradzia = A;
        }
        else {
            sankirtosPradzia = C;
        }
    }
    else if (D < A){
        sankirtosPradzia = A;
    }
    else {
        sankirtosPradzia = D;
    }
}
else if (C < B && D < B){
    console.log("Sankirtos nėra");
}
else if (C < B){
    
}