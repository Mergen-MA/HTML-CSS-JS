(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);






// (function(window) {
//     var speakWord = "Hello";
//     var helloSpeaker = function speak(name) {
//         console.log(speakWord + " " + name);
//         } 
//         window.helloSpeaker = helloSpeaker;
//         }
    
// )(window);
