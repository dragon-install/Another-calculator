let calculator = {
  add: function(x, y) {
    return x + y
  }, 
  
  subtract: function(x, y) {
    return x - y
  }, 

  multiply: function(x, y) {
    return x * y
  }, 

  divide: function(x, y) {
    if(y != 0) {
      return x / y
    } else {
      return 
    }
  }, 

  operate: function(operator, x, y) {
    switch(operator) {
      case '+':
        return this.add(x, y)
      case '-':
        return this.subtract(x, y)
      case 'x':
        return this.multiply(x, y)
      case '/':
        return this.divide(x, y)
    }
  }
}


console.log(calculator.operate('-', 2, 21))

