
var questionsList = new Array();


function getQuestions(category) {

    var params = {
        //Request parameters
        "LineCode": "BL",
    }
    var cteg;
    switch(category) {
      case "gk":
          cteg = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
          break;
      case "books":
          cteg = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple';
          break;
      case "film":
          cteg = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';
          break;
      case "music":
          cteg = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';
          break;
      case "theater":
          cteg = 'https://opentdb.com/api.php?amount=10&category=13&difficulty=easy&type=multiple';
          break;
      case "tv":
          cteg = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';
          break;
      case "vg":
          cteg = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple';
          break;
      case "math":
          cteg = 'https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple';
          break;
      case "nature":
          cteg = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple';
          break;
      case "computer":
          cteg = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
          break;
      case "myth":
          cteg = 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple';
          break;
      case "sport":
          cteg = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';
          break;
      case "geo":
          cteg = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple';
          break;
      case "hist":
          cteg = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
          break;
      case "poli":
          cteg = 'https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&type=multiple';
          break;
      case "art":
          cteg = 'https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple';
          break;
      case "celeb":
          cteg = 'https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple';
          break;
      case "animal":
          cteg = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';
          break;
      case "vh":
          cteg = 'https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple';
          break;
      case "comic":
          cteg = 'https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple';
          break;
      case "gadget":
          cteg = 'https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple';
          break;
      case "cartoon":
          cteg = 'https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple';
          break;

    }
    $.ajax({

      type: 'GET',
      url: cteg,
     /* success: function(data) {
        console.log('success',data);

      }*/

      data: "{body}",

      })

     .done(function(data) {

         console.log(data);
         //console.log(data.results.length);

        for( var x=0; x < data.results.length; x++ ){

            var id = x;
            var question =  data.results[x].question;
            var correct_answer =  data.results[x].correct_answer;
            var incorrect_answers = data.results[x].incorrect_answers;
            var thisQuestion = new Question(id, question, correct_answer, incorrect_answers);
            questionsList.push(thisQuestion);

        }

          for(x=1;x<=10;x++){


            document.getElementById('question'+x).innerText = questionsList[x-1].fullQuestion;
            //random assignment of values
            var correctValue = Math.floor( 1 + Math.random() * 4 );
            document.getElementById('choice'+x+'-'+correctValue).innerText = questionsList[x-1].correctAnswer;

          if(correctValue ===1)
            {
            document.getElementById('choice'+x+'-2').innerText = questionsList[x-1].allAnswers[0];
            document.getElementById('choice'+x+'-3').innerText = questionsList[x-1].allAnswers[1];
            document.getElementById('choice'+x+'-4').innerText = questionsList[x-1].allAnswers[2];


            document.getElementById('choice'+x+'-1').addEventListener('click',correct);
            document.getElementById('choice'+x+'-2').addEventListener('click',inCorrect);
            document.getElementById('choice'+x+'-3').addEventListener('click',inCorrect);
            document.getElementById('choice'+x+'-4').addEventListener('click',inCorrect);


            } else if(correctValue ===2)
            {
            document.getElementById('choice'+x+'-1').innerText = questionsList[x-1].allAnswers[0];
            document.getElementById('choice'+x+'-3').innerText = questionsList[x-1].allAnswers[1];
            document.getElementById('choice'+x+'-4').innerText = questionsList[x-1].allAnswers[2];
            document.getElementById('choice'+x+'-1').addEventListener('click',inCorrect);
            document.getElementById('choice'+x+'-2').addEventListener('click',correct);
            document.getElementById('choice'+x+'-3').addEventListener('click',inCorrect);
            document.getElementById('choice'+x+'-4').addEventListener('click',inCorrect);
          } else if(correctValue ===3)
           {
             document.getElementById('choice'+x+'-1').innerText = questionsList[x-1].allAnswers[0];
             document.getElementById('choice'+x+'-2').innerText = questionsList[x-1].allAnswers[1];
             document.getElementById('choice'+x+'-4').innerText = questionsList[x-1].allAnswers[2];
             document.getElementById('choice'+x+'-1').addEventListener('click',inCorrect);
             document.getElementById('choice'+x+'-2').addEventListener('click',inCorrect);
             document.getElementById('choice'+x+'-3').addEventListener('click',correct);
             document.getElementById('choice'+x+'-4').addEventListener('click',inCorrect);
         } else if(correctValue ===4)
           {
           document.getElementById('choice'+x+'-1').innerText = questionsList[x-1].allAnswers[0];
           document.getElementById('choice'+x+'-3').innerText = questionsList[x-1].allAnswers[1];
           document.getElementById('choice'+x+'-2').innerText = questionsList[x-1].allAnswers[2];
           document.getElementById('choice'+x+'-1').addEventListener('click',inCorrect);
           document.getElementById('choice'+x+'-2').addEventListener('click',inCorrect);
           document.getElementById('choice'+x+'-3').addEventListener('click',inCorrect);
           document.getElementById('choice'+x+'-4').addEventListener('click',correct);
           }
         }

      });


}
