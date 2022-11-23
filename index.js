const receivesAFunction = (expression) => {
    expression()
};

function returnsANamedFunction() {
    return function namedFunction(){
        console.log("This function returns a named function");
    }
};

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Anonymous");
    }
};