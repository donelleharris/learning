// Promises: a tol for handling asynchronous events in JavaScript. A promise represents an event that might not yet have happened.
// A promise will be in one of three states:
        // pending: the event has not yet happened
        // resolved: the event has happened successfully
        // rejected: the event has happened and an error condition occurred
// Fetch: alternative to using jQuery to make AJAX requests
// Fetch will accept a URL and return a 'promise' representing the AJAX request.

// const myPromise = fetch('https://api.gihub.com/users');
//     myPromise.then(response => console.log(response));
//     myPromise.catch(error => console.log(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise])
    .then(function(data) {
        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .catch(function(error) {
        // handle errors
    });


// let redTurtle = Math.floor(Math.random()*10000)
// let purpleTurtle = Math.floor(Math.random()*10000)
// let blueTurtle = Math.floor(Math.random()*10000)
// let orangeTurtle = Math.floor(Math.random()*10000)
//
// let goRedTurtle = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Red Turtle Finished in ${redTurtle} ms`)
//         }, redTurtle)
//     }).then(data => {
//         console.log(data);
//     let goPurpleTurtle = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Purple Turtle Finished in ${purpleTurtle} ms`)
//         }, purpleTurtle)
//     }).then(data => {
//         console.log(data);
//
//         let goBlueTurtle = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(`Blue Turtle Finished in ${blueTurtle} ms`)
//             }, blueTurtle)
//         }).then(data => {
//             console.log(data);
//
//             let goOrangeTurtle = new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(`Orange Turtle Finished in ${orangeTurtle} ms`)
//                 }, orangeTurtle)
//             }).then(data => {
//                 console.log(data);
//                 console.log("And they're off!")
//             })
//         })
//     })
// });
// Promise.resolve('one')
// .then((one) => {
//     console.log(one);
//     return'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });
