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
word=""
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
