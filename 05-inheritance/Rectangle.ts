import { Shape } from "./Shape";
import { Circle } from "./Circle";


export class Rectangle extends Shape{


    constructor(theX:number,theY:number,
        private _width : number , private _length: number){
            super(theX,theY);
    }

    public get width() {
        return this._width;
    }
    public set width(value) {
        this._width = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    
    getInfo(): string {
        return super.getInfo() + ` width=${this._width}, length=${this._length}`;
    }
} 