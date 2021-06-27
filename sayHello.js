(function(window) {
    var helloNj = {};

    var sayWord = "Hello ";

    helloNj.speak = function (name) {
        console.log(sayWord + name);
    }

    window.helloNj = helloNj;
})(window);