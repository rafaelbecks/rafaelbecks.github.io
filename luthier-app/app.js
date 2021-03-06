// LUTHIER APP
// AUTOR : RAFAEL BECERRA
// FECHA 27/05/2014

function CalcularDistancia(numTrastes, medidaEscala){
	var trastes = new Array();
	var distanciaPuente =new Array();
	var distanciaCejuela = new Array();
	trastes[0]=medidaEscala/17.817;
	distanciaPuente[0]=medidaEscala - trastes[0];
	distanciaCejuela[0]=trastes[0];

	for(var i=1; i<numTrastes; i++){
		trastes[i]=distanciaPuente[i-1]/17.817;
		distanciaPuente[i]=distanciaPuente[i-1] - trastes[i];
		distanciaCejuela[i]=distanciaCejuela[i - 1] + trastes[i];

	}
	
	var newContent='</br><table data-role="table" id="table-column-toggle" data-mode="columntoggle" class="ui-responsive table-stroke"><thead><tr><th data-priority="1"><strong>Num</strong></th><th><strong>Traste</strong</th><th data-priority="3"><strong>Dist. Puente</strong></th><th data-priority="2"><abbr><strong>Dist. Cejuela</strong></abbr></th></tr></thead><tbody>';
             
		for(var i=0;i<numTrastes;i++){
		var i2=i+1;
newContent+='<tr><th>'+i2+'</th><td><a data-rel="external"><center>'+trastes[i].toFixed(2)+'</center></a></td><td><center>'+distanciaPuente[i].toFixed(2)+'</center></td><td><center>'+distanciaCejuela[i].toFixed(2)+'</center></td></tr>';
		}

newContent+='</tbody></table><center><form></br><a id="button" type="button" data-theme="b" onclick="document.location=\'index.html\'">Volver</a></center></form>'		 

document.getElementById('tablaTrastes').innerHTML=newContent;
document.getElementById('mainFrame').style.display='none';
console.log(newContent);
}

function conversor(inicial, final, medida){
var resultado=0;
if(inicial=='cm' && final=='inch'){
resultado=medida/2.54;
}
if(inicial=='inch' && final=='cm'){
resultado=medida*2.54;
}
if(inicial=='mm' && final=='inch'){
resultado=medida/25.4;
}
if(inicial=='inch' && final=='mm'){
resultado=medida*25.4;
}

document.getElementById("salida").value=resultado.toFixed(3);
}
