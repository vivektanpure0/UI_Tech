function fun() {
    console.log('This is a function.');
}

let fun2 = () => {
    console.log('fun2 function');
    return 'aaaa';
};

let fun3 = (a, b) => {
    console.log(a + b);
};

fun();
fun2();

fun3();
fun3(20);
fun3(10, 20);
fun3('Sonu', ' Monu');
fun3(5, 20, 30);


 