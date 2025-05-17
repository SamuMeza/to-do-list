// Obtener elementos del DOM
const display = document.querySelector('.inputDisplay');
const buttons = document.querySelectorAll('button');

// Variables para los cálculo
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// Agregar Eventos de Clics a cada boton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener Numeros
        let value = button.textContent;
        if (value >= 0 && value <= 9 || value === '.') {
            if(!operator){
                num1 += value;
                display.value = num1;
            }else{
                num2 += value;
                display.value = num2;
            }
        }else if(value === '+' || value === '-' || value === '*' || value === '/'){ // Obtener Operadores  
            if(num1 && !operator){
                operator = value;
            }
        }else if(value === '='){ // Obtener Resultado
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            
            switch (operator) {
                case '+':
                    result = n1 + n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                case '/':
                    result = n1 / n2;
                    break;
            }
            display.value = result;
            num1 = result;
            num2 = '';
            operator = '';
        }else if(value === 'c'){ // Obtener Limpiar (Clear)
            num1 = '';
            num2 = '';
            operator = '';
            result = '';
            display.value = '';
        }
    });
});