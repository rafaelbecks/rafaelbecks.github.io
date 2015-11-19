
//Cthulhu Downloader Online
//Código javascript para manejar el JSON del requestJson y otras funciones.
//Autor: Rafael Becerra

function mostrareldiv(divMostrar) {
	document.getElementById(divMostrar).style.display = "block" ; 
}

function ocultareldiv(divOcultar) {
	document.getElementById(divOcultar).style.display = "none" ;
}

function selectFormat(idSelect){
	//document.getElementById("downloadMedia").href=String(urlDownload);
	if(document.getElementById('format'+idSelect).style.color == "green")
		document.getElementById('format'+idSelect).style.color = "black";
	else
		document.getElementById('format'+idSelect).style.color = "green";
}



function requestMedia(){
	var xmlhttp;
	var datosVideo; var listaFormatos="";
	if (window.XMLHttpRequest) {// codigo para IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else {// codigo para IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
//			document.getElementById("videoText").innerHTML=xmlhttp.responseText;
			requestJson=xmlhttp.responseText;
 			if(requestJson.indexOf('"error":')==-1){
				//Se carga los datos en la ventana    
				//VALIDACION DE FACEBOOK
			if (requestJson.indexOf('photo.php?v=')>0){ 
				datosVideo=jQuery.parseJSON(requestJson);
     				document.getElementById("tituloVideo").innerHTML=datosVideo.videos[0].title;
     				document.getElementById("thumbnailVideo").src=datosVideo.videos[0].thumbnail;
     				listaFormatos+='<a target="_blank" href="'+datosVideo.videos[0].url+'" download="'+datosVideo.videos[0].title+'.'+datosVideo.videos[0].ext+'"><li id="format'+i+'" onclick="selectFormat('+i+');">Formato: '+datosVideo.videos[0].ext+'. Resolución: '+datosVideo.videos[0].format+' <a></li><span onclick="mostrareldiv(\'preview\');     document.getElementById(\'previewVideo\').src=\''+datosVideo.videos[0].url+'\';"> Vista Previa (Prueba)</span>';

			        document.getElementById("formatosVideo").innerHTML=listaFormatos;    
				//document.getElementById("videoText").innerHTML=datosVideo.url;	
				//console.log(listaFormatos);
				ocultareldiv("loading");
				mostrareldiv("download");
			}else{				
				datosVideo=jQuery.parseJSON(requestJson);
     				document.getElementById("tituloVideo").innerHTML=datosVideo.videos[0].title;
     				document.getElementById("thumbnailVideo").src=datosVideo.videos[0].thumbnail;
     				document.getElementById("descripcionVideo").innerHTML=datosVideo.videos[0].description;
			     	for (var i=0;i<datosVideo.videos[0].formats.length;i++){ //Se cargan los videos del json
	if (datosVideo.videos[0].formats[i].format.indexOf("DASH video")<0 && datosVideo.videos[0].formats[i].format.indexOf("DASH webm")<0){
     				listaFormatos+='<a target="_blank" href="'+datosVideo.videos[0].formats[i].url+'" download="'+datosVideo.videos[0].title+'.'+datosVideo.videos[0].formats[i].ext+'"><li id="format'+i+'" onclick="selectFormat('+i+');">Formato: '+datosVideo.videos[0].formats[i].ext+'. Resolución: '+datosVideo.videos[0].formats[i].format+' <a></li><span onclick="mostrareldiv(\'preview\');      				document.getElementById(\'previewVideo\').src=\''+datosVideo.videos[0].formats[i].url+'\';"> Vista Previa (Prueba)</span>';
}}
			        document.getElementById("formatosVideo").innerHTML=listaFormatos;    
				//document.getElementById("videoText").innerHTML=datosVideo.url;	
				ocultareldiv("loading");
				mostrareldiv("download");
				console.log(listaFormatos);

			}
			}if(requestJson.indexOf('error":')>=0){
				ocultareldiv("loading");
				mostrareldiv('error');
			}

		}
	}

if((document.getElementById('urlMedia').value=="")){
document.getElementById("mensajeError").innerHTML="Debes insertar alguna URL </br></br>";
mostrareldiv('error');
}
else{
mostrareldiv('loading');
xmlhttp.open("GET","https://youtube-dl.appspot.com/api/info?url="+document.getElementById('urlMedia').value,true);
xmlhttp.send();
}
}
