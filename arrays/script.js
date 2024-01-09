// Exemplo
let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

// Fibonacci
const fibonacci = (number) => {
    const fibonacci = [];
    fibonacci[1] = 1;
    fibonacci[2] = 1;

    for (let i = 3; i < number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    for (let i = 1; i < fibonacci.length; i++) {
        console.log(fibonacci[i]);
    }
    return 'Fim!';
};

// Inserindo um elemento na primeira posição
Array.prototype.insertFirstPosition = (value) => {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Removendo um elemento da primeira posição
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}
console.log(numbers); // Irá retornar um elemento undefined

// Para remover esse elemento undefined precismos criar outro array e copiar todos os valores diferentes de undefined do array original para o novo array e atribui-lo ao nosso array
Array.prototype.reIndex = (myArray) => {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};
const resultado = `Array com o método reIndex: ${numbers.reIndex(numbers)}`;
console.log(resultado);

// Array bidimensional
const averageTemp = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

for (let i = 0; i < averageTemp.length; i++) {
    for (let j = 0; j < averageTemp[i].length; j++) {
        averageTemp[i][j];
    }
}

// Arrays multidimensionais
const matrix = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let z = 0; z < arr[i][j].length; z++) {
                console.log(arr[i][j][z]);
            }
        }
    }
};
const isEven = (x) => (x % 2 == 0 ? 'GOOD!' : 'AAAAAA!');

// Map e filter
