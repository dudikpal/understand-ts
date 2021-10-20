let userInput: unknown;
let userNem : string;

userInput = 5;
userInput = 'asd';
if (typeof userInput === 'string') {
    userNem = userInput;
}


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};

}

generateError('An error occured$', 500);