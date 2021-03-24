//Exercise 3 - If Else
//a
var randomNumber = Math.random();
if(randomNumber >= 0.5){
    alert('Greater than 0,5');
    console.log('Greater than 0,5');
}else{
    alert('Lower than 0,5');
    console.log('Lower than 0,5');
}

//b
var age = 60;
if (age < 2){
    alert('Bebe');
    console.log('Bebe');
} else if(age <= 12){
    alert('Nino');
    console.log('Nino');
} else if(age <= 19){
    alert('Adolescente');
    console.log('Adolescente');
} else if(age <= 30){
    alert('Joven');
    console.log('Joven');
} else if(age <= 60){
    alert('Adulto');
    console.log('Adulto');
} else if(age <= 75){
    alert('Adulto mayor');
    console.log('Adulto mayor');
} else{
    alert('Anciano');
    console.log('Anciano');
}