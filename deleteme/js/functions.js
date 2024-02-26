import { Circle } from "./class/circle.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const x_input = document.querySelector('#x');
const y_input = document.querySelector('#y'); 
const draw_button = document.querySelector('button');
const radio_form = document.querySelector('form');
const line_width_input = document.querySelector('input[type=number]')

const drawCircle = () => {
    const x = x_input.value;
    const y = y_input.value;
    const width = document.querySelector('div#third input').value; // Korjattu oikeinkirjoitus: 'width'
    const circle = new Circle(x, y, width / 2);
    circle.setLineWidth = lineWidth
    circle.draw(ctx); // Lisätty piirtometodin kutsu
};

draw_button.addEventListener('click', () => {
    const shape = radio_form['shape'].value;
    switch (shape) {
        case 'line':
            // Lisää viivan piirtotoiminto
            break;
        case 'circle':
            drawCircle(); // Kutsu piirtävää funktiota
            break;
        case 'rectangle':
            // Lisää suorakulmion piirtotoiminto
            break;
        case 'square':
            // Lisää neliön piirtotoiminto
            break;
    }
});

const updateUI = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3;
    
    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4;
        document.querySelector('div#fourth label').style.display = "inline-block";
        document.querySelector('div#fourth input').style.display = "inline-block";
    } else {
        document.querySelector('div#fourth label').style.display = "none";
        document.querySelector('div#fourth input').style.display = "none";
    }
};

radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value;
    switch (shape) {
        case 'line':
            updateUI('x2', 'y2');
            break;
        case 'circle':
            updateUI('Width:');
            break;
        case 'rectangle':
            updateUI('width:', 'height:');
            break;
        case 'square':
            updateUI('width:');
            break;
    }
});
