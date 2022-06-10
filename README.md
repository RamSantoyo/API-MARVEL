# API-MARVEL
Consulta de API con key

# Requerimientos:

>1. Crear cuenta en https://developer.marvel.com/.
>2. Obtener credenciales public key Y private key
>Autenticación para aplicaciones del lado del servidor
Las aplicaciones del lado del servidor deben pasar dos parámetros además del parámetro apikey:

ts : una marca de tiempo (u otra cadena larga que puede cambiar solicitud por solicitud)
hash : un resumen md5 del parámetro ts, su clave privada y su clave pública (p. ej. md5(ts+privateKey+publicKey)
Por ejemplo, un usuario con una clave pública de "1234" y una clave privada de "abcd" podría construir una llamada válida de la siguiente manera:
http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (el valor hash es el resumen md5 de 1abcd1234)
Generar el HASH en alguna pagina web.




