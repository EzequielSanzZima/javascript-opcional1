let menu = prompt('Ingrese un numero para continuar: \n -1: Suma \n -2: Resta \n -3: Division \n -4: Multiplicar \n -5: Tabla de multiplicacion');

while(menu != 'ESC'){
    switch (menu){
        case "1":
                let suma1 = parseInt(prompt('Ingrese el primer numero de suma'));
                let suma2 = parseInt(prompt('Ingrese el segundo numero de suma'));
                const resultadoSuma = suma1 + suma2
                let textoSuma = 'La suma de ' + suma1 + ' + ' + suma2 + ' = ' + resultadoSuma 
                alert(textoSuma);
                break;
        case "2":
                let resta1 = parseInt(prompt('Ingresa el primer numero para restar'));
                let resta2 = parseInt(prompt('Ingresa el primer numero para restar'));
                const resultadoResta = resta1 - resta2
                let textoResta = 'La resta de ' + resta1 + ' - ' + resta2 + ' = ' + resultadoResta 
                alert(textoResta);
                break;
        case "3":
                let dividiendo = parseInt(prompt('Ingresa el primer numero para dividir'));
                let divisor = parseInt(prompt('Ingresa el segundo numero para dividir'));
                const resultadoDivision = dividiendo /= divisor
                let textoDivision = 'La division ' + dividiendo + ' / ' + divisor + ' = ' + resultadoDivision
                alert(textoDivision);
                break;
        case "4":
                let multipliacion1 = parseInt(prompt('Ingrese el primer numero para multiplicar'));
                let multiplicacion2 = parseInt(prompt('Ingrese el segundo numero para multiplicar'));
                const resultadoMultiplicacion = multipliacion1 * multiplicacion2
                let textoMultiplicacion = 'La multiplicacion de ' + multipliacion1 + ' * ' + multiplicacion2 + ' = ' + resultadoMultiplicacion
                alert(textoMultiplicacion);
                break;
        case "5":
                let tablaMultiplicacion = parseInt(prompt('Ingrese el numero para saber la tabla de multiplicacion'));
                for (let i=1; i<=10; i++){
                    const resultadoTablaMultiplicacion = i * tablaMultiplicacion
                    let textoTablaMultiplicacion = i + ' * ' + tablaMultiplicacion + ' = ' + resultadoTablaMultiplicacion
                    alert (textoTablaMultiplicacion);
                }
                break;
        default:
            alert('Ingresa un numero de 1 a 5.');
            break;
    }
    menu = prompt('Ingrese un numero para continuar: \n -1: Suma \n -2: Resta \n -3: Division \n -4: Multiplicar \n -5: Tabla de multiplicacion');
}