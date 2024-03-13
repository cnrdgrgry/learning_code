<html>
  <body>
    <script>
      //exercise 5-2; You've now seen three different ways of creating functionsl
      //function declarations, function expressions, and arrow functions. Write each of
      //of the following in all three styles

      A function that takes a number from 0 to 5 and returns the English word for that 
      number -->
      let myArray = ['zero', 'one', 'two', 'three', 'four'];

      function counting(someArray) {
        for (let index of someArray) {
          console.log(`${index}`);
        }
      }


      for countingUp = (someArray) => {
        let newArray = []
        for (let index = 0; index < someArray.length; index++) {
          newArray.push(someArray[index]};)
        }
        return newArray;
      }

     // a function with no parameters that prints how many times its been called
     // Hint: define a variable outside the function to keep track of the calls.

      let thisCount = 0

      function keepingTrack() {
        thisCount++;
        console.log(`The counter is now at ${thisCount}!`)
      }

      let countThisCount = function() {
        thisCount++;
        console.log(thisCount);
        return thisCount;
      } 
      
      thisCount = 0
      let arrowCount = () => {
       console.log(thisCount); thisCount++;
      }

      //A function that prints the current date and time.HINT: use 'new Date'

      function whatDate() {
        console.log(new Date);
      }

      let theDate = function() {console.log(new Date);}

      let arrowDate = () => console.log(new Date);

      //Write a function that takes a prefix and a suffix and returns a new
      //function that adds the prefix and suffix to a provided string.
      function makeWrapper(prefix, suffix) {
         return function (someWords) {
            return prefix + someWords + suffix;
          };
      }
        
      let wrapMe = makeWrapper('[[', ']]')
      wrapMe('Well this is cosy')

   </script>
      <<h1>This is my test page.</h1>
  </body>
</html>
