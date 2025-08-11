
const num1 = document.getElementById('num_1');
const num2 = document.getElementById('num_2');

const buttons = document.querySelectorAll('button');
const output = document.createElement('div');
output.id = 'output';
document.body.appendChild(output);

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let val1 = parseFloat(num1.value);
        let val2 = parseFloat(num2.value);
        let result;

        if (btn.innerHTML.includes('fa-plus')) {
            result = val1 + val2;
        } else if (btn.innerHTML.includes('fa-minus')) {
            result = val1 - val2;
        } else if (btn.innerHTML.includes('fa-xmark')) {
            result = val1 * val2;
        } else if (btn.innerHTML.includes('fa-divide')) {
            result = val2 !== 0 ? val1 / val2 : 'Cannot divide by zero';
        } else {
            return; 
        }

        output.textContent = `Result: ${result}`;
    });
});
