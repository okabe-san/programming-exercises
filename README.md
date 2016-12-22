# Problems

*Solved with brute force*

1. Generate two random integers and print their mean, variance, and standard deviation.
2. Calculate the mean, variance, and standard deviation for a list/array containing 10 random integers.
3. Generate twenty random integers from 0 to 100 and print the largest and smallest integers.
4. Generate a single random number, from 0 to 100, then output all the even integers from 0 to the random number.
5. Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
6. Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from that number down to 40. If the number is less than 40, output all the odd integers from that number down to 0.
7. **Discount Percentage**: Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less that 0 percent. Test the results.
8. Class it up. Wrap a class around the last function. Instantiate the class and call the function. Then use unittests and rspec to test.
9. Generate n random integers from 0 to 100, then output them in ascending order.
10. Generate a random number from 1000 to 9999 and output the sum of its digits. For example, if the number is 1049, then the output should be 14.
11. Generate a random number from 1000 to 9999 and output the sum of its digits, repeatedly, dropping the left-most digit after each iteration, until there is only one digit only. For example, if the number is 1049, then the output should be 14, 13, 13, 9.
12. Generate two random integers from 0 to 100 and output the smallest number such that each shares a least common denominator (aside for 1). For example, 18 and 6 should return 6, while 9 and 4 should return False. Return False if the two numbers are equal.
1. Write a function that takes two random integers as arguments and returns the least common multiple.
1. Write a program that calculates and shows the value of (x to the nth power). Let both integers fall within the range of 2 through 20.
1. **Triangle**: Write a function that takes a single number as an input and returns that many lines. On the first line there is one '#' character. On the second there are two. And so on.
This will create a nice triangle.
1. Write a function that takes two random 10-character strings as arguments, which returns True when the first string starts with the first two characters in the second string - and false otherwise.
1. Write a function that takes a paragraph as an argument and returns an array that contains each string as an element.
1. Create a simple webpage that includes three tags, an `<h1>`, `<h2>` and `<p>`, then using jQuery, create an alert that outputs the tag name when you click on the tag.
1. Write a function that takes an object/hash/dictionary of people (keys) and their subsequent ages as its argument, and then it returns the name of the oldest living person.
1. Write two functions. Both take a base and an exponent as arguments and return the value of base^exponent. Use recursion in the first function and a loop in the second. Benchmark the results.
1. **Reverse**: Write a function that takes a string as an argument and returns the string in reversed order. Test if the string is the same reversed (Palindrome).
1. **Factorial**: Write a function that takes a random number as an argument and then returns the factorial of that given number.
1. **Longest Word**: Write a function that takes a string and returns the longest word in the string.
1. **Longest Word 2**: Refactor the "Longest Word" function so that it ignores punctuation.
1. **Time Difference**: Write a function that takes two times in hours and minutes and returns the difference.
1. **Time Convert**: Write a function that takes an integer then returns the number in hours and minutes. For example, 63 should return 1:3.
1. Using JavaScript, create a function that handles errors. The function takes two integers as inputs and returns the result of dividing them. If the denominator is 0, throw an error.
1. **Spiral**: Write a function called "spiral" that takes an NxM array as input and returns a "spiral" path through the array, starting in the upper-left corner and moving clockwise. For example: [[1,2,3],[8,9,4],[7,6,5]] => [1,2,3,4,5,6,7,8,9]
1. **Password Generator**: Write a function that takes an integer as an input and returns a random password - with upper and lowercase letters, integers, and characters - the length of the integer.
1. Using jQuery and CSS, create new .js and .css files (prob30.css and prob30.js, respectively) so that when a user clicks on a button, the background color of the page will change. Use the HTML code in the corresponding folder. You do not have to edit the file.
1. **Mad Libs**: Using HTML, CSS, and jQuery, create a mad libs game. Use an HTML form to take user input. Display the results however you'd like. Get creative.
1. Create a simple to-do list using jQuery. Make sure the user can remove the items.
1. Create an app that pulls in your Github repos using AJAX. PUSH it to Heroku (using static files). Document the PUSH process. [http://git-ajax.herokuapp.com/](http://git-ajax.herokuapp.com/)
1. Write a function that takes a single string as the input then return the number of vowels the string contains. Do not count "y" as a vowel.
1. **Xs and 0s**: Create a function that takes a string of "x"s and "o"s as inputs. Return `True` if the number of "x"s and "o"s is even - and `False` otherwise.
1. Write a function that takes an array of integers and returns the number of users in it. Then refactor this to use a helper function to first test whether an integer is zero or not that's called from the original function.
1. Write a function that takes the following arguments-
    - `% The Book of Programming`
    - `%% The Two Aspects`
    - `Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.`

  And then checks the type (HTML tag) of the argument (H1, HX, or p). H1 has one "%", HX has two "%", and a p has none. Return each argument without the "&" characters as well as the type.
1. Build a function, `splitParagraph()`, which, takes a paragraph string as an input, and returns an array of paragraph fragments. (do not use any punctuation)
1. **Guessing Game**: Create a basic website that asks the user to input an integer from 1 to 100. When the user inputs a number, it should tell the user if the number they entered is too high, too low, or the exact number. When the game is over - e.g., when the user guesses correctly - display a "Start Over" button allowing the user to play again! Also, add a "Give Up" button, which displays the number and starts the game over. You should only have three files - *index.html*, *main.js*, and *main.css*. Use either jQuery or Angular for interacting with the DOM.
1. **One Missing**: Write a function that takes an array of integers between 1 and 10, with one missing integer, as an argument and returns the missing integer. Test this with Mocha and Chai.
1. **Find Odd Occurring Element**: Given an integer array, one element occurs odd number of times and all others have even occurrences. Find the element with odd occurrences.
1. **Find Next Higher Number With Same Digits**: Write a function that takes an integer and returns the next higher number that uses only the digits in that number. For example - 1345 => 1354. Hint: Write tests first!
1. **Longest Palindrome**: Write a function that takes a string as an argument and finds the longest palindrome, including whitespace. So, given the string "I am a dazzled racecar driver", the function should return "d racecar d".
1. **Byte String**: Write a function that takes an integer as an argument and converts it to a string that represents a rounded size in bytes. Examples:
  - 10221 => "9.98 KB"
  - 1022932324 => "975.54 MB"
1. **CSV Parse**: Write a function that takes a string as an argument, where all values are either and integer or a string, and then return an array of the parsed input string. Examples:
  - '3,7,9,1,25' => [ 3, 7, 9, 1, 25 ]
  - '1, "one", 2, "two", 3, "three"' => [1, "one", 2, "two", 3, "three"]
1. Create a function that takes a word as an argument and returns true if and only if all of the vowels in the word are the same.
  - myFn('oligopoly') => false
  - myFn('zoom') => true
1. **Flatten Array/Custom Callback**: Create a function that takes a nested array and a callback as arguments and returns a single, flattened array. Make sure to handle errors as well. Use a module to handle the work, making sure to export the function. Then call the function in a different file, passing in the arguments (array, callback).
1. **Intersection**: Write a function called `intersection` that takes two arrays as arguments and returns an array of the items that are in both input arrays. For example => intersection([1,2,3], [1,3,5]) should return [1,3]. Write tests!
1. **Count It**: Count the letters in a string.
  - Input: A string - like `'Hello World'`
  - Output: Letters and how often they show up. - `d:1 e:1 h:1 l:3 o:2 r:1 w:1`
  - Special: Convert all to lowercase. Ignore whitespace and anything not a-z
  - Challenge input: 'The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.'
1. **Ramp Numbers** A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
  - Input: A positive integer, `n`.
  - Output: `true` if the input is a ramp number, `false` if it is not
1. **Palindrome**: Write a program to test if a string is palindromic. A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.
1. **Combine and Sort**: Write a non-destructive function that takes two arrays and returns a new array with all items in alphabetical order.
  - Input: Two arrays, `['cat', 'dog', 'fish', 'zebra']`, `['lion', 'aardvark', 'gorilla']`
  - Output: A new array with all items in alphabetical order, `['aardvark', 'cat', 'dog', 'fish', 'gorilla', 'lion', 'zebra']`
1. **Product of Five**: Write a function called `productOfFive` that takes an integer and returns the product of the 5 adjacent numbers whose product is the largest.
  - Input: `111333321`
  - Output: `162`
1. **Rotate Matrix**: Write a function named `rotateMatrix()` that takes a rectangular array of numbers (a matrix) and returns the matrix rotated 90 degrees to the right.
  - Input: `[ [29, 62, 8], [12, 60, 31], [99, 79, 12] ];`
  - Output: `[ [99, 12, 29], [79, 60, 62], [12, 31, 8] ];`
1. **Weird Words**: Write a function `weirdWords()` that takes a string and changes every letter to the next letter in the alphabet and then returns the result. Note: spaces and special characters should remain the same. Capital letters should remain capitalized.
  - Input: `What is your name?`
  - Output: `Xibu jt zpvs obnf?`
1. **Two Sum**: Write a function that takes an array of integers and a target integer. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].
  - input: `[1, 2, 3, 4, 5, 6, 7], 13`
  - output: `[5, 6]`
