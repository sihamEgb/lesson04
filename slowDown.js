function slowDown(fun, wait) {

    fun();
    return function () {
        setTimeout(function () {
            fun();
        }, wait)
    };
}

// usage example
/*
 function printHello() {
 console.log('Hello world');
 }

 var lazyPrintHello = slowDown(printHello, 4000);
 lazyPrintHello();
 lazyPrintHello();
 lazyPrintHello();
 lazyPrintHello();
 */
