var page =1;
var score = 0;


function correct(){

  console.log("correct answer ");
  score++;

  console.log("score is :"+score);
  if(page === 10)
  {
    console.log("quiz is done");

    //setting the reults page

    document.getElementById('score1').innerHTML = score;
    var imagez = localStorage.getItem('LCimage');
    document.getElementById('userimage').setAttribute("src", imagez);
    var username = localStorage.getItem('LCusername');
    document.getElementById('text1').innerHTML += username;
    document.getElementById('text2').innerHTML += username;
    var email = localStorage.getItem('LCemail');
    document.getElementById('text3').innerHTML += email;
    var oldscore = localStorage.getItem('LCscore');
    var scoring;
    scoring = parseInt(oldscore);
    scoring += score;
    localStorage.setItem('LCscore',scoring);
    var newscore = localStorage.getItem('LCscore');
    document.getElementById('text4').innerHTML += newscore;
    if(scoring>=40){
      localStorage.setItem('LClevel',5);
    }
    if(scoring>=30){
      localStorage.setItem('LClevel',4);
    }
    if(scoring>=20){
      localStorage.setItem('LClevel',3);
    }
    if(scoring>=10){
      localStorage.setItem('LClevel',2);
    } else if(scoring>=5) {
      localStorage.setItem('LClevel',1);
    }
    var level = localStorage.getItem('LClevel');
    document.getElementById('text5').innerHTML += level;
    update(scoring,level);
    document.location.href = '#resultsPage';
  }
  else{
  page++;
    console.log("page number is "+page);
    moveing(page);
    $('#score'+page).append(score);
    document.location.href = '#question'+page+'page';

  }

}

function inCorrect(){

  console.log("incorrect answer");

  if(page === 10)
  {
    console.log("quiz is done");

    //setting the reults page

    document.getElementById('score1').innerHTML = score;
    var imagez = localStorage.getItem('LCimage');
    document.getElementById('userimage').setAttribute("src", imagez);
    var username = localStorage.getItem('LCusername');
    document.getElementById('text1').innerHTML += username;
    document.getElementById('text2').innerHTML += username;
    var email = localStorage.getItem('LCemail');
    document.getElementById('text3').innerHTML += email;
    var oldscore = localStorage.getItem('LCscore');
    var scoring;
    scoring = parseInt(oldscore);
    scoring += score;
    localStorage.setItem('LCscore',scoring);
    var newscore = localStorage.getItem('LCscore');
    document.getElementById('text4').innerHTML += newscore;
    if(scoring>=40){
      localStorage.setItem('LClevel',5);
    }
    if(scoring>=30){
      localStorage.setItem('LClevel',4);
    }
    if(scoring>=20){
      localStorage.setItem('LClevel',3);
    }
    if(scoring>=10){
      localStorage.setItem('LClevel',2);
    } else if(scoring>=5) {
      localStorage.setItem('LClevel',1);
    }
    var level = localStorage.getItem('LClevel');
    document.getElementById('text5').innerHTML += level;
    update(scoring,level);
    document.location.href = '#resultsPage';
  }
  else{
  page++;
    console.log("page number is "+page);
    moveing(page);
    $('#score'+page).append(score);
    document.location.href = '#question'+page+'page';

  }
}
