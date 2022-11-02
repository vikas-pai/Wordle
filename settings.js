$(".numletters").click(function(){
    console.log($(".numlettersoutput").html());
  });
  $(".numtries").click(function(){
    console.log($(".numtriesoutput").html());
  });
  $('input[type="radio"]').on('click', function(e) {
    alert(e.currentTarget.value);
});
