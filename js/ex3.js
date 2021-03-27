//Exercise 3 - Arrays
//a
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5 - 1], months[11 - 1]);

//b
var sortedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
sortedMonths.sort();
console.log(sortedMonths);

//c
var monthsC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsC.unshift('First Month');
monthsC.push('Last Month');
console.log(monthsC);

//d
var monthsD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsD.pop();
monthsD.shift();
console.log(monthsD);

//e
var monthsE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsE.reverse();
console.log(monthsE);

//f
var monthsF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthsF = monthsF.join('-');
console.log(monthsF);

//g
var monthsG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sliceMonths = monthsG.slice(4, 11);
console.log(sliceMonths);