var numletters = 5;
var diff = "Easy";
var numtries = 6;
if(window.performance.getEntriesByType("navigation")[0].type=='reload'){
  window.location.href = "http://localhost:5000/connecting";
}
var urlString=window.location.href;
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
var gameId=queryString.get("gameId");
var playerId=queryString.get("playerId");
console.log(gameId," ",playerId);
async function getScore() {
    var response = await fetch('http://localhost:5000/api/v1/getGameJson/'+gameId,{method: 'GET'});
    var data = await response.json()
    return data;
  }
var gameJson=await getScore();
console.log(gameJson.result.wordlist);

var htmlString = "";
var row1 = 'a';
var score=0;
for (var i = 0; i < numtries; i++) {
  for (var j = 1; j <= numletters; j++) {
    htmlString = htmlString + "<input type=\"text\" name=\"words\" class=\"" + row1 + " " + row1 + j + "\">";
  }
  row1 = String.fromCharCode(row1.charCodeAt() + 1);
  htmlString = htmlString + "<br>";
}
var countDownDate = new Date().getTime() + (5 * 60 * 1000);

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(seconds<10){
    document.getElementById("time").innerHTML="0"+minutes + ":0" + seconds;
  }
  else{
    document.getElementById("time").innerHTML="0"+minutes + ":" + seconds;
  }
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML="00:00";
  }
}, 1000);

$(".wordlebox").html(htmlString)
var words = gameJson.result.wordlist;
$('input[type="text"], textarea').each(function () {
  $(this).attr('readonly', 'readonly');
});
var it = 0;
var arr = new Array(numtries);
var arrind = 0;
var row = 'a';
var word = ""
var presentWord = 0;
var currWord=words[presentWord];
console.log(currWord);
var occurCurrWord = new Array(26).fill(0);
for (var i = 0; i < currWord.length; i++) {
  console.log(currWord[i].charCodeAt(0) - 97)
  occurCurrWord[currWord[i].charCodeAt(0) - 97]++;
}
$("body").keydown(function (e) {
  if (e.key == 'Backspace') {
    $("." + row + it).css("border-color", "grey");
    $("." + row + (it--)).val('');
    word = word.substring(0, word.length - 1);
  }
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    e.key = e.key.toLowerCase();
    if (it < numletters) {
      $("." + row + (++it)).val(e.key);
      word += e.key;
      console.log(word);
      $("." + row + it).css("border-color", "black");
    }
  }
  if (it == numletters && e.key == 'Enter') {
    var occurWord = new Array(26).fill(0);
    for (var i = 0; i < word.length; i++) {
      occurWord[word[i].charCodeAt(0) - 97]++;

    }
    var occurCurrWord1 = occurCurrWord.slice();
    //for the letters present in the correct position
    var flag = new Array(word.length).fill(0);
    for (var j = 0; j < word.length; j++) {
      if (word[j] == currWord[j]) {
        $("." + row + (j + 1)).css("background-color", "green");
        $("." + row + (j + 1)).css("color", "white");
        occurCurrWord1[currWord[j].charCodeAt(0) - 97]--;
        flag[j]=2;
      }
    //for the letters present in the word but in wrong position
    }
    for (var i = 0; i < 26; i++) {
      if (occurWord[i] > 0 && occurCurrWord1[i] > 0) {
        var cow = Math.min(occurWord[i], occurCurrWord1[i]);
        for (var j = 0; j < word.length && cow > 0; j++) {
          //checking whether if the characther of the entered word is present  and that characther at that index is not matching with the generated word
          if (word[j] == String.fromCharCode("a".charCodeAt() + i) && word[j] != currWord[j]) {
            $("." + row + (j + 1)).css("background-color", "#FFC000");
            $("." + row + (j + 1)).css("color", "white");
            cow--;
            flag[j]=1;
          }
        }
      }

    }
    j = 0;
    //For the letters not present is the auto-generated word
    for (var j = 0; j < word.length; j++) {
      if (!flag[j]) {
        $("." + row + (j + 1)).css("background-color", "grey");
        $("." + row + (j + 1)).css("color", "white");
      }
    }
    
    for(var i=0;i<word.length;i++) {
      $("."+row+(i+1)).addClass("animated");
    }
    var greenflag=0;
    for (var j = 0; j < word.length; j++) {
      if (flag[j]!=2) {
        greenflag=1;
      }
    }
    it = 0;
    row = String.fromCharCode(row.charCodeAt() + 1);
    arr[arrind] = word;
    arrind++;
    word = "";
    if(presentWord==11){
      console.log("Game Over");
    }
    for(var i=0;i<word.length;i++)
    {
        flag[i]=0;
    }
    if(row=='g'||greenflag==0)
    {
      it = 0;
      arr = new Array(numtries);
      arrind = 0;
      word = "";
      presentWord++;
      currWord=words[presentWord];
      console.log(currWord);
      console.log(score);
      occurCurrWord = new Array(26).fill(0);
      for (var i = 0; i < currWord.length; i++) {
        console.log(currWord[i].charCodeAt(0) - 97)
        occurCurrWord[currWord[i].charCodeAt(0) - 97]++;
      }
      if(greenflag==0)
      {
        score+=6-(row.charCodeAt(0)-97)+5;
        console.log("Score is:",score);
      }
      $(".wordlebox").html(htmlString);
      row = 'a';
    }
  }
});
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
// async function getScore() {
//   var response = await fetch('http://localhost:5000/api/v1/getScore?gameId'+gameId+'&playerScore',{method: 'GET'});
//   var data = await response.json()
//   return data.id;
// }