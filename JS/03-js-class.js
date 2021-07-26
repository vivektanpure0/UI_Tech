class Class2 {
    
}

class MyClass {

    constructor() {
        console.log('MyClass construtor');
    }

    fun = () => {
        console.log('MyClass fun');
    }

}

let obj = new MyClass();

obj.fun();