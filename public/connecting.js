var str="";
var name=prompt("Enter Your Name")||"Player";
setInterval(()=>
{
    document.getElementById("connect").innerHTML="Connecting"+str;
    str=str+".";
    if(str==="....")
        str="";
},1000)
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
async function getJson1() {
    var response = await fetch('http://localhost:5000/api/v1/connect/',{method: 'POST'});
    var data = await response.json()
    return data.id;
}
var playerId= await getJson1();
console.log(playerId);
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJson2() {
    var data = null;
    do
    {
      var response = await fetch('http://localhost:5000/api/v1/match/'+playerId,{method: 'POST'});
      data = await response.json()
      console.log(data);
      await sleep(2000);
    }while(data.result.GameId==null);
    window.location.href = "http://localhost:5000/multiplayer";
    return data;
  }
    

var game = getJson2();