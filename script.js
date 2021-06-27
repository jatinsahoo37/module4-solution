(function() {
    var names = ["Jatin", "Ritisha", "Jatter", "Jignesh", "Rishab", "Akash", "Debasish", "Ashlesa", "Jasmine", "Jimmy"];

    for(var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter == 'j') {
            byeJ.speak(names[i]);
        } else {
            helloNj.speak(names[i]);
        }
    }
})();