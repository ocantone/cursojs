
// cardio
// otorrini
// flebo
// neuro
// neumo


window.onload = ()=> display=document.getElementById("textoPantalla");

    num_display="0";   //n&uacute;mero en display
    num_inicial=true;    //iniciar n&uacute;mero en display: 1=si; 0=no;
    coma=false;  //estado coma decimal 0=no, 1=si;
    num_espera=0;    //n&uacute;mero oculto o en espera.
    operacion="no"; //operaci&oacute;n en curso; "no" =  sin operaci&oacute;n.
    
    //mostrar n&uacute;mero en display seg&uacute;n se va escribiendo:
    function numero(valor) { //recoge el n&uacute;mero pulsado en el argumento.
             if ( num_display=="0" || num_inicial  ) {	// inicializar un n&uacute;mero, 
                display.innerHTML=valor; //mostrar en display
                num_display=valor; //guardar n&uacute;mero
                if (valor==".") { //si escribimos una coma al principio del n&uacute;mero
                   display.innerHTML="0."; //escribimos 0.
                   num_display=valor; //guardar n&uacute;mero
                   coma=true; //cambiar estado de la coma
                   }
               }
               else { //continuar escribiendo un n&uacute;mero
                   if (valor=="." && !coma) { //si escribimos una coma decimal pòr primera vez
                       display.innerHTML+=valor;
                       num_display+=valor;
                       coma=true; //cambiar el estado de la coma  
                   }
                   //si intentamos escribir una segunda coma decimal no realiza ninguna acci&oacute;n.
                   else if (valor=="." && coma==1) {} 
                   //Resto de casos: escribir un n&uacute;mero del 0 al 9: 	 
                   else {
                       display.innerHTML+=valor;
                       num_display+=valor
                   }
                }
               num_inicial=false //el n&uacute;mero est&aacute; iniciado y podemos ampliarlo.
             }
    function operar(s) {
             igualar() //si hay operaciones pendientes se realizan primero
             num_espera=num_display //ponemos el 1º n&uacute;mero en "numero en espera" para poder escribir el segundo.
             operacion=s; //guardamos tipo de operaci&oacute;n.
            num_inicial=true; //inicializar display.
             }	
    function igualar() {
             if (operacion=="no") { //no hay ninguna operaci&oacute;n pendiente.
                display.innerHTML=num_display;	//mostramos el mismo n&uacute;mero	
                }
             else { //con operaci&oacute;n pendiente resolvemos
                cadena=num_espera+operacion+num_display; // escribimos la operaci&oacute;n en una cadena
                resultado=eval(cadena) //convertimos la cadena a c&oacute;digo y resolvemos
                display.innerHTML=resultado //mostramos la soludi&oacute;n
                num_display=resultado; //guardamos la soluci&oacute;n
                operacion="no"; //ya no hayn operaciones pendientes
               num_inicial=true; //se puede reiniciar la display.
                }
            }
    function raizc() {
             num_display=Math.sqrt(num_display) //resolver ra&iacute;z cuadrada.
             display.innerHTML=num_display; //mostrar en display resultado
             operacion="no"; //quitar operaciones pendientes.
            num_inicial=true; //se puede reiniciar la display 
             }
    function porcent() { 
             num_display=num_display/100 //dividir por 100 el n&uacute;mero
             display.innerHTML=num_display; //mostrar en display
             igualar() //resolver y mostrar operaciones pendientes
            num_inicial=true //reiniciar la display
             }
    function opuest() { 
             nx=Number(num_display); //convertir en n&uacute;mero
             nx=-nx; //cambiar de signo
             num_display=String(nx); //volver a convertir a cadena
             display.innerHTML=num_display; //mostrar en display.
             }
    function inve() {
             nx=Number(num_display);
             nx=(1/nx);
             num_display=String(nx);		 
             display.innerHTML=num_display;
            num_inicial=true; //reiniciar display al pulsar otro n&uacute;mero.
             }
    
    function retro(){ //Borrar s&oacute;lo el &uacute;ltimo n&uacute;mero escrito.
             cifras=num_display.length; //hayar n&uacute;mero de caracteres en display
             br=num_display.substr(cifras-1,cifras) //describir &uacute;ltimo caracter
             num_display=num_display.substr(0,cifras-1) //quitar el ultimo caracter
             if (num_display=="") {num_display="0";} //si ya no quedan caracteres, pondremos el 0
             if (br==".") {coma=false;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
             display.innerHTML=num_display; //mostrar resultado en display	 
             }
    function borradoParcial() {
            display.innerHTML=0; //Borrado de display;
            num_display=0;//Borrado indicador n&uacute;mero display.
            coma=false;	//reiniciamos tambi&eacute;n la coma				
            }
    function borradoTotal() {
             display.innerHTML=0; //poner display a 0
             num_display="0"; //reiniciar n&uacute;mero en display
             coma=false; //reiniciar estado coma decimal 
             num_espera=0 //indicador de n&uacute;mero oculto a 0;
             operacion="no" //borrar operaci&oacute;n en curso.
             }
    