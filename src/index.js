
exports.min = function min (array) {
    if ( typeof array === 'undefined' || isNaN(array[0])) {return 0 }
    else {
        array.sort((a,b) => a - b)
        return array[0]
    }
}

exports.max = function max (array) {
    if ( typeof array === 'undefined' || isNaN(array[0])) {return 0 }
    else {
        array.sort((a,b) => a - b)
        return array[array.length-1]
    }
  
}

exports.avg = function avg (array) {    
    if ( typeof array === 'undefined' || isNaN(array[0])) {return 0 }
    else {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total/array.length;
  }
}
