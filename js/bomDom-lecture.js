'use strict';
// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop
// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

// var count = 0;
// var max = 3;
// var interval = 3000; // interval time in milliseconds
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log(count);
//     }
// }, interval);

// This will not stop until page is killed...
// var delay = 3000;
// var timeoutId = setInterval(function (){
//     alert("Here is a delayed 'Hello!'");
// }, delay);

// var delay2 = 6000;
// var to2 = setTimeout(function (){
//     clearTimeout(timeoutId);
//     alert("Stopped alerts!");
// }, delay2);

// redirect to different webpage...
// var delay = 3000;
// var timeoutID = setTimeout(function (){
//     window.location = 'http://www.imdb.com'
// }, delay);

// function reloadFromCache(){
//     location.reload();
//     alert("Reload from Cache, maybe.")
// }
// function reloadFromServer() {
//     location.reload(true);
//     alert("Reload from Server")
// }