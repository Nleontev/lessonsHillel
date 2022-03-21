function Calculator() {
    this.methodsMap = {
        'sum' : 0,
        'subtract' : 0,
        'pow' : 0,
        'multiply' : 0,
        'divide' : 0,
        'lastMethod' : {
            method : '',
            value : ''
        }
    };
    
    this.updateData = (methodsName, methodValue) => {
        this.methodsMap[methodsName] +=1;
        this.methodsMap['lastMethod'] = {method : methodsName, value : methodValue}
    }

    this.sum = function(firstNumber, secondNumber) {
        value = firstNumber + secondNumber;
        this.updateData('sum', value);
        return value;
    };
    this.subtract = function(firstNumber, secondNumber) {
        value = firstNumber - secondNumber;
        this.updateData('subtract', value);
        return value;
    };
    this.pow = function(firstNumber, secondNumber) {
        value = firstNumber ** secondNumber;
        this.updateData('pow', value);
        return value;
    };
    this.multiply = function(firstNumber, secondNumber) {
        value = firstNumber * secondNumber;
        this.updateData('multiply', value);
        return value;
    };
    this.divide = function(firstNumber, secondNumber) {
        value = firstNumber / secondNumber;
        this.updateData('divide', value);
        return value;
    };
    this.getMethodCallCount = function(keyMethod){
        for (key in this){
            if (key === keyMethod){
                return this.methodsMap[keyMethod];
            }
        }
        
    };
    this.getLastOperation = function(){
        return this.methodsMap.lastMethod;
    };
}

let calculator = new Calculator();
console.log(calculator.sum(10, 5)); // 15 
console.log(calculator.sum(20, 5)); // 25 
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.pow(2, 3)); // 8
console.log(calculator.multiply(2, 3)); // 6
console.log(calculator.divide(6, 2)); // 3

console.log(calculator.getMethodCallCount("sum")); // 2
console.log(calculator.getMethodCallCount("subtract")); // 1

console.log(calculator.getLastOperation()); // { method 'divide', result: 3 }