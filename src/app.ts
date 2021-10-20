const button = document.querySelector(('button'))!;

button.addEventListener('click', () => {
    const vall = 34;
    console.log('Clicled laptop');
    cryptoResult();
});

function cryptoResult(): void {
    const input = 'gsrxmrirxepvypiw';
    let temp: string = input;

    for (let i = 0; i < 26; i++) {
    let result: string = '';
        for (let i = 0; i < input.length; i++) {
            let nextChar = temp.charCodeAt(i) + 1;
            if (nextChar > 122) {
                nextChar -= 26;
            }
            result += nextChar;
        }
    temp = result;

    console.log(result);
    }

}