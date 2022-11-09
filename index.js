import { words5,words6,words7,words8,words9,words10 } from "./words.js";
var numletters=sessionStorage.getItem("Letters");
var diff=sessionStorage.getItem("Difficulty");
var numtries=sessionStorage.getItem("Tries");
var words=[];
switch (numletters) {
  case "5":words=words5;break;
  case "6":words=words6;break;
  case "7":words=words7;break;
  case "8":words=words8;break;
  case "9":words=words9;break;
  case "10":words=words10;break;
  default:words=words5;break;
}
switch (diff) {
  case "Easy":
    currWord=words[Math.floor(Math.random() * (3334 - 0) + 0)];break;
  case "Medium":
    currWord=words[Math.floor(Math.random() * (6667 - 3334) + 3334)];break;
  case "Hard":
    currWord=words[Math.floor(Math.random() * (10000-6667) + 6667)];break;
  default:
    currWord=words[Math.floor(Math.random() * (3334 - 0) + 0)];break;
    break;
}
console.log(currWord);
var occurCurrWord = new Array(26).fill(0);
for (var i = 0; i < currWord.length; i++) {
  occurCurrWord[currWord[i].charCodeAt(0)-97]++;
}
console.log(occurCurrWord);
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}   
$('input[type="text"], textarea').each(function(){
  $(this).attr('readonly','readonly');
});
var it=0;
var arr=new Array(6);
var arrind=0;
var row='a';
var word=""
 $("body").keydown(function(e) {
  if(e.key=='Backspace')
  {
    $("."+row+it).css("border-color", "grey");
    var bs=$("."+row+(it--)).val('');
    word=word.substring(0, word.length - 1);
    console.log(word);
  }
  if(e.keyCode>=65&&e.keyCode<=122)
  {  if(it<5)
    {
      var ad=$("."+row+(++it)).val(e.key);
      word+=e.key;
      $("."+row+it).css("border-color", "black");
      console.log(word)
    }
  }
  if(it==5&&e.key=='Enter')
  {
    var occurWord = new Array(26).fill(0);
    for (var i = 0; i < word.length; i++)
    {
      occurWord[word[i].charCodeAt(0)-97]++;
    }
    var occurCurrWord1=occurCurrWord;
    for (var i = 0; i < currWord.length; i++) {
      for (var j = 0; j < word.length; j++) {
          if(word[j]==currWord[i]&&(i==j))
          {
            $("."+row+(i+1)).css("border-color", "green");
            occurWord[word[j].charCodeAt(0)-97]--;
            occurCurrWord1[currWord[i].charCodeAt(0)-97]--;
          }
          else if(word[j]==currWord[i])
          {
            if(occurCurrWord1[currWord[i].charCodeAt(0)-97]>0)
            {
              $("."+row+(j+1)).css("border-color", "red");
              occurWord[word[j].charCodeAt(0)-97]--;
              occurCurrWord1[currWord[i].charCodeAt(0)-97]--;
            }
          }
      }
      
    }
    it=0;
    row=String.fromCharCode(row.charCodeAt() + 1)
    arr[arrind]=word;
    arrind++;
    word="";
    
  }
  console.log(arr);
});
