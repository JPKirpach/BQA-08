//Exercise 5 - For
//a
var sports = ['football', 'basketball', 'tennis', 'rugby', 'volleyball'];
for(var i = 0; i <= sports.length - 1; i++){
    alert(sports[i]);
    console.log(sports[i]);
}

//b
var sportsB = ['football', 'basketball', 'tennis', 'rugby', 'volleyball'];
for(var i = 0; i <= sportsB.length - 1; i++){
    sportsB[i] = sportsB[i].substring(0, 1).toUpperCase() + sportsB[i].substring(1, sportsB[i].length).toLowerCase();
    alert(sportsB[i]);
    console.log(sportsB[i]);
}

//c
var sentence = '';
var sportsC = ['football', 'basketball', 'tennis', 'rugby', 'volleyball'];
for(var i = 0; i <= sportsC.length - 1; i++){
    if(i == 0){
        sentence = sportsC[i];
    }else{
        sentence = sentence + ' & ' + sportsC[i];
    }
}
alert(sentence);
console.log(sentence);

//d
var iterationArray = [];
for(var i = 0; i < 10; i++){
    iterationArray.push(i);
}
console.log(iterationArray);


