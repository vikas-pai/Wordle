var countDownDate = new Date().getTime() + (5 * 60 * 1000);

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  DocumentTimeline(minutes + ":" + seconds);
  
  if (distance < 0) {
    clearInterval(x);
    console.log("00:00");
  }
}, 1000);