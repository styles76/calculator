
let currentInput = '';
let screen = document.getElementById('screen'); 

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'C':
                currentInput = '';
                break;
            case '←':
                currentInput = currentInput.slice(0, -1);
                break;
            case '=':
                try {
                    let expression = currentInput
                        .replace(/÷/g, '/')
                        .replace(/×/g, '*')
                        .replace(/−/g, '-');
                    const result = eval(expression);
                   
        if (result === Infinity || result === -Infinity) {
            currentInput = 'Cannot divide 0';
        } else {
            currentInput = result.toString();
        }
    } catch (err) {
        currentInput = 'Error';
    }
    break;
            default:
                currentInput += value;
        }

        screen.textContent = currentInput || '0';
    });
});
