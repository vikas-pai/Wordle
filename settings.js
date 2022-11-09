$(".numletters").attr("value",sessionStorage.getItem("Letters")||5);
$(".numlettersoutput").html(sessionStorage.getItem("Letters")||5);
$(".numtries").attr("value",sessionStorage.getItem("Tries")||6);
$(".numtriesoutput").html(sessionStorage.getItem("Tries")||6);
$("#"+sessionStorage.getItem("Difficulty")).attr("checked",true);
$(".numlettersoutput").html(sessionStorage.getItem("Letters")||5);
$(".numletters").click(function(){
    var numletters1=$(".numlettersoutput").html();
    sessionStorage.setItem("Letters",numletters1);
  });
  $(".numtries").click(function(){
    var numtries=$(".numtriesoutput").html();
    sessionStorage.setItem("Tries",numtries);
  });
  $('input[type="radio"]').on('click', function(e) {
    var radio=(e.currentTarget.value);
    sessionStorage.setItem("Difficulty",radio);
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
