(function(window){
    var yaakovGreeter = {};
    var name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function(){
        console.log(greeting + name);
    }

    window.yaakovGreeter = yaakovGreeter;
})(window);