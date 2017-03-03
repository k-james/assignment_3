//1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

//var movies = ["one", "two", "three", "four", "five"];
//window.console.log(movies[1]);

//2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

//var movies = ["one", "two", "three", "four", "five"];
//window.console.log(movies[0]);

//3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

//var movies = ["one", "two", "three", "four", "five"];
//movies.splice(1, 0, "NEW");
//window.console.log(movies.length);


//4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

//var movies = ["one", "two", "three", "four", "five"];
//delete movies[0];
//window.console.log(movies);


//5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

//var movies = ["one", "two", "three", "four", "five", "six", "seven"];
//var i;
//for (i = 0; i < movies.length; i++) {
//    window.console.log(movies[i]);
//}

//6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.

//var movies = ["one", "two", "three", "four", "five", "six", "seven"];
//for (var index in movies) {
//    window.console.log(movies[index]);
//}

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

//var movies = ["one", "two", "three", "four", "five", "six", "seven"];
//for (var index in movies) {
//    movies.sort();
//    window.console.log(movies[index]);
//}

//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3

//var goodMov = ["goodOne", "goodTwo", "goodThree"];
//var badMov = ["badOne", "badTwo", "badThree"];
//window.console.log("movies liked \n" + goodMov.join("\n"));
//window.console.log("movies hated \n" + badMov.join("\n"));

//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

//var goodMov = ["goodOne", "goodTwo", "goodThree"];
//var badMov = ["badOne", "badTwo", "badThree"];
//var allMov = goodMov.concat(badMov);
//window.console.log(allMov.reverse());

//10.	Return just the last item in the array and display it within the console window.

//var goodMov = ["goodOne", "goodTwo", "goodThree"];
//var badMov = ["badOne", "badTwo", "badThree"];
//var allMov = goodMov.concat(badMov);
//window.console.log(allMov.pop());

//11.	Remove the previous method and this time return just the first item in the array and display it within the console window.

//var goodMov = ["goodOne", "goodTwo", "goodThree"];
//var badMov = ["badOne", "badTwo", "badThree"];
//var allMov = goodMov.concat(badMov);
//window.console.log(allMov.shift());

//12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

//var goodMov = ["goodOne", "goodTwo", "goodThree"];
//var badMov = ["badOne", "badTwo", "badThree"];
//var allMov = goodMov.concat(badMov);
//allMov.splice(3,3, "newOne", "newTwo", "newThree");
//window.console.log(allMov);

//13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 

//var employee1 = [];
//employee1[0] = [];
//employee1[0]["id"] = 100;
//employee1[0]["name"] = "Amy";
//employee1[0]["title"] = "jobOne";
//employee1[0]["department"] = "deptOne";
//employee1[0]["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 200;
//employee2["name"] = "Brian";
//employee2["title"] = "jobTwo";
//employee2["department"] = "deptTwo";
//employee2["isCurrent"] = true;
//employee1.push(employee2);
//
//window.console.log(employee1[0]["name"]);

//14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.

//var employee1 = [];
//employee1[0] = [];
//employee1[0]["id"] = 100;
//employee1[0]["name"] = "Amy";
//employee1[0]["title"] = "jobOne";
//employee1[0]["department"] = "deptOne";
//employee1[0]["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 200;
//employee2["name"] = "Brian";
//employee2["title"] = "jobTwo";
//employee2["department"] = "deptTwo";
//employee2["isCurrent"] = true;
//employee1.push(employee2);
//
//var result = "";
//var index;
//for (index in employee1){
//    result += index + name[index] + "\n";
//}
//window.console.log(result);


//15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.



//16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.



//Practice with Functions (5 points)
//1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.

//var displayMessage = function (message) {
//    window.console.log(message);
//};
//displayMessage("hello world");

//2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.

//function calculate(a, b) {
//   return (a % b); 
//}
//window.console.log(calculate(5, 3));

//3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//
//

//var employees = ["amy", "brian", "charlie", "david", "ellie"];
//var showEmployee = function(employees){
//    for (var i = 0; i < employees.length; i++){
//        window.console.log(employees[i] + "\n");
//    }
//}





//The Rock, Paper, Scissors Game (10 points)
//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//•	Rock destroys scissors.
//•	Scissors cut paper.
//•	Paper covers rock.
//Our code will break the game into 3 phases:
//1.	User makes a choice. How will we collect the user’s choice?
//2.	Computer makes a choice. How will we collect the computer’s choice?
//3.	A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//1.	Begin by prompting the user for their choice.
//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.	What if the result ends in a tie? Figure out how to handle that as well.
//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.


//var user = window.prompt("Choose rock, paper or scissors");
//var computer = Math.random();
//if (computer < 0.34) {
//    computer = "rock";
//} else if (computer <= 0.67) {
//    computer = "paper";
//} else {
//    computer = "scissors";
//}
//window.console.log(computer);
//
//
//var compare = function (choice1, choice2) {
//    if (choice1 === choice2) {
//        return "the result is a tie";
//    } else if (choice1 === "rock") {
//        if (choice2 === "scissors") {
//            return "rock wins";
//        } else {
//            return "paper wins";
//        }
//    } else if (choice1 === "paper") {
//        if (choice2 === "rock") {
//            return "paper wins";
//        } else {
//            if (choice2 === "scissors") {
//                return "scissors wins";
//            }
//        }
//        if (choice1 === "scissors") {
//            if (choice2 === "rock") {
//                return "rock wins";
//            } else {
//                if (choice2 === "paper") {
//                    return "scissors win";
//                }
//            }
//        }
//    }
//};
//window.alert(compare(user, computer));

//The Basic Calculator (10 points)
//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:
//1.	Prompt the user for a number and store that in a variable.
//2.	Prompt the user for a second number and store that in a variable.
//3.	Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
//4.	Create a new named function called calculate() that accepts 3 parameters.
//5.	Call the calculate function and pass in the 3 variables as parameters. 
//HINT: You will need to convert the 2 numbers from strings to numbers. 
//6.	Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7.	Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.

//var num1 = window.prompt("enter first number");
//var num2 = window.prompt("enter second number");
//var opp = window.prompt("enter operation: add, subtract, multiply, divide");
//
//function calculate(x, y, z){
//   
//    switch(calculate){
//        case "add":
//            var x = parseFloat("num1").value;
//            var y = parseFloat("num2").value;
//            var z = opp.split("+");
//            var result = x + y;
//            break;
//        case "subtract":
//            var x = parseFloat("num1").value;
//            var y = parseFloat("num2").value;
//            var z = opp.split("-");
//            var result = x - y;
//            break;
//        case "multiply":
//            var x = parseFloat("num1").value;
//            var y = parseFloat("num2").value;
//            var z = opp.split("*");
//            var result = x * y;
//            break;
//        case "divide":
//            var x = parseFloat("num1").value;
//            var y = parseFloat("num2").value;
//            var z = opp.split("/");
//            var result = x / y;
//            break;
//            }
//}
//window.console.log(result);


//Death by JavaScript (4 points each for 20 points total)
//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.
//1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//
//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'

//var a = ["a", "b", "c"];
//a.forEach(function(element) {
//          console.log(element);
//});

//
//2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
//Expected Output: 'The Quick Brown Fox'

//function upperCase(str) {
//    var array = str.split('');
//    var newArray = [];
//    var i;
//    for (i = 0; i < array.length; i++) {
//        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//    }
//    return newArray.join('');    
//}
//console.log(upperCase("the quick brown fox"));

//3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5

//function vowel(str) {
//    var all = "aeiouAEIOU";
//    var count = 0;
//    for ( var i = 0; i < str.length; i++) {
//        if (all.indexOf(str[i]) !== -1) {
//            count += 1;
//        }
//    }
//    return count;
//}
//window.console.log(vowel("the quick brown fox"));
//
//4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA

//function randomEight() {
//    var length = 8;
//    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    result = "";
//    for (var i = 0; i < length; i++) {
//        var x = Math.floor(Math.random() * charset.length);
//        result += charset.charAt(x);
//    }
//    return result;
//}
//window.console.log(randomEight());

//
//5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"

//function longestWord(string) {
//    var str = string.split(',');
//    var longest = 0;
//    var word;
//    for (var i = 0; i < str.length - 1; i++) {
//        if (longest < str[i].length) {
//            longest = str[i].length;
//            word = str[i];
//        }
//    }
//    return word;
//}
//window.console.log(longestWord("australia, germany, united states"));