
// callback 

// let fun = () => {
//     console.log('fun message');
// }
// fun();

// let arg1 = () => { return 'fun message' }

// let fun = () => {
//     setTimeout(arg1, 1000);
// }

// let message = fun();
// console.log(message);

// let fun = () => {
//     setTimeout(() => {
//         return 'fun message';
//     } , 1000);
// }

// let message = fun();
// console.log(message);

// problem of async javascript 

// let fun = () => {
//     setTimeout(() => {
//         return {message: 'fun message'};
//     } , 1000);
// }

// let getFun = fun();
// console.log(getFun.message);

// solution 1. callback 

// let fun = (abc) => {
//     setTimeout(() => {

//         abc({ message: 'fun message' });

//     }, 2000);
// }

// fun((getFun) => {
//     console.log(getFun.message);
// }
// );

// simplified version 

let fun = (abc) => {
    setTimeout(() => {
        abc(10, 20);
    }, 2000);
}

let argumentToAbc = (a, b) => {
    console.log(a + b);
}

fun(argumentToAbc);

// async 

// await