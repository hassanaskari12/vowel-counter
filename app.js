var user = prompt("Enter a word");
var usersmallletter = user.toLowerCase();
var vowel = 0;
for(var i =0 ;i<usersmallletter.length;i++){
    if(usersmallletter[i] === "a"){
        vowel++
    }else if(usersmallletter[i] === "e"){
        vowel++
    }else if(usersmallletter[i] === "i"){
        vowel++
    }else if(usersmallletter[i] === "o"){
        vowel++
    }else if(usersmallletter[i] === "u"){
        vowel++
    }
}
alert(`Total vowel in your word = ${vowel}`)