$(".numletters").click(function(){
    var numletters=$(".numlettersoutput").html();
    localStorage.setItem("Letters",numletters);
  });
  $(".numtries").click(function(){
    var numtries=$(".numtriesoutput").html();
    localStorage.setItem("Tries",numtries);
  });
  $('input[type="radio"]').on('click', function(e) {
    var radio=(e.currentTarget.value);
    localStorage.setItem("Difficulty",radio);
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
