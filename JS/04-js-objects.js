let obj = {
    key1: 'a string',
    'key-2': true,
    'key 3': {
        key31: 10,
        key32: null,
        key33: undefined
    },
    somearray: [10, 20, 30],
    sommethod: function (x, y) {
        return x + y;
    }
};

console.log(obj);