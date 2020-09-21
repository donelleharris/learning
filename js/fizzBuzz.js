// function fizzBuzz(num){
//     for (let i = 1; i <=num; i++) {
//         if (i % 15 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(150);
// (function (){
//     $(document).ready(function (){
//         $('#goFizzBuzz').click(function (){
//             var num = $('#input').val();
//             for (let i = 1; i <=num; i++) {
//                 if (i % 15 === 0) {
//                     $('#fizzbuzz').append('<p>fizzbuzz</p>')
//                 } else if (i % 3 === 0) {
//                     $('#fizzbuzz').append('<p>fizz</p>')
//                 } else if (i % 5 === 0) {
//                     $('#fizzbuzz').append('<p>buzz</p>')
//                 } else {
//                     $('#fizzbuzz').append('<p>' + i + '</p>')
//                 }
//             }
//         });

//     });
// })();

// ES6 + ternary version of 'fizzbuzz' found online:

// const fizzBuzz = (num) => {
//     for (let i = 1; i <=num; i++) {
//         console.log((i % 3 === 0 && i % 5 === 0) ?
//         "fizzbuzz": (i % 5 === 0 ?
//             "buzz" : (i % 3 === 0 ?
//                 "fizz" : i)));
//     }
// }
// console.log(fizzBuzz(30));

const danielsFizzBuzz = (num = 30) => {
    for (let i=1;i<=num;i++){
        if(i%15===0) console.log(`fizzbuzz`);
        else if (i%5 === 0) console.log(`buzz`);
        else if (i%3 === 0) console.log('fizz');
        else console.log(`${i}`)
    }
}
console.log(danielsFizzBuzz(20))