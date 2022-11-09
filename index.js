import { words5,words6,words7,words8,words9,words10 } from "./words.js";
var numletters=sessionStorage.getItem("Letters");
var diff=sessionStorage.getItem("Difficulty");
var numtries=sessionStorage.getItem("Tries");
var htmlString="";
var row1='a';
for (var i = 0; i < numtries; i++) {
  for (var j = 1; j <=numletters; j++) {
    htmlString=htmlString+"<input type=\"text\" name=\"words\" class=\""+row1+" "+row1+j+"\">";
  }
  row1=String.fromCharCode(row1.charCodeAt() + 1);
  htmlString=htmlString+"<br>";
}

$(".wordlebox").html(htmlString)
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
var currWord;
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
$('input[type="text"], textarea').each(function(){
  $(this).attr('readonly','readonly');
});
var it=0;
var arr=new Array(numtries);
var arrind=0;
var row='a';
var word=""
 $("body").keydown(function(e) {
  if(e.key=='Backspace')
  {
    $("."+row+it).css("border-color", "grey");
    var bs=$("."+row+(it--)).val('');
    word=word.substring(0, word.length - 1);
  }
  if(e.keyCode>=65&&e.keyCode<=122)
  {  if(it<numletters)
    {
      var ad=$("."+row+(++it)).val(e.key);
      word+=e.key;
      $("."+row+it).css("border-color", "black");
    }
  }
  if(it==numletters&&e.key=='Enter')
  {
    var occurWord = new Array(26).fill(0);
    for (var i = 0; i < word.length; i++)
    {
      occurWord[word[i].charCodeAt(0)-97]++;
    }
    var occurCurrWord1=occurCurrWord.slice();
    for (var j = 0; j < word.length; j++) 
    {
        if(word[j]==currWord[j])
        {
          $("."+row+(j+1)).css("border-color", "green");
          occurWord[word[j].charCodeAt(0)-97]--;
          occurCurrWord1[currWord[j].charCodeAt(0)-97]--;
        }
    }
    for (var i = 0; i<26; i++) {
      if(occurWord[i]>0&&occurCurrWord1[i]>0)
      {
        var cow=Math.min(occurWord[i],occurCurrWord1[i]);
        for(var j=0;j<word.length&&cow>0;j++)
        {
          if(word[j]==String.fromCharCode("a".charCodeAt() + i)&&word[j]!=currWord[j])
          {
            $("."+row+(j+1)).css("border-color", "red");
            cow--;
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
});
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