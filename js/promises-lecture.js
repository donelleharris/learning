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
Promise.resolve('one')
.then((one) => {
    console.log(one);
    return'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then((three) => {
    console.log(three);
});