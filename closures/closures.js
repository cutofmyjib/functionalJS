/* -----------------
      ex 1 - 4
----------------- */

var logLater;
function nonesense(string) {
  var blab = function(){
    console.log(string);
  };
  logLater = function() {
    setTimeout(blab,5000);
  }
  return logLater;
}

var blabLater = nonesense("hello")

/* -----------------
      ex 5
----------------- */
var lastNameTrier = function(firstName){
    var innerFunction = function(lastName) {
        return firstName + ' ' + lastName
    };
    return innerFunction;
};
// var firstNameFarmer = lastNameTrier('Farmer');
// firstNameFarmer('Brown');

/* -----------------
      ex 6
----------------- */
function storyWriter() {
  var story = '';
  return {
    addWords: function(string) {
      string.trim();
      story += ' ' + string;
      return story.trim();
    },
    erase: function() {
      return story = '';
    }
  }
}

/* -----------------
      ex 7
----------------- */
var Toaster = (function(){
  var temp
  var isValidTemp = function(newTemp) {
    return (newTemp > 0 && newTemp <= 400) ?  true : false
  }

  return {
    setTemp: function(newTemp) {
      if (isValidTemp(newTemp)) {
        temp = newTemp
        return "Temperature set to " + temp
      } else {
        return "Please enter a value that is greater than 1 and less than or equal to 400"
      }
    },

    toast: function() {
      if (!(temp))  {
        return "Please set a temperature"
      }

      //logs a number in chrome browser----????
      return setTimeout(function() {
        console.log("Toasted at " + temp + " degrees temperature")
      }, 2000)
    }
  };
})();


Toaster.setTemp(200)
Toaster.toast()