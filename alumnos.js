const dias = 4; //Cantidad de dias a tomar asistencia
let cantidad = prompt ("Cuántos alumnos son?"); //cantidad de alumnos
let alumnosTotales = []; //Matriz donde almacenamos nombre y cantidad de asistencias.

//Llenamos la matriz con los nombres de cada alumno:
for(i=0; i<cantidad; i++){
    let nomb = prompt( "Nombre del alumnx:" + (i+1) );
    alumnosTotales[i] = [nomb, 0];
}

//Funcion tomarAsistencia. Suma en la columna 1 si si ingresa 'p' o "P".
const tomarAsistencia = (posicion) =>{
    let presencia = prompt(alumnosTotales[posicion][0]).toUpperCase();
//     document.getElementById("midiv").innerHTML = presencia;
    if (presencia == "P") alumnosTotales[posicion][1]++;
}

//
for( i=0; i<dias; i++){
    for( alumno in alumnosTotales){
        tomarAsistencia(alumno);
    }}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ______Presencias: ${alumnosTotales[alumno][1]} <br>
    ______Ausencias:  ${dias - alumnosTotales[alumno][1]} <br><br>`;
document.write(resultado);
}

//