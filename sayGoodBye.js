(function(window) {
    var byeJ = {};

    var sayWord = "Good Bye ";

    byeJ.speak = function (name) {
        console.log(sayWord + name);
    }

    window.byeJ = byeJ;
})(window);