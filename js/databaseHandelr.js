//global variable
var db;

window.onload = function()
{
		document.getElementById('btnSave').addEventListener('click',saveData);
		document.getElementById('btnLogin').addEventListener('click',checkData);
		db = window.openDatabase("trivia","1.0","games",2000000);
		// name of database - version - description - size in bytes
}

    //signup function
		function saveData(e)
		{
				//transaction is a function
				db.transaction(saveRecord, onSuccess, onError)
		}

		function saveRecord(transaction)
		{
				var name = document.getElementById('name').value;
				var email = document.getElementById('email').value;
				var password = document.getElementById('password').value;
				var profileimage = document.getElementById('myimage').getAttribute('src');
				console.log(profileimage);

				//creating the table
				transaction.executeSql('CREATE TABLE IF NOT EXISTS accounts(id INTEGER PRIMARY KEY AUTOINCREMENT, userame TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL, image TEXT NOT NULL, score INTEGER, level INTEGER)');

				var sql = "INSERT INTO accounts (userame,password,email,image,score,level) VALUES ('"+name+"','"+password+"', '"+email+"','"+profileimage+"', 0, 0)";

				console.log(sql);
				transaction.executeSql(sql);

				transaction.executeSql("SELECT * FROM accounts", [], getSuccess, getError);

		}

		function getSuccess(tx, result)
		{
			//to check that the account have been added
				var rows = result.rows;
				for(var x=0; x<rows.length; x++)
						{
								var name = result.rows[x].userame;
								var image = result.rows[x].image;
								var out = "<li>"+name+"<br/>"+image+"</li>";
								//document.getElementById('members').innerHTML += out;

								console.log(out);

						}
						// to move to the next page which is the log in page
						document.location.href = "#login";


		}
		function getError(e)
		{
				console.log(e);
		}
		function onSuccess()
		{
				console.log("Record Saved");
		}

		function onError(error)
		{
				console.log(error);
		}

    //Login Function

		function checkData(e)
		{
			console.log("inside checkdata");

				//transaction is a function
				db.transaction(checkRecord, onSuc, onEr);
		}


		function checkRecord(transaction)
		{
			console.log("inside check redord");
				var name = document.getElementById('nameLogin').value;
				var password = document.getElementById('passwordLogin').value;


				//creating the table
				transaction.executeSql('CREATE TABLE IF NOT EXISTS accounts(id INTEGER PRIMARY KEY AUTOINCREMENT, userame TEXT NOT NULL, password TEXT NOT NULL, email TEXT NOT NULL, image TEXT NOT NULL, score INTEGER, level INTEGER)');

				var sql = "SELECT * FROM accounts";

				console.log(sql);

				transaction.executeSql(sql, [], getSuc, getEr);

		}

		function getSuc(tx, result)
		{

				var rows = result.rows;
				for(var x=0; x<rows.length; x++)
						{
							var name = document.getElementById('nameLogin').value;
							var password = document.getElementById('passwordLogin').value;
								var temp_name = result.rows[x].userame;
								var temp_password = result.rows[x].password;
								if(temp_name === name)
								{
									console.log("username found");
									if(temp_password === password)
									{
										console.log("password is correct");
										//using local storage for later use
										localStorage.setItem('LCid',id);
										localStorage.setItem('LCusername',name);
										localStorage.setItem('LCpassword',password);
										var temp_img = result.rows[x].image;
										localStorage.setItem('LCimage',temp_img);
										var temp_email = result.rows[x].email;
										localStorage.setItem('LCemail',temp_email);
										var temp_score = result.rows[x].score;
										localStorage.setItem('LCscore',temp_score);
										var temp_level = result.rows[x].level;
										localStorage.setItem('LClevel',temp_level);
										document.location.href = "#optionsList";
									}
								}
						}

						//if not logged in
						$("#hidden").css("visibility", "visible");
		}
		function getEr(e)
		{
				console.log(e);
		}
		function onSuc()
		{
				console.log("Record Checked");
		}

		function onEr(error)
		{
				console.log(error);
		}

//global variables
var scoredb;
var leveldb;
var usernamedb;
    //update the database
		function update(score,level)
		{
			console.log("inside update database");

			scoredb = score;
			leveldb = parseInt(level);
			usernamedb = localStorage.getItem('LCusername');
				//transaction is a function
				//db.transaction(updateRecord, onS, onE);
				db.transaction(function(transaction) {
				 var executeQuery = "UPDATE accounts SET score=?, level=? WHERE userame=?";
				 transaction.executeSql(executeQuery, [scoredb,leveldb,usernamedb],
				 //On Success
				 function(tx, result) {console.log('Updated successfully');},
				 //On Error
				 function(error){console.log('Something went Wrong');});
				 });


		}


    //Forget Password



    //logout function


    //Displaying user email on home page
