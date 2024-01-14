var buttonList = document.getElementsByTagName("button");

var button = buttonList[0];

var wordList = [
'Passionné', 
'Persévérant', 
'Créative',
"Enthousiaste",
'<a href="#About_Me"> Découvrez-moi </a>'];

function changeWords(){
let i = 0;
var intervalId = setInterval(() => {
     button.innerHTML = wordList[i];
     i++; 
     if (i === wordList.length-1){
        clearInterval(intervalId);
        setTimeout(()=>{
            button.classList.add("white-button");
            button.innerHTML = wordList[i];
        },1000)
     }
}, 400);
}

setTimeout(changeWords,700);