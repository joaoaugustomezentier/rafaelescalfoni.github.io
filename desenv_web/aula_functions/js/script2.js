(function(window){
var johnGreeter = {};
var name = "John";
var greeting = "Hi ";
johnGreeter.sayHi = function(){
    console.log(greeting + name);
}
window.johnGreeter = johnGreeter;
})(window);