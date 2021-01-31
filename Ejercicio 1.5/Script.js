var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let name = prompt('¿Cuál es tu DNI?');
let age = prompt('Cual la letra de tu DNI?');
const letraDNI = letras[name%23];
if (name <0 || name > 99999999){alert('El DNI es erróneo')};
while (name >0 && name > 99999999) {name%23 }
alert('Tu letra del DNI es '+ letraDNI);







    






