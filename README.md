Para utilizar la misma base de datos que use en mi proyecto, recomiendo utilizar el programa XAMPP. 
Luego dentro del XAMPP dar star al Apache y MySQL
Una vez encendido, dar admin a MySQL y se va a abrir en su buscador 'http://localhost/phpmyadmin/'
Luego crear una nueva base de datos con el nombre recomendado 'pokemonbd'
Una vez creada, ir al sector 'Importar'
Ahí precionar 'Seleccionar Archivo'
y subir el archivo sql que se proporciona en el siguiente link de Drive
Link archivo sql Base de datos cargada para phpMyAdmin
https://drive.google.com/drive/folders/1lkkp--3X1Fw9S2es-Uu_t0or5FZvJeFk?usp=sharing
una vez insertado el archivo sql, se les va a crear un tabla con pokemones ya creados.
Luego descargar el la carpeta Back desde este repositorio. Y una vez abierto en Visual Studio Code, ejercutarlo en la terminal con el siguiente comando.
node app.js
Luego ir al repositorio del angular-pokemon https://github.com/panchosantiago0/angular-pokemon.git, descargarlo y abrirlo en Visual Studio Code, y ejecutar el comando 
ng serve
