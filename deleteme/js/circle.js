import { Shape } from "./shape.js"; // Tuodaan Shape-luokka

export class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y); // Kutsutaan Shape-luokan konstruktoria
        this._radius = radius; // Asetetaan ympyrän säde
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        ctx.stroke(); // Piirretään ympyrä
    }
}
