import { words5,words6,words7,words8,words9,words10 } from "./words.js";
var numletters=sessionStorage.getItem("Letters");
console.log(typeof(numletters));
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
console.log(words);
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
  if(e.keyCode>=65||e.keyCode>=122)
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
    it=0;
    row=String.fromCharCode(row.charCodeAt() + 1)
    arr[arrind]=word;
    arrind++;
    word="";
    
  }
  console.log(arr);
});
