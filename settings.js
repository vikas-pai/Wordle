$(".numletters").click(function(){
    console.log($(".numlettersoutput").html());
  });
  $(".numtries").click(function(){
    console.log($(".numtriesoutput").html());
  });
  $('input[type="radio"]').on('click', function(e) {
    console.log(e.currentTarget.value);
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
