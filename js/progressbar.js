var id;

function moveing(x){
 this.x = x;
 clearInterval(id);
 //document.location.href = "index.html";
 var elem = 'progressBarIndicator'+x;
 console.log("inside move");
  var elem = document.getElementById(elem);
  var width = 1;
  id = setInterval(frame, 250);
  function frame(){
    if(width>100){
     clearInterval(id);
     console.log("TIMEOUT");
     inCorrect();
   } else {
     width++;
     elem.style.width = width + '%';
   }
  }

}

function move(){

  var elem = document.getElementById("progressBarIndicator1");
  var width = 1;
  id = setInterval(frame, 250);
  function frame(){
    if(width>100){
     clearInterval(id);
     console.log("TIMEOUT");
     inCorrect();

   } else {
     width++;
     elem.style.width = width + '%';
   }
  }

}
