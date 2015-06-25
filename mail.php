<?php 

$msg = "Probando";
$mensajeEnviar = wordwrap($msg,70);

if(@mail("rafaelbecks93@gmail.com","asunto asuntado",$mensajeEnviar)){
	echo "Tu mensaje fue enviado satisfactoriamente, me pondré en contacto cuanto antes";
}else
  {
  	echo "Ocurrió un error enviando tu mensaje";
  }

  /*<?php 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@intertrueque.es>' . "\r\n";

        $msg = '<html><meta http-equiv="content-type" content="text/html; charset=utf-8" />
<body style="font-family:Arial;">
    


<div style="font-size:16px;line-height:20px;font-family:helvetica;font-weight:300;margin:0;padding:0">
<table bgcolor="#e8e8e8" border="0" cellpadding="0" cellspacing="0" height="100%" style="border-spacing:0;padding-top:10px;background-color:#e8e8e8" width="100%">
<tbody>
<tr>
<td align="center" valign="top">
<table bgcolor="rgb(255, 255, 255)" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border:1px solid rgb(221,221,221);background-color:rgb(255,255,255);max-width:600px" width="600">
<tbody>
<tr>
<td align="center" valign="top">
<table border="0" cellpadding="0" cellspacing="0" height="200px" style="border-spacing:0;max-width:640px">
<tbody>
<tr>
<td height="55" style="text-align:center;font-family:helvetica,arial,sans-serif;border-bottom:4px solid #7A9640" valign="top">
<a href="http://intertrueque.es" style="text-decoration:none;color:#333" target="_blank">
<img align="center" alt="intertrueque logo" width="300" src="http://intertrueque.es/images/logotipo.png" style="border:none;outline:none;margin:10px" width="117" class="CToWUd"></a>
</td>
</tr>
<tr>
<td style="padding:20px 20px 0px 20px;font-family:helvetica,arial,sans-serif;font-weight:300;color:#3d3d3d;background:#f5f5f5;font-size:14px;text-align:left" valign="top">
<p>Estimado Usuario,
<br><br>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br><br>
</p>

Gracias,
<br><br>
<strong>El equipo de Intertrueque</strong>
<br>
<br>
</body>
        </html>';
       // $mensajeEnviar = wordwrap($msg,70);

        if(@mail("rafaelbecks93@gmail.com","Intertrueque",$msg)){
            echo "Tu mensaje fue enviado satisfactoriamente, me pondré en contacto cuanto antes";
        }else
          {
            echo "Ocurrió un error enviando tu mensaje";
          }        
?>*/
?>
