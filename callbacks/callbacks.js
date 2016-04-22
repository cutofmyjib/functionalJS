/* -----------------
      ex 1
----------------- */
function funcCaller(func, arg) {
  return func(arg)
}

/* -----------------
      ex 2
----------------- */
var firstVal = function(arr, func) {
  func(arr[0], 0, arr)
}

/* -----------------
      ex 3
----------------- */
var firstVal = function(list, func) {
  if (Array.isArray(list) {
    func(arr[0], 0, arr)
  } else {
    // for ( var key in list ) {
    //   func(list[key], key, list)
    // }

    //returns all properties of object in an array
    var propArr = Object.keys
    func(list[propArr[0]], propArr[0], list)
  }
}