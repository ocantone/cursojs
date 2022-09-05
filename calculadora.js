
// cardio
// otorrini
// flebo
// neuro
// neumo

window.onload = ()=> pantalla=document.getElementById("textoPantalla");

    x="0";   //n&uacute;mero en pantalla
    xi=1;    //iniciar n&uacute;mero en pantalla: 1=si; 0=no;
    coma=0;  //estado coma decimal 0=no, 1=si;
    ni=0;    //n&uacute;mero oculto o en espera.
    op="no"; //operaci&oacute;n en curso; "no" =  sin operaci&oacute;n.
    
    //mostrar n&uacute;mero en pantalla seg&uacute;n se va escribiendo:
    function numero(xx) { //recoge el n&uacute;mero pulsado en el argumento.
             if ( x=="0" || xi==1  ) {	// inicializar un n&uacute;mero, 
                pantalla.innerHTML=xx; //mostrar en pantalla
                x=xx; //guardar n&uacute;mero
                if (xx==".") { //si escribimos una coma al principio del n&uacute;mero
                   pantalla.innerHTML="0."; //escribimos 0.
                   x=xx; //guardar n&uacute;mero
                   coma=1; //cambiar estado de la coma
                   }
               }
               else { //continuar escribiendo un n&uacute;mero
                   if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                       pantalla.innerHTML+=xx;
                       x+=xx;
                       coma=1; //cambiar el estado de la coma  
                   }
                   //si intentamos escribir una segunda coma decimal no realiza ninguna acci&oacute;n.
                   else if (xx=="." && coma==1) {} 
                   //Resto de casos: escribir un n&uacute;mero del 0 al 9: 	 
                   else {
                       pantalla.innerHTML+=xx;
                       x+=xx
                   }
                }
                xi=0 //el n&uacute;mero est&aacute; iniciado y podemos ampliarlo.
             }
    function operar(s) {
             igualar() //si hay operaciones pendientes se realizan primero
             ni=x //ponemos el 1º n&uacute;mero en "numero en espera" para poder escribir el segundo.
             op=s; //guardamos tipo de operaci&oacute;n.
             xi=1; //inicializar pantalla.
             }	
    function igualar() {
             if (op=="no") { //no hay ninguna operaci&oacute;n pendiente.
                pantalla.innerHTML=x;	//mostramos el mismo n&uacute;mero	
                }
             else { //con operaci&oacute;n pendiente resolvemos
                sl=ni+op+x; // escribimos la operaci&oacute;n en una cadena
                sol=eval(sl) //convertimos la cadena a c&oacute;digo y resolvemos
                pantalla.innerHTML=sol //mostramos la soludi&oacute;n
                x=sol; //guardamos la soluci&oacute;n
                op="no"; //ya no hayn operaciones pendientes
                xi=1; //se puede reiniciar la pantalla.
                }
            }
    function raizc() {
             x=Math.sqrt(x) //resolver ra&iacute;z cuadrada.
             pantalla.innerHTML=x; //mostrar en pantalla resultado
             op="no"; //quitar operaciones pendientes.
             xi=1; //se puede reiniciar la pantalla 
             }
    function porcent() { 
             x=x/100 //dividir por 100 el n&uacute;mero
             pantalla.innerHTML=x; //mostrar en pantalla
             igualar() //resolver y mostrar operaciones pendientes
             xi=1 //reiniciar la pantalla
             }
    function opuest() { 
             nx=Number(x); //convertir en n&uacute;mero
             nx=-nx; //cambiar de signo
             x=String(nx); //volver a convertir a cadena
             pantalla.innerHTML=x; //mostrar en pantalla.
             }
    function inve() {
             nx=Number(x);
             nx=(1/nx);
             x=String(nx);		 
             pantalla.innerHTML=x;
             xi=1; //reiniciar pantalla al pulsar otro n&uacute;mero.
             }
    
    function retro(){ //Borrar s&oacute;lo el &uacute;ltimo n&uacute;mero escrito.
             cifras=x.length; //hayar n&uacute;mero de caracteres en pantalla
             br=x.substr(cifras-1,cifras) //describir &uacute;ltimo caracter
             x=x.substr(0,cifras-1) //quitar el ultimo caracter
             if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
             if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
             pantalla.innerHTML=x; //mostrar resultado en pantalla	 
             }
    function borradoParcial() {
            pantalla.innerHTML=0; //Borrado de pantalla;
            x=0;//Borrado indicador n&uacute;mero pantalla.
            coma=0;	//reiniciamos tambi&eacute;n la coma				
            }
    function borradoTotal() {
             pantalla.innerHTML=0; //poner pantalla a 0
             x="0"; //reiniciar n&uacute;mero en pantalla
             coma=0; //reiniciar estado coma decimal 
             ni=0 //indicador de n&uacute;mero oculto a 0;
             op="no" //borrar operaci&oacute;n en curso.
             }
    